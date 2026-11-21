import { Fragment, type ReactNode } from "react";

/** Renders simple markup blocks:
 *   "## "  → h2 section heading
 *   "### " → h3 sub-heading (e.g. a sidebar title)
 *   "> "   → pull-quote
 *   "- "   → bullet; consecutive bullets are grouped into one list
 *   "| a | b |\n| c | d |" → table, first row is the header
 *   "~ "   → small italic note (disclaimers, scripture sign-offs)
 *   everything else → paragraph
 *  Inside any block, **bold** and *italic* are supported. Kept
 *  intentionally simple for the placeholder content layer; swap for a
 *  rich-text/MDX renderer once a real CMS is connected. Each block eases in
 *  as it scrolls into view — see the `.article-body` scroll animations in
 *  globals.css. */
export default function ArticleBody({ blocks }: { blocks: string[] }) {
  const out: ReactNode[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (block.startsWith("- ")) {
      const items: string[] = [];
      while (i < blocks.length && blocks[i].startsWith("- ")) {
        items.push(blocks[i].slice(2));
        i++;
      }
      i--;
      out.push(
        <ul key={i}>
          {items.map((item, j) => (
            <li key={j}>{inline(item)}</li>
          ))}
        </ul>,
      );
    } else if (block.startsWith("## ")) {
      out.push(<h2 key={i}>{inline(block.slice(3))}</h2>);
    } else if (block.startsWith("### ")) {
      out.push(<h3 key={i}>{inline(block.slice(4))}</h3>);
    } else if (block.startsWith("> ")) {
      out.push(
        <p key={i} className="pull-quote">
          {inline(block.slice(2))}
        </p>,
      );
    } else if (block.startsWith("|")) {
      const rows = block
        .split("\n")
        .map((line) =>
          line
            .trim()
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((cell) => cell.trim()),
        );
      const [head, ...body] = rows;
      out.push(
        <div key={i} className="article-table">
          <table>
            <thead>
              <tr>
                {head.map((cell, j) => (
                  <th key={j} scope="col">
                    {inline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, j) => (
                    <td key={j}>{inline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
    } else if (block.startsWith("~ ")) {
      out.push(
        <p key={i} className="article-note">
          {inline(block.slice(2))}
        </p>,
      );
    } else {
      out.push(<p key={i}>{inline(block)}</p>);
    }
  }

  return <div className="article-body">{out}</div>;
}

/** **bold** and *italic* within a block. */
function inline(text: string): ReactNode {
  if (!text.includes("*")) return text;
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, k) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={k}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={k}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={k}>{part}</Fragment>;
  });
}
