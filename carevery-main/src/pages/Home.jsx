import React from "react";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import StatsSection from "../components/StatsSection";
import TheStandard from "../components/TheStandard";
import ProblemSolution from "../components/ProblemSolution";
import HowItWorksPreview from "../components/HowItWorksPreview";
import BenefitsPreview from "../components/BenefitsPreview";
import TestimonialsPreview from "../components/TestimonialsPreview";
import TrustBadges from "../components/TrustBadges";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoSection />
      <StatsSection />
      <TheStandard />
      <ProblemSolution />
      <HowItWorksPreview />
      <BenefitsPreview />
      <TestimonialsPreview />
      <TrustBadges />
      <CTASection />
    </div>
  );
}