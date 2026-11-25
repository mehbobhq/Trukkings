import type { MetadataRoute } from "next";
import { allPaths, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPaths.map((p) => ({ url: `${site.url}${p === "/" ? "" : p}`, lastModified: new Date() }));
}
