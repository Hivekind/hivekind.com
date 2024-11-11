import ContactUsSection from "@/components/contact-us-section";
import Header from "@/components/header";
import StaticImage from "@/components/static-image";

import softwareDevelopmentCompanyPhotomontage from "@/public/images/software-development-company-photomontage.webp";
import softwareDevelopmentCompanyPhotomontageFallback from "@/public/images/software-development-company-photomontage.jpeg";

import TestimonialCarousel from "@/components/testimonial-carousel";
import AdvantagesSection from "./advantages-section";
import CasestudiesSection from "./casestudies-section";
import AnswersSection from "./answers-section";
import BlogSection from "./blog-section";

export default function Home() {
  const title = "Empower Your Team to Deliver at Their Best";
  const description =
    "We provide focused, hands-on strategic support to tech and product teams. From optimizing technical processes to setting a clear direction for growth and getting complex projects over the line, we help your team become the best they can be.";

  return (
    <>
      <main className="main-wrapper">
        <Header
          title={title}
          description={description}
          paddingStyle="padding-section-medium"
          cta="Get in Touch"
        >
          <div className="header_image-wrapper">
            <StaticImage
              src={softwareDevelopmentCompanyPhotomontage}
              srcfallback={softwareDevelopmentCompanyPhotomontageFallback}
              priority={true}
              sizes="(max-width: 1137px) 90vw, 1024px"
              alt="Software development company photomontage"
              className="header_image"
            />
          </div>
        </Header>

        <AnswersSection />

        <TestimonialCarousel bgColorClass="bg-white" />

        <AdvantagesSection />

        <CasestudiesSection />

        <BlogSection />

        <ContactUsSection />
      </main>
    </>
  );
}
