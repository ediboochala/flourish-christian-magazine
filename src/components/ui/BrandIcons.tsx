/**
 * Minimal, trademark-safe line-style social icons (not brand logos),
 * used consistently with the rest of the Lucide icon set.
 */
type IconProps = React.SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        d="M14 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.83-4.92 5.2v2.4H5.5v3.6h2.63V21h3.62v-4.75h2.6l.4-3.6h-3V10.6c0-1.05.3-1.75 1.75-1.75Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        d="M6.5 17.5 4.5 21l3.6-1.9a8 8 0 1 0-3.1-3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.2c0 3.6 3.2 6.8 6.8 6.8.6 0 1.1-.5.9-1.1l-.4-1.2a.9.9 0 0 0-1-.5l-1.1.3a5 5 0 0 1-2.9-2.9l.3-1.1a.9.9 0 0 0-.5-1L9.9 8.1a.9.9 0 0 0-1 .5c-.1.2-.1.4 0 .6Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
