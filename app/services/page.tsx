import React from 'react';
import Header from '@/components/header';

export default function ServicesPage() {
  const title = "Build software with confidence.";
  const description = "Build meaningful products with a software development company that's committed to transparency; clear objectives, regular updates, frequent releases, and a fixed monthly cost."

  return (
    <main className="main-wrapper">
      <Header
        title={title}
        description={description}
      >
        <div className="header_image-wrapper">
          <img
            src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567d78bbc987eac4020f6ab_dedicated-team-planning.jpg"
            loading="eager"
            sizes="90vw"
            srcSet="
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567d78bbc987eac4020f6ab_dedicated-team-planning-p-500.jpg   500w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567d78bbc987eac4020f6ab_dedicated-team-planning-p-800.jpg   800w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567d78bbc987eac4020f6ab_dedicated-team-planning-p-1080.jpg 1080w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567d78bbc987eac4020f6ab_dedicated-team-planning-p-1600.jpg 1600w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567d78bbc987eac4020f6ab_dedicated-team-planning-p-2000.jpg 2000w,
            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6567d78bbc987eac4020f6ab_dedicated-team-planning.jpg        3000w
          "
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
                  <div className="discovery_item">
                    <div className="margin-bottom margin-medium">
                      <div className="discovery_image-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621c45e71b3c6834c85_hivekind-product-discovery.png"
                          loading="lazy"
                          sizes="(max-width: 767px) 90vw, 43vw"
                          srcSet="
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621c45e71b3c6834c85_hivekind-product-discovery-p-500.png   500w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621c45e71b3c6834c85_hivekind-product-discovery-p-800.png   800w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621c45e71b3c6834c85_hivekind-product-discovery-p-1080.png 1080w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621c45e71b3c6834c85_hivekind-product-discovery.png        1264w
                        "
                          alt="Hivekind Product Discovery"
                          className="service_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Product Discovery</h3>
                    </div>
                    <p>
                      Ensure that you’re building the product or features that
                      your customers truly want. Find out their needs and
                      preferences. Use this information to empower the team to
                      come up with technically feasible and innovative
                      solutions. Make every development count.
                    </p>
                  </div>
                  <div className="discovery_item">
                    <div className="margin-bottom margin-medium">
                      <div className="discovery_image-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd622c2728c160e62ec57_hivekind-technical-discovery.png"
                          loading="lazy"
                          sizes="(max-width: 767px) 90vw, 43vw"
                          srcSet="
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd622c2728c160e62ec57_hivekind-technical-discovery-p-500.png   500w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd622c2728c160e62ec57_hivekind-technical-discovery-p-800.png   800w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd622c2728c160e62ec57_hivekind-technical-discovery-p-1080.png 1080w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd622c2728c160e62ec57_hivekind-technical-discovery.png        1264w
                        "
                          alt="Hivekind Technical Discovery"
                          className="service_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Technical Discovery</h3>
                    </div>
                    <p>
                      Eliminate technical uncertainties and identify issues
                      within your existing systems. We explore your current
                      technical setup, understand and analyze the challenges and
                      constraints you face, and then suggest the best way to
                      reach your desired future state.
                    </p>
                  </div>
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
                  <div className="dev_item">
                    <div className="margin-bottom margin-medium">
                      <div className="dev_image-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd6216e651d7d652f611a_hivekind-minimum-viable-product.png"
                          loading="lazy"
                          sizes="(max-width: 767px) 90vw, 43vw"
                          srcSet="
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd6216e651d7d652f611a_hivekind-minimum-viable-product-p-500.png  500w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd6216e651d7d652f611a_hivekind-minimum-viable-product.png       1264w
                        "
                          alt="Minimum Viable Product"
                          className="service_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">
                        Minimum Viable Product
                      </h3>
                    </div>
                    <p>
                      Minimize risks by testing your idea with a Minimum Viable
                      Product (MVP) application. We can help you quickly launch
                      a basic version of your product, enabling you to gather
                      feedback and iterate faster.
                    </p>
                  </div>
                  <div className="dev_item">
                    <div className="margin-bottom margin-medium">
                      <div className="dev_image-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621b9151dcffb448c0f_hivekind-product-market-fit.png"
                          loading="lazy"
                          sizes="(max-width: 767px) 90vw, 43vw"
                          srcSet="
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621b9151dcffb448c0f_hivekind-product-market-fit-p-500.png  500w,
                          https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621b9151dcffb448c0f_hivekind-product-market-fit.png       1264w
                        "
                          alt="Product-Market Fit"
                          className="layout251_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Product-Market Fit</h3>
                    </div>
                    <p>
                      Ensure your product fits perfectly with market demands. By
                      working together to fine-tune your product, we make sure
                      it meets the needs of your target market, which makes your
                      customers happier and your product more successful.
                    </p>
                  </div>
                  <div className="dev_item">
                    <a
                      href="/services/custom-software-development"
                      className="service-link w-inline-block"
                    >
                      <div className="margin-bottom margin-medium">
                        <div className="dev_image-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd6217ffea762061cc753_hivekind-custom-software-development.png"
                            loading="lazy"
                            sizes="(max-width: 767px) 90vw, 43vw"
                            srcSet="
                            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd6217ffea762061cc753_hivekind-custom-software-development-p-500.png   500w,
                            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd6217ffea762061cc753_hivekind-custom-software-development-p-800.png   800w,
                            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd6217ffea762061cc753_hivekind-custom-software-development-p-1080.png 1080w,
                            https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd6217ffea762061cc753_hivekind-custom-software-development.png        1264w
                          "
                            alt="Custom Software Development"
                            className="layout251_image"
                          />
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h4">
                          Custom Software Development
                        </h3>
                      </div>
                      <p>
                        We specialize in developing custom solutions tailored to
                        meet your unique business requirements and goals. We
                        achieve this by using trusted and tested technologies
                        that will help you scale with your business.
                      </p>
                    </a>
                  </div>
                  <div
                    id="w-node-_753ef2b8-c3c2-c4c4-8d88-238354199446-5ddf4216"
                    className="dev_item"
                  >
                    <div className="margin-bottom margin-medium">
                      <div className="dev_image-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd621b171031f482e01dd_hivekind-product-scaling.png"
                          loading="lazy"
                          alt="Product Scaling"
                          className="layout251_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Product Scaling</h3>
                    </div>
                    <p>
                      Scale your product along with your business. We provide
                      expert strategies and dedicated support to help you
                      efficiently expand your product&#x27;s capabilities and
                      reach as your business continues to grow.
                    </p>
                  </div>
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
                    <img
                      src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd62111e212b2ee43064c_hivekind-technical-support.png"
                      loading="lazy"
                      sizes="(max-width: 767px) 90vw, 43vw"
                      srcSet="
                      https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd62111e212b2ee43064c_hivekind-technical-support-p-500.png   500w,
                      https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd62111e212b2ee43064c_hivekind-technical-support-p-800.png   800w,
                      https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd62111e212b2ee43064c_hivekind-technical-support-p-1080.png 1080w,
                      https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/661fd62111e212b2ee43064c_hivekind-technical-support.png        1264w
                    "
                      alt="Hivekind technical support"
                      className="service_image"
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
                  <div
                    data-w-id="14869bbe-675d-b4d7-05f2-d234d9edd9fc"
                    className="process_stages-wrapper"
                  >
                    <div className="process_progress-bar-wrapper">
                      <div className="process_progress-bar"></div>
                    </div>
                    <div
                      data-w-id="14869bbe-675d-b4d7-05f2-d234d9edd9ff"
                      className="w-layout-grid process_timeline-step"
                    >
                      <div className="process_timeline-left">
                        <div className="process_timeline-icon-wrapper">
                          <div className="product-stage">
                            <div className="icon-embed-xxsmall w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 15 12"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                                aria-hidden="true"
                                role="img"
                              >
                                <path
                                  d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z"
                                  fill="#FFFFFF"
                                />
                              </svg>
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
                    <div
                      data-w-id="14869bbe-675d-b4d7-05f2-d234d9edda0a"
                      className="w-layout-grid process_timeline-step"
                    >
                      <div className="process_timeline-left">
                        <div className="process_timeline-icon-wrapper">
                          <div className="product-stage">
                            <div className="icon-embed-xxsmall w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 15 12"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                                aria-hidden="true"
                                role="img"
                              >
                                <path
                                  d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z"
                                  fill="#FFFFFF"
                                />
                              </svg>
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
                    <div
                      data-w-id="14869bbe-675d-b4d7-05f2-d234d9edda15"
                      className="w-layout-grid process_timeline-step"
                    >
                      <div className="process_timeline-left">
                        <div className="process_timeline-icon-wrapper">
                          <div className="product-stage">
                            <div className="icon-embed-xxsmall w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 15 12"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                                aria-hidden="true"
                                role="img"
                              >
                                <path
                                  d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z"
                                  fill="#FFFFFF"
                                />
                              </svg>
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
                    <div
                      data-w-id="14869bbe-675d-b4d7-05f2-d234d9edda20"
                      className="w-layout-grid process_timeline-step"
                    >
                      <div className="process_timeline-left">
                        <div className="process_timeline-icon-wrapper">
                          <div className="product-stage">
                            <div className="icon-embed-xxsmall w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 15 12"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                                aria-hidden="true"
                                role="img"
                              >
                                <path
                                  d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z"
                                  fill="#FFFFFF"
                                />
                              </svg>
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
      <section className="testimonial-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="margin-bottom">
                <div className="margin-medium">
                  <div className="max-width-large align-center">
                    <div className="testimonial_component">
                      <div className="margin-vertical">
                        <div className="margin-bottom margin-medium">
                          <div className="heading-style-h5">
                            &quot;The Hivekind team built the Willmaker Online
                            product from start to finish. The project had
                            thousands of screens and on delivery there were no
                            major issues. The business team was very happy with
                            the quality at launch. The online version now
                            enables our business team to apply different
                            business models and pricing strategies. The
                            conversion rate is up 70% since the launch.&quot;
                          </div>
                        </div>
                      </div>
                      <div className="testimonial_client-image-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/655ab8fe6c7b81432adaa633_jayasimhan-masilamani.jpg"
                          loading="lazy"
                          alt="Jayasimhan Masilamani"
                          className="testimonial_client-image"
                        />
                      </div>
                      <div className="margin-bottom">
                        <p className="text-weight-semibold">
                          Jayasimhan Masilamani
                          <br />
                        </p>
                        <p>VP of Technology, Nolo</p>
                        <div className="margin-xlarge"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta_section">
        <div className="padding-global background-color-white">
          <div className="container-medium">
            <div className="padding-section-large">
              <div className="w-layout-grid cta_component">
                <div className="cta_content">
                  <div className="margin-bottom margin-small">
                    <h2>
                      Your vision deserves a dedicated software development
                      team.
                    </h2>
                  </div>
                  <div className="margin-bottom margin-small">
                    <p className="text-size-medium">
                      We&#x27;re not about tech jargon or over-promising.
                      Instead, we focus on clear communication, transparency in
                      our process, and delivering results that speak for
                      themselves.
                    </p>
                  </div>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <a href="/contact" className="button w-button">
                        Schedule a call
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cta_image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                    srcSet="
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards-p-500.png  500w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards-p-800.png  800w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards.png       1530w
                  "
                    alt="Top software development company Malaysia awards"
                    className="awards_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
