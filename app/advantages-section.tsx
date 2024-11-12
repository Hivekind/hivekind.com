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
                      Hivekind isn’t just another software agency. We’re here to
                      empower your team and elevate your product. Our approach
                      ensures that you get impactful results while keeping your
                      team in the driver’s seat. Here’s how Hivekind stands out:
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
                        Short-Term, Impactful Projects
                      </h3>
                    </div>
                    <p>
                      We specialize in time-bound projects that target your most
                      pressing challenges. Our goal is to make a big difference
                      quickly, leaving your team with a strong foundation to
                      build on long after we’re gone. No lingering presence—just
                      efficient, impactful work.
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
                        Transparent, Outcome-Based Pricing
                      </h3>
                    </div>
                    <p>
                      Our fixed-fee model means you know the exact cost upfront,
                      so there are no surprises. Hivekind’s outcome-based
                      pricing ensures you’re paying for real results, not hours,
                      making it easy to focus on value and success without
                      getting caught up in billing details.
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
                        Empowering Your Team
                      </h3>
                    </div>
                    <p>
                      Hivekind isn’t here to take over—we’re here to empower. We
                      respect your team’s skills and culture and work alongside
                      you to boost productivity, streamline processes, and build
                      confidence. When we finish, your team is stronger and
                      fully equipped to keep moving forward.
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
                        No Lock-In, Just Lasting Progress
                      </h3>
                    </div>
                    <p>
                      We’re committed to helping your team grow independently.
                      Unlike agencies that keep you dependent on their services,
                      Hivekind’s approach is designed to foster
                      self-sufficiency. We’ll leave you with the tools, skills,
                      and a clear roadmap, so your progress continues smoothly
                      without needing extra support.
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
