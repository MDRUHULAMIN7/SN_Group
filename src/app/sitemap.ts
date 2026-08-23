import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { sisterConcerns } from "@/data/sister-concerns";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/sister-concerns", "/gallery", "/projects", "/contact"];
  const routes = [
    ...staticRoutes,
    ...projects.map(({ slug }) => `/projects/${slug}`),
    ...sisterConcerns.map(({ slug }) => `/sister-concerns/${slug}`),
  ];
  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date("2026-08-23"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
