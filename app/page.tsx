import ContactUsSection from "@/components/contact-us-section";
import Header from "@/components/header";
import FeatureComparisonSection from "./feature-comparison-section";
import FeatureSection from "./feature-section";
import ListItem from "@/components/list-item";

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
            <img
              src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage.jpeg"
              loading="eager"
              sizes="90vw"
              srcSet="
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-500.jpeg   500w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-800.jpeg   800w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-1080.jpeg 1080w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-1600.jpeg 1600w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-2000.jpeg 2000w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage-p-2600.jpeg 2600w,
                  https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/66370b18aba36a5a0d9157f6_software-development-company-photomontage.jpeg        3600w
                "
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
                      <img
                        src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/655abbaccce334dacf855c7f_lindy-ledohowski.jpg"
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
                  <div className="w-dyn-list">
                    <div role="list" className="collection-list-3 w-dyn-items">
                      <ListItem
                        url="/work/nolo-willmaker-online-the-expansion-of-an-iconic-desktop-product-to-the-web"
                        imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker.png"
                        imgSrcSet="
                          https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-500.png   500w,
                          https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-800.png   800w,
                          https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker-p-1080.png 1080w,
                          https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/63c8123ab9aab99e9f2a2c3f_willmaker.png        1440w
                        "
                        client="Nolo"
                        title="Nolo WillMaker Online: Expansion of an Iconic Desktop Product to the Web"
                        description="We helped Nolo increase conversion by 70% for their WillMaker product."
                      />

                      <ListItem
                        url="/work/essayjack-journey-from-prototype-to-acquisition"
                        imgSrc="https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack.png"
                        imgSrcSet="
                          https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-500.png   500w,
                          https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-800.png   800w,
                          https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack-p-1080.png 1080w,
                          https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack.png        1440w
                        "
                        client="EssayJack"
                        title="EssayJack: Journey from Prototype to Acquisition"
                        description="Hivekind provided product management, development and devops services to EssayJack until its eventual acquisition."
                      />
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
                              &quot;They acted not simply as a vendor, but as a
                              true partner in the strategic development and
                              delivery of our project.&quot;
                            </div>
                          </div>
                        </div>
                        <div className="testimonial_client-image-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/655ab8fe7dbc4d7805694576_mitch-gelber.jpg"
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
