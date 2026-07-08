import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://proto-fm.vercel.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/proof",
    "/philosophy",
    "/trajectory",
    "/projects",
    "/projects/smart-building",
    "/engage",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/projects/smart-building" ? 0.9 : 0.7,
  }));
}
