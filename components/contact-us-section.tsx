import React from "react";
import ContactButton from "./contact-button";
import StaticImage from "@/components/static-image";

import topSoftwareDevelopmentCompanyMalaysiaAwards from "@/public/images/top-software-development-company-malaysia-awards.webp";
import topSoftwareDevelopmentCompanyMalaysiaAwardsFallback from "@/public/images/top-software-development-company-malaysia-awards.png";

const ContactUsSection = ({
  className,
  heading,
  body,
  cta,
}: {
  className?: string;
  heading?: string;
  body?: string;
  cta?: string;
}) => {
  return (
    <section className={`cta_section ${className}`}>
      <div
        className={`padding-global ${className || "background-color-white"}`}
      >
        <div className="container-large">
          <div className="padding-section-large">
            <div className="w-layout-grid cta_component">
              <div className="cta_content">
                <div className="margin-bottom margin-small">
                  <h2 className="heading-style-h2">
                    {heading ||
                      "We're not about tech jargon or over-promising."}
                  </h2>
                </div>
                <div className="margin-bottom margin-small">
                  <p className="text-size-medium">
                    {body ||
                      "We're not about tech jargon or over-promising. Instead, we focus on clear communication, transparency in our process, and delivering results that speak for themselves."}
                  </p>
                </div>

                <ContactButton isCenter={false} cta={cta} />
              </div>
              <div className="cta_image-wrapper">
                <StaticImage
                  src={topSoftwareDevelopmentCompanyMalaysiaAwards}
                  srcfallback={
                    topSoftwareDevelopmentCompanyMalaysiaAwardsFallback
                  }
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                  alt="Top software development company Malaysia awards"
                  className="awards_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
