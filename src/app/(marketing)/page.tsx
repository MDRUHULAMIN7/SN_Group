import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { GroupStorySection } from "@/components/sections/home/group-story-section";
import { SisterConcernShowcase } from "@/components/sections/home/sister-concern-showcase";
import { ServicesOverview } from "@/components/sections/home/services-overview";
import { CoreValuesSection } from "@/components/sections/home/mission-values";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { LeadershipMessages } from "@/components/sections/home/leadership-messages";
import { TestimonialsSection } from "@/components/sections/home/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "S.N Group | Construction, Procurement & Real Estate Development",
  description:
    "A diversified Bangladeshi business group with more than 20 years of experience in government and institutional construction, international import & export, and premium real estate development.",
  path: "/",
  image: "/images/hero-engineers-team.webp",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GroupStorySection />
      <ServicesOverview />
      <SisterConcernShowcase />
      <CoreValuesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <LeadershipMessages />
    </>
  );
}
