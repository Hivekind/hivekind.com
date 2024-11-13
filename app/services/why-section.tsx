import ServiceItemCard from "./service-item-card";

import hivekindProductDiscovery from "@/public/images/hivekind-product-discovery.webp";
import hivekindProductDiscoveryFallback from "@/public/images/hivekind-product-discovery.png";

import hivekindTechnicalDiscovery from "@/public/images/hivekind-technical-discovery.webp";
import hivekindTechnicalDiscoveryFallback from "@/public/images/hivekind-technical-discovery.png";

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="discovery_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h2>Get your foundation right</h2>
                  </div>
                  <p className="text-size-medium">
                    Jumping straight into building your product is exciting, but
                    skipping the research is like trying to put together a
                    puzzle with missing pieces. You won’t see what’s missing
                    until it’s too late. That’s why our discovery services are
                    here to make sure you’re fully prepared before you begin.
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
  );
}
