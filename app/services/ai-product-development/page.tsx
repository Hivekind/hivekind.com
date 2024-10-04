import BlogSection from "@/app/blog-section";
import TestimonialCarousel from "@/components/testimonial-carousel";
import AIFlowSection from "./ai-flow-section";
import HeaderSection from "./header-section";
import StepsSection from "./steps-section";
import WhySection from "./why-section";

export default function AiProductDevelopment() {
  return (
    <>
      <HeaderSection />
      <WhySection />
      <AIFlowSection />
      <TestimonialCarousel />
      <StepsSection />
      <BlogSection />
    </>
  );
}
