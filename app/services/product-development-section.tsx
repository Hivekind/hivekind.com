import React from "react";
import StaticImage from "@/components/static-image";
import "@/styles/services.css";

const ProductDevelopmentSection: React.FC = () => {
  return (
    <section className="section_product-development">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="component">
              <div className="margin-bottom margin-xxlarge align-left">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h2
                        blocks-non-deletable="true"
                        className="heading-style-h2 text-align-left"
                      >
                        Product development
                      </h2>
                    </div>
                    <p className="text-size-medium text-align-left">
                      Build features and products using future-proof
                      technologies to ensure long-term success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-layout-grid grid-list">
                <div className="w-layout-grid layout376_row">
                  <div className="card-small">
                    <div className="card-small-content">
                      <div className="card-small-content-top">
                        <div className="margin-bottom margin-xxsmall">
                          <h3
                            blocks-non-deletable="true"
                            className="heading-style-h5"
                          >
                            AI App Development
                          </h3>
                        </div>
                        <p>
                          Unlock the power of AI with custom solutions built for
                          your business. We'll work with you to design and
                          develop AI tools that automate tasks, boost
                          efficiency, and solve complex problems.
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
  );
};

export default ProductDevelopmentSection;
