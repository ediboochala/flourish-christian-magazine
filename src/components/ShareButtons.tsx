"use client";

import { useEffect, useState } from "react";
import { Link2, Mail } from "lucide-react";
import { FacebookIcon, WhatsAppIcon, XIcon } from "@/components/ui/BrandIcons";

interface ShareButtonsProps {
  title: string;
  url?: string;
  prompt?: string;
}

export default function ShareButtons({ title, url, prompt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  // Start with the server-safe value (or the caller-supplied url) so the
  // server-rendered and first client-rendered markup match exactly, then
  // fill in window.location.href post-mount to avoid a hydration mismatch.
  const [shareUrl, setShareUrl] = useState(url ?? "");

  useEffect(() => {
    // Reading window.location is only valid client-side, so this must run
    // post-mount rather than during render — a sanctioned exception to the
    // "avoid setState in effect" rule (see React docs: "displaying
    // different content on the server and the client").
    if (!url && typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShareUrl(window.location.href);
    }
  }, [url]);

  const links = [
    {
      label: "WhatsApp",
      icon: WhatsAppIcon,
      href: `https://wa.me/?text=${encodeURIComponent(`${title}: ${shareUrl}`)}`,
    },
    {
      label: "Facebook",
      icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: "X",
      icon: XIcon,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      label: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op.
    }
  }

  return (
    <div>
      {prompt && <p className="mb-3 font-sans text-sm italic text-charcoal-soft">{prompt}</p>}
      <div className="flex flex-wrap items-center gap-2">
        {links.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share via ${label}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal-soft transition-colors hover:border-plum hover:text-plum"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
        <button
          onClick={copyLink}
          aria-label="Copy link"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal-soft transition-colors hover:border-plum hover:text-plum"
        >
          <Link2 className="h-4 w-4" aria-hidden="true" />
        </button>
        {copied && <span className="font-sans text-xs text-burgundy">Link copied!</span>}
      </div>
    </div>
  );
}
