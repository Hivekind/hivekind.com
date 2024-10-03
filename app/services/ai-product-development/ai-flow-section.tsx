import React from "react";
import AiProcessAccordion from "@/components/ai-process-accordion";

const AIFlowSection: React.FC = () => {
  return (
    <section className="aiflow-section background-color-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="aiflow_component">
              <div className="margin-bottom margin-xxlarge align-left">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h2
                      blocks-non-deletable="true"
                      className="heading-style-h2"
                    >
                      Discover how we make your AI powered ideas a reality
                    </h2>
                  </div>
                  <p className="text-size-medium">
                    Explore our proven workflow and process for transforming
                    AI-powered ideas into successful, real-world applications.
                  </p>
                </div>
              </div>
              <AiProcessAccordion />
              <div className="margin-top margin-xxlarge">
                <div className="button-group">
                  <a href="/contact" className="button w-button">
                    Book the first meeting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFlowSection;
