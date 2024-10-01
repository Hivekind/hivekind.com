import ContactUsSection from "@/components/contact-us-section";
import Header from "@/components/header";
import StaticImage from "@/components/static-image";
import FeaturedWork from "./featured-work";

import softwareDevelopmentCompanyPhotomontage from "@/public/images/software-development-company-photomontage.webp";
import softwareDevelopmentCompanyPhotomontageFallback from "@/public/images/software-development-company-photomontage.jpeg";

import TestimonialCarousel from "@/components/testimonial-carousel";
import FeatureComparisonSection from "./feature-comparison-section";
import FeatureSection from "./feature-section";

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

        <ContactUsSection
          heading="Need help building your product?"
          body="Reach out to us by filling out the form on our contact page. If you need an NDA, just let us know, and we’ll gladly provide one!"
          cta="Take me to the contact page"
        />
      </main>
    </>
  );
}
