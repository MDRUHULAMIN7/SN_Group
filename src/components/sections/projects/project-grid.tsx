"use client";

import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import type { Project } from "@/types/content";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: readonly Project[];
  featureFirst?: boolean;
  showLocationFilter?: boolean;
}

const locationDescriptions: Record<string, string> = {
  "All Locations": "Explore flagship defense, aviation, industrial, residential, and institutional infrastructure projects executed across Bangladesh.",
  "Dhaka & Tejgaon": "Aviation overhauling hangars, flight operations headquarters, and tactical military vehicle shelters at BAF Base Bashar and PGR Area Dhaka Cantonment.",
  "Sylhet Cantonment": "Major multi-facility complex including academic buildings, 100-bed student hostels, industrial weaving & spinning sheds, central mosque, and electrical sub-stations.",
  "Gazipur & Rajendrapur": "Heavy vehicular 68-bay MT garage-cum-multipurpose complexes and academic buildings at Bangladesh Ordnance Factories (BOF) Gazipur and Rajendrapur Cantonment.",
  "Barishal": "Strategic defense utility infrastructure including 135,000-litre underground fuel storage systems and island flood-protection drainage at Sheikh Hasina Cantonment.",
};

export function ProjectGrid({
  projects,
  featureFirst = false,
  showLocationFilter = false,
}: ProjectGridProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");

  // Calculate unique location groups and counts dynamically
  const locationTabs = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => {
      const grp = p.locationGroup || "Other";
      counts.set(grp, (counts.get(grp) || 0) + 1);
    });

    const list: { label: string; count: number }[] = [
      { label: "All Locations", count: projects.length },
    ];

    // Maintain stable preferred order
    const preferredOrder = [
      "Dhaka & Tejgaon",
      "Sylhet Cantonment",
      "Gazipur & Rajendrapur",
      "Barishal",
    ];

    preferredOrder.forEach((loc) => {
      if (counts.has(loc)) {
        list.push({ label: loc, count: counts.get(loc)! });
        counts.delete(loc);
      }
    });

    // Add any remaining
    counts.forEach((count, loc) => {
      list.push({ label: loc, count });
    });

    return list;
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedLocation === "All Locations") {
      return projects;
    }
    return projects.filter((p) => p.locationGroup === selectedLocation);
  }, [projects, selectedLocation]);

  return (
    <div className="space-y-8">
      {showLocationFilter && (
        <div className="space-y-4">
          {/* Location Filter Tab Bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-5">
            <span className="mr-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cobalt">
              <MapPin aria-hidden="true" className="size-3.5" />
              Filter by Location:
            </span>
            {locationTabs.map((tab) => {
              const isActive = selectedLocation === tab.label;
              return (
                <button
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300",
                    isActive
                      ? "border-cobalt bg-cobalt text-white shadow-[0_4px_14px_rgba(21,94,239,0.22)]"
                      : "border-slate-200 bg-white text-ink/75 hover:border-cobalt/40 hover:bg-blue-50/50 hover:text-cobalt"
                  )}
                  key={tab.label}
                  onClick={() => setSelectedLocation(tab.label)}
                  type="button"
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "grid min-w-[20px] place-items-center rounded-full px-1.5 py-0.5 text-[0.68rem] font-extrabold leading-none transition-colors",
                      isActive
                        ? "bg-white text-cobalt"
                        : "bg-slate-100 text-ink/65 group-hover:bg-cobalt/15 group-hover:text-cobalt"
                    )}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Location Info Strip */}
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/70 px-5 py-3.5 text-xs text-ink/70 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-ink">
                {selectedLocation === "All Locations" ? "All Locations" : selectedLocation}:
              </span>
              <span>{locationDescriptions[selectedLocation] || "Selected regional projects."}</span>
            </div>
            <span className="shrink-0 font-mono font-bold text-cobalt">
              {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </div>
      )}

      {/* Project Grid */}
      <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Reveal
            className={featureFirst && index === 0 ? "lg:col-span-2" : undefined}
            delay={(index % 3) * 0.06}
            key={project.slug}
          >
            <ProjectCard featured={featureFirst && index === 0} project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
