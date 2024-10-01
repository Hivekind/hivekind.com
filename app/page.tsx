import ContactUsSection from "@/components/contact-us-section";
import Header from "@/components/header";
import FeatureComparisonSection from "./feature-comparison-section";
import FeatureSection from "./feature-section";
import StaticImage from "@/components/static-image";
import FeaturedWork from "./featured-work";
import TestimonialSection from "@/components/testimonial-section";

import softwareDevelopmentCompanyPhotomontage from "@/public/images/software-development-company-photomontage.webp";
import softwareDevelopmentCompanyPhotomontageFallback from "@/public/images/software-development-company-photomontage.jpeg";

import TestimonialCarousel from "@/components/testimonial-carousel";

export default function Home() {
  const title = "The transparent software development company.";
  const description =
    "Build meaningful products with a software development company that's committed to transparency; clear objectives, regular updates, frequent releases, and a fixed monthly cost.";

  return (
    <>
      <main className="main-wrapper">
        <Header
          title={title}
          description={description}
          paddingStyle="padding-section-medium"
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

        <FeatureComparisonSection />
        <FeatureSection />

        <section className="work-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-top margin-xxlarge">
                <div className="container-small">
                  <div className="text-align-center">
                    <div className="margin-bottom">
                      <div className="margin-large">
                        <h2>We deliver results.</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-section-medium">
                <div className="container-medium">
                  <FeaturedWork />
                </div>
              </div>
            </div>
          </div>
        </section>
        <TestimonialCarousel />

        <ContactUsSection />
      </main>
    </>
  );
}
