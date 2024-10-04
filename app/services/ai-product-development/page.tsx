import BlogSection from "@/app/blog-section";
import TestimonialCarousel from "@/components/testimonial-carousel";
import AIFlowSection from "./ai-flow-section";
import HeaderSection from "./header-section";
import StepsSection from "./steps-section";
import WhySection from "./why-section";
import ContactUsSection from "@/components/contact-us-section";

export default function AiProductDevelopment() {
  return (
    <>
      <HeaderSection />
      <WhySection />
      <StepsSection />
      <BlogSection />
      <AIFlowSection />
      <TestimonialCarousel />
      <ContactUsSection
        heading="Need help building your product?"
        body="Reach out to us by filling out the form on our contact page. If you need an NDA, just let us know, and we’ll gladly provide one!"
        cta="Take me to the contact page"
      />
    </>
  );
}
