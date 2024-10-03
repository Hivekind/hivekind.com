import ContactButton from "@/components/contact-button";
import "@/styles/advantages.css";

export default function AdvantagesSection() {
  return (
    <section className="advantages-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="advantages_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="w-layout-grid advantages_content">
                  <div className="advantages_content-left">
                    <h2
                      blocks-non-deletable="true"
                      className="heading-style-h2"
                    >
                      The Hivekind advantage
                    </h2>
                  </div>
                  <div className="advantages_content-right">
                    <p className="text-size-medium">
                      Here’s what makes working with us different. We’re not
                      just developers; we’re committed partners who are invested
                      in your success. From the initial idea to the final
                      product launch, we work closely with you every step of the
                      way. Our focus is on bringing your vision to life and
                      making sure your product meets your goals and exceeds
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-layout-grid advantages_list">
                <div
                  id="w-node-dbeeb1ed-72c3-c78f-c7e0-8b874e649ee3-5ddf41fa"
                  className="advantages_item"
                >
                  <div className="advantages_item-number-wrapper">
                    <div>1</div>
                  </div>
                  <div className="advantages_item-text-wrapper">
                    <div className="margin-bottom margin-xsmall">
                      <h3
                        blocks-non-deletable="true"
                        className="heading-style-h5"
                      >
                        Our team is yours
                      </h3>
                    </div>
                    <p>
                      Think of us as an extension of your team. Our product
                      manager and software engineers are fully dedicated to
                      helping you and your product succeed. And yes, you can
                      even feature our team members on your pitch deck.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-dbeeb1ed-72c3-c78f-c7e0-8b874e649eec-5ddf41fa"
                  className="advantages_item"
                >
                  <div className="advantages_item-number-wrapper">
                    <div>2</div>
                  </div>
                  <div className="advantages_item-text-wrapper">
                    <div className="margin-bottom margin-xsmall">
                      <h3
                        blocks-non-deletable="true"
                        className="heading-style-h5"
                      >
                        Long-term partner
                      </h3>
                    </div>
                    <p>
                      We’re here for the long haul. From the early idea stage to
                      launch and beyond, we stick with you to ensure your
                      product keeps growing and improving—but only if you want
                      us around for the whole journey.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-dbeeb1ed-72c3-c78f-c7e0-8b874e649ef5-5ddf41fa"
                  className="advantages_item"
                >
                  <div className="advantages_item-number-wrapper">
                    <div>3</div>
                  </div>
                  <div className="advantages_item-text-wrapper">
                    <div className="margin-bottom margin-xsmall">
                      <h3
                        blocks-non-deletable="true"
                        className="heading-style-h5"
                      >
                        Business mindset
                      </h3>
                    </div>
                    <p>
                      We don’t just focus on the tech and call it a day—we focus
                      on your business. Every decision we make is guided by your
                      goals, so your product isn’t just well-built, it’s built
                      to help your business succeed.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-dbeeb1ed-72c3-c78f-c7e0-8b874e649efe-5ddf41fa"
                  className="advantages_item"
                >
                  <div className="advantages_item-number-wrapper">
                    <div>4</div>
                  </div>
                  <div className="advantages_item-text-wrapper">
                    <div className="margin-bottom margin-xsmall">
                      <h3
                        blocks-non-deletable="true"
                        className="heading-style-h5"
                      >
                        Global perspectives
                      </h3>
                    </div>
                    <p>
                      Our diverse team brings global experience and fresh
                      perspectives. We approach challenges from different points
                      of view to create unique solutions that help your product
                      excel in any market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="margin-top margin-xxlarge">
                <ContactButton isCenter={false} cta="Get in touch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
