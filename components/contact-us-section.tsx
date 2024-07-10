import React from "react";
import ContactButton from "./contact-button";

const ContactUsSection = () => {
  return (
    <section className="cta_section">
      <div className="padding-global background-color-white">
        <div className="container-medium">
          <div className="padding-section-large">
            <div className="w-layout-grid cta_component">
              <div className="cta_content">
                <div className="margin-bottom margin-small">
                  <h2>
                    Your vision deserves a dedicated software development team.
                  </h2>
                </div>
                <div className="margin-bottom margin-small">
                  <p className="text-size-medium">
                    We're not about tech jargon or over-promising. Instead, we
                    focus on clear communication, transparency in our process,
                    and delivering results that speak for themselves.
                  </p>
                </div>

                <ContactButton isCenter={false} />

              </div>
              <div className="cta_image-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                  srcSet="
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards-p-500.png  500w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards-p-800.png  800w,
                    https://cdn.prod.website-files.com/6347cb105849aecae0fd4ed8/6639dc18c475875bf5b9c68f_top-software-development-company-malaysia-awards.png       1530w
                  "
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
