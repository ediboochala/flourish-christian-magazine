import type { MetadataRoute } from "next";

/** Powers "Add to Home Screen" on mobile — when a reader saves Flourish to
 *  her phone's home screen, this is what names the icon and colors the
 *  splash screen, instead of a bare browser tab shortcut. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flourish Christian Magazine",
    short_name: "Flourish",
    description:
      "Inspiring Christian women through faith, stories, testimonies, and community — the online publication of M.F.M Women Foundation Florida.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7f1",
    theme_color: "#432764",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
