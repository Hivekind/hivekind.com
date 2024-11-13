import StaticImage from "@/components/static-image";

import hivekindTechnicalSupport from "@/public/images/hivekind-technical-support.webp";
import hivekindTechnicalSupportFallback from "@/public/images/hivekind-technical-support.png";

export default function SupportSection() {
  return (
    <section className="support-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="layout254_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-large">
                    <div className="margin-bottom margin-small">
                      <h2>Support, whenever you need it</h2>
                    </div>
                    <p className="text-size-medium">
                      We make sure your apps stay up-to-date and work perfectly
                      every day. You can rely on us for ongoing care and expert
                      help to keep your apps running smoothly.
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
                      <h3 className="heading-style-h5">L2 Technical Support</h3>
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
                  <StaticImage
                    src={hivekindTechnicalSupport}
                    srcfallback={hivekindTechnicalSupportFallback}
                    sizes="(max-width: 767px) 90vw, 43vw"
                    alt="Hivekind technical support"
                    style={{ width: "100%", height: "100%" }}
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
                      We keep your applications in top shape, performing regular
                      updates and fixes to prevent problems before they start.
                    </p>
                  </div>
                  <div className="support_item">
                    <div className="margin-bottom margin-xsmall">
                      <h3 className="heading-style-h5">L3 Technical Support</h3>
                    </div>
                    <p>
                      We dive deep to solve complex problems in your
                      applications, providing expert solutions and keeping your
                      systems up-to-date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
