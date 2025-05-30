import ContactButton from "@/components/contact-button";
import "@/styles/advantages.css";

export default function AdvantagesSection() {
  return (
    <section className="advantages-section bg-white">
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
                      Hivekind helps your team harness automation and AI without creating new complexity or dependencies. Our focus is on building practical systems that work, and leaving your team stronger than before. Here&apos;s what sets us apart:
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
                        Fast-moving, high-leverage work
                      </h3>
                    </div>
                    <p>
                      We run focused engagements that deliver meaningful operational improvements in weeks, not months. Our goal is to make visible, measurable progress, then get out of your way.
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
                        Fixed-fee, value-aligned pricing
                      </h3>
                    </div>
                    <p>
                      All our work is scoped and priced upfront. You get predictable costs tied to tangible outcomes, not open-ended time billing or ambiguous deliverables.
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
                        Collaborative, not disruptive
                      </h3>
                    </div>
                    <p>
                      We integrate with your existing tools and processes, working alongside your team to improve, not upend, how things get done. You stay in control.
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
                        Built to last, not to tether
                      </h3>
                    </div>
                    <p>
                      We design solutions your team can own and evolve. With clear documentation, training, and flexible hosting options, you stay independent. No hidden dependencies or vendor lock-in.
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
