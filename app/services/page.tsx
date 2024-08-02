import React from "react";
import Header from "@/components/header";
import ContactUsSection from "@/components/contact-us-section";
import ServiceItemCard from "./service-item-card";

import StaticImage from "@/components/static-image";
import CheckInCircleInvertedSvg from "@/components/svgs/check-in-circle-inverted";

import dedicatedTeamPlanning from "@/public/images/dedicated-team-planning.webp";
import dedicatedTeamPlanningFallback from "@/public/images/dedicated-team-planning.jpg";

import hivekindProductDiscovery from "@/public/images/hivekind-product-discovery.webp";
import hivekindProductDiscoveryFallback from "@/public/images/hivekind-product-discovery.png";

import hivekindTechnicalDiscovery from "@/public/images/hivekind-technical-discovery.webp";
import hivekindTechnicalDiscoveryFallback from "@/public/images/hivekind-technical-discovery.png";

import hivekindMinimumViableProduct from "@/public/images/hivekind-minimum-viable-product.webp";
import hivekindMinimumViableProductFallback from "@/public/images/hivekind-minimum-viable-product.png";

import hivekindProductMarketFit from "@/public/images/hivekind-product-market-fit.webp";
import hivekindProductMarketFitFallback from "@/public/images/hivekind-product-market-fit.png";

import hivekindCustomSoftwareDevelopment from "@/public/images/hivekind-custom-software-development.webp";
import hivekindCustomSoftwareDevelopmentFallback from "@/public/images/hivekind-custom-software-development.png";

import hivekindProductScaling from "@/public/images/hivekind-product-scaling.webp";
import hivekindProductScalingFallback from "@/public/images/hivekind-product-scaling.png";

import hivekindTechnicalSupport from "@/public/images/hivekind-technical-support.webp";
import hivekindTechnicalSupportFallback from "@/public/images/hivekind-technical-support.png";

import jayasimhanMasilamani from "@/public/images/jayasimhan-masilamani.webp";
import jayasimhanMasilamaniFallback from "@/public/images/jayasimhan-masilamani.jpg";

import TestimonialSection from "@/components/testimonial-section";

