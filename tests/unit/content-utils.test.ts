import { describe, expect, it } from "vitest";
import { getProject, getRelatedProjects, projects } from "@/data/projects";
import { getSisterConcern, sisterConcerns } from "@/data/sister-concerns";

describe("typed content utilities", () => {
  it("resolves every project by its unique slug", () => {
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(projects.length);
    for (const project of projects) expect(getProject(project.slug)).toEqual(project);
  });

  it("excludes the current project from related results", () => {
    const current = projects[0];
    const related = getRelatedProjects(current.slug, 2);
    expect(related).toHaveLength(2);
    expect(related.some(({ slug }) => slug === current.slug)).toBe(false);
  });

  it("resolves every sister concern by slug", () => {
    for (const concern of sisterConcerns) expect(getSisterConcern(concern.slug)).toEqual(concern);
  });
});
