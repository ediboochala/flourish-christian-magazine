/** Renders simple markup blocks: "## " → h2 heading, "> " → pull-quote,
 *  everything else → paragraph. Kept intentionally simple for the
 *  placeholder content layer; swap for a rich-text/MDX renderer once a
 *  real CMS is connected. */
export default function ArticleBody({ blocks }: { blocks: string[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return <h2 key={i}>{block.replace("## ", "")}</h2>;
        }
        if (block.startsWith("> ")) {
          return (
            <p key={i} className="pull-quote">
              {block.replace("> ", "")}
            </p>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