export default function ServicesPage() {
  const title = "Build software with confidence.";
  const description =
    "Whether you're a startup or an established enterprise, Hivekind is here to help you through the tricky parts of making software. We turn problems into opportunities and your ideas into market-ready products.";

  return (
    <main className="main-wrapper">
      <Header title={title} description={description}>
        <div className="header_image-wrapper">
          <StaticImage
            src={dedicatedTeamPlanning}
            srcfallback={dedicatedTeamPlanningFallback}
            priority={true}
            sizes="90vw"
            alt="Dedicated team working"
            className="about_image"
          />
        </div>
      </Header>

      <section className="why-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="discovery_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="max-width-large">
                    <div className="margin-bottom margin-small">
                      <h2>First, we discover.</h2>
                    </div>
                    <p className="text-size-medium">
                      It’s tempting to jump right into building a product.
                      However, creating a product without proper research is
                      like trying to solve a complex puzzle without all the
                      pieces. You only realize some pieces are missing when it’s
                      too late. This is why we start our projects with
                      discovery.
                    </p>
                  </div>
                </div>
                <div className="w-layout-grid discovery_list">
                  <ServiceItemCard
                    image={hivekindProductDiscovery}
                    imageFallback={hivekindProductDiscoveryFallback}
                    alt="Hivekind Product Discovery"
                    heading="Product Discovery"
                    body="Ensure that you’re building the product or features that your customers truly want. Find out their needs and preferences. Use this information to empower the team to come up with technically feasible and innovative solutions. Make every development count."
                  />
                  <ServiceItemCard
                    image={hivekindTechnicalDiscovery}
                    imageFallback={hivekindTechnicalDiscoveryFallback}
                    alt="Hivekind Technical Discovery"
                    heading="Technical Discovery"
                    body="Eliminate technical uncertainties and identify issues within your existing systems. We explore your current technical setup, understand and analyze the challenges and constraints you face, and then suggest the best way to reach your desired future state."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dev-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="dev_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="w-layout-grid layout251_content">
                    <div className="layout251_content-left">
                      <h2>Next, we build and scale.</h2>
                    </div>
                    <div className="layout251_content-right">
                      <p className="text-size-medium">
                        Get in front of your customers faster by launching an
                        MVP. Iterate based on customer feedback to find the
                        perfect Product-Market fit. Build features and products
                        using future-proof technologies to ensure long-term
                        success. Scale your product to meet the needs of your
                        expanding customer base.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid dev_list">
                  <ServiceItemCard
                    image={hivekindMinimumViableProduct}
                    imageFallback={hivekindMinimumViableProductFallback}
                    alt="Minimum Viable Product"
                    heading="Minimum Viable Product"
                    body="Minimize risks by testing your idea with a Minimum Viable Product (MVP) application. We can help you quickly launch a basic version of your product, enabling you to gather feedback and iterate faster."
                  />
                  <ServiceItemCard
                    image={hivekindProductMarketFit}
                    imageFallback={hivekindProductMarketFitFallback}
                    alt="Product-Market Fit"
                    heading="Product-Market Fit"
                    body="Ensure your product fits perfectly with market demands. By working together to fine-tune your product, we make sure it meets the needs of your target market, which makes your customers happier and your product more successful."
                  />
                  <ServiceItemCard
                    image={hivekindCustomSoftwareDevelopment}
                    imageFallback={hivekindCustomSoftwareDevelopmentFallback}
                    alt="Custom Software Development"
                    heading="Custom Software Development"
                    body="We specialize in developing custom solutions tailored to meet your unique business requirements and goals. We achieve this by using trusted and tested technologies that will help you scale with your business."
                    link="/services/custom-software-development"
                  />
                  <ServiceItemCard
                    image={hivekindProductScaling}
                    imageFallback={hivekindProductScalingFallback}
                    alt="Product Scaling"
                    heading="Product Scaling"
                    body="Scale your product along with your business. We provide expert strategies and dedicated support to help you efficiently expand your product's capabilities and reach as your business continues to grow."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="support-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout254_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large">
                      <div className="margin-bottom margin-small">
                        <h2>Finally, we take care.</h2>
                      </div>
                      <p className="text-size-medium">
                        We make sure your apps stay up-to-date and work
                        perfectly every day. You can rely on us for ongoing care
                        and expert help to keep your apps running smoothly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid support_content-bottom">
                  <div className="w-layout-grid support_left">
                    <div className="support_item">
                      <div className="margin-bottom margin-xsmall">
                        <h3 className="heading-style-h5">
                          Legacy Application Modernization
                        </h3>
                      </div>
                      <p>
                        We upgrade your old applications to make them faster,
                        safer, and more stable.
                      </p>
                    </div>
                    <div className="support_item">
                      <div className="margin-bottom margin-xsmall">
                        <h3 className="heading-style-h5">
                          L2 Technical Support
                        </h3>
                      </div>
                      <p>
                        We quickly handle any issues your applications face,
                        ensuring minimal downtime and smooth operations.
                      </p>
                    </div>
                  </div>
                  <div
                    id="w-node-c7b0cea7-a1a2-3d66-3e4b-b08b274498d6-5ddf4216"
                    className="support_image-wrapper"
                  >
                    <StaticImage
                      src={hivekindTechnicalSupport}
                      srcfallback={hivekindTechnicalSupportFallback}
                      sizes="(max-width: 767px) 90vw, 43vw"
                      alt="Hivekind technical support"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="w-layout-grid support_right">
                    <div className="support_item">
                      <div className="margin-bottom margin-xsmall">
                        <h3 className="heading-style-h5">
                          Application Maintenance
                        </h3>
                      </div>
                      <p>
                        We keep your applications in top shape, performing
                        regular updates and fixes to prevent problems before
                        they start.
                      </p>
                    </div>
                    <div className="support_item">
                      <div className="margin-bottom margin-xsmall">
                        <h3 className="heading-style-h5">
                          L3 Technical Support
                        </h3>
                      </div>
                      <p>
                        We dive deep to solve complex problems in your
                        applications, providing expert solutions and keeping
                        your systems up-to-date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="w-layout-grid process_component">
                <div className="process_content-left">
                  <div className="margin-bottom margin-small">
                    <h2>Delivered by dedicated development teams.</h2>
                  </div>
                  <p className="text-size-medium">
                    Leverage the expertise of our dedicated development teams
                    for your projects. They work closely with you to understand
                    your needs and implement solutions that are both scalable
                    and sustainable.
                  </p>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <a href="/contact" className="button w-button">
                        Schedule a call
                      </a>
                    </div>
                  </div>
                </div>
                <div className="process_content-right">
                  <div className="process_stages-wrapper">
                    <div className="process_progress-bar-wrapper">
                      <div className="process_progress-bar"></div>
                    </div>
                    <div className="w-layout-grid process_timeline-step">
                      <div className="process_timeline-left">
                        <div className="process_timeline-icon-wrapper">
                          <div className="product-stage">
                            <div className="icon-embed-xxsmall w-embed">
                              <CheckInCircleInvertedSvg />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="process_timeline-right">
                        <div className="process_text-wrapper">
                          <div className="margin-bottom margin-xsmall">
                            <h3 className="text-size-large">
                              Fully Dedicated Staffing
                            </h3>
                          </div>
                          <p>
                            Each member of the dedicated team works exclusively
                            on your project—there is no time split. This level
                            of commitment leads to better project outcomes and
                            increases your ROI.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-grid process_timeline-step">
                      <div className="process_timeline-left">
                        <div className="process_timeline-icon-wrapper">
                          <div className="product-stage">
                            <div className="icon-embed-xxsmall w-embed">
                              <CheckInCircleInvertedSvg />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="process_timeline-right">
                        <div className="process_text-wrapper">
                          <div className="margin-bottom margin-xsmall">
                            <h3 className="text-size-large">Managed Teams</h3>
                          </div>
                          <p>
                            We fully vet, hire, and manage our teams in-house.
                            This oversight ensures that your project progresses
                            smoothly and meets your expectations efficiently.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-grid process_timeline-step">
                      <div className="process_timeline-left">
                        <div className="process_timeline-icon-wrapper">
                          <div className="product-stage">
                            <div className="icon-embed-xxsmall w-embed">
                              <CheckInCircleInvertedSvg />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="process_timeline-right">
                        <div className="process_text-wrapper">
                          <div className="margin-bottom margin-xsmall">
                            <h3 className="text-size-large">
                              Highly Experienced
                            </h3>
                          </div>
                          <p>
                            Each team is highly experienced, with years of
                            expertise that leads to faster problem-solving and
                            more innovative solutions for your project.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-grid process_timeline-step">
                      <div className="process_timeline-left">
                        <div className="process_timeline-icon-wrapper">
                          <div className="product-stage">
                            <div className="icon-embed-xxsmall w-embed">
                              <CheckInCircleInvertedSvg />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="process_timeline-right">
                        <div className="process_text-wrapper">
                          <div className="margin-bottom margin-xsmall">
                            <h3 className="text-size-large">
                              Clear Objectives
                            </h3>
                          </div>
                          <p>
                            With a focus on clear objectives, we establish
                            well-defined goals at the start of every project to
                            ensure all efforts are directed towards achieving
                            specific outcomes. This clarity drives our team’s
                            efforts and enhances overall project success.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection
        quote="The Hivekind team built the Willmaker Online product from start to finish. The project had thousands of screens and on delivery there were no major issues. The business team was very happy with the quality at launch. The online version now enables our business team to apply different business models and pricing strategies. The conversion rate is up 70% since the launch."
        name="Jayasimhan Masilamani"
        title="VP of Technology, Nolo"
        image={jayasimhanMasilamani}
        imageFallback={jayasimhanMasilamaniFallback}
      />

      <ContactUsSection />
    </main>
  );
}
