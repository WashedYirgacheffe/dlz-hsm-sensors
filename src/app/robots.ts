import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * robots.txt. The admin and API surfaces are disallowed so a crawler never
 * wastes a request on them, though the real protection is the auth gate and
 * the noindex header on /admin.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
