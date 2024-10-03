import BlogSection from "./blog-section";
import HeaderSection from "./header-section";
import StepsSection from "./steps-section";
import WhySection from "./why-section";

import AiProcessAccordion from "@/components/ai-process-accordion";

export default function AiProductDevelopment() {
  return (
    <>
      <HeaderSection />
      <WhySection />
      <AiProcessAccordion />
      <StepsSection />
      <BlogSection />
    </>
  );
}
