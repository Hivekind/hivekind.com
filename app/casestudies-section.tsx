import FeaturedWork from "./featured-work";

export default function CasestudiesSection() {
  return (
    <section className="casestudies-section background-color-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="casestudies_component">
              <div className="margin-bottom margin-xxlarge align-left">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h2>Case studies</h2>
                  </div>
                  <p className="text-size-medium">
                    Here’s a closer look at how we helped some of our clients
                    achieve success.
                  </p>
                </div>
              </div>
              <div className="container-medium">
                <FeaturedWork />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
