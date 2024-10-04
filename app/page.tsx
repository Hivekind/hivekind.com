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
  const title = "Malaysia's premier software development company";
  const description =
    "We handle your software development, allowing you to focus on strategy, sales, and raising funds.";

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

        <ContactUsSection
          heading="Need help building your product?"
          body="Reach out to us by filling out the form on our contact page. If you need an NDA, just let us know, and we’ll gladly provide one!"
          cta="Take me to the contact page"
        />
      </main>
    </>
  );
}
