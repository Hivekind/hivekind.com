import ContactUsSection from "@/components/contact-us-section";
import Header from "@/components/header";
import FeatureComparisonSection from "./feature-comparison-section";
import FeatureSection from "./feature-section";
import CustomImage from "@/components/custom-image";
import FeaturedWork from "./featured-work";

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
            <CustomImage
              src="/images/66370b18aba36a5a0d9157f6_software-development-company-photomontage.jpeg"
              priority={true}
              sizes="(max-width: 1137px) 90vw, 1024px"
              width={3600}
              height={1800}
              alt="Software development company photomontage"
              className="header_image"
            />
          </div>
        </Header>

        <section className="testimonial-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="max-width-large align-center">
                  <div className="testimonial_component">
                    <div className="margin-vertical">
                      <div className="margin-bottom margin-medium">
                        <div className="heading-style-h5">
                          &quot;We had worked with other IT providers and found
                          budgets and timelines stretching. Not so with
                          Hivekind.&quot;
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_client-image-wrapper">
                      <CustomImage
                        src="/images/655abbaccce334dacf855c7f_lindy-ledohowski.jpg"
                        sizes="(max-width: 1137px) 90vw, 1024px"
                        width={320}
                        height={320}
                        loading="lazy"
                        alt="Dr Lindy Ledohowski"
                        className="testimonial_client-image"
                      />
                    </div>
                    <p className="text-weight-semibold">Dr Lindy Ledohowski</p>
                    <p>CEO &amp; Co-Founder, EssayJack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                              &quot;They acted not simply as a vendor, but as a
                              true partner in the strategic development and
                              delivery of our project.&quot;
                            </div>
                          </div>
                        </div>
                        <div className="testimonial_client-image-wrapper">
                          <CustomImage
                            src="/images/655ab8fe7dbc4d7805694576_mitch-gelber.jpg"
                            sizes="(max-width: 1137px) 90vw, 1024px"
                            width={320}
                            height={320}
                            loading="lazy"
                            alt="Mitch Gelber"
                            className="testimonial_client-image"
                          />
                        </div>
                        <div className="margin-bottom">
                          <p className="text-weight-semibold">Mitch Gelber</p>
                          <p>CEO, Malaysia Green Building Council</p>
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

        <ContactUsSection />
      </main>
    </>
  );
}
