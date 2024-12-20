import FaqSection from "./faq-section";
import StaticImage from "@/components/static-image";

import softwareDevelopmentReferralProgram from "@/public/images/software-development-referral-program.webp";
import softwareDevelopmentReferralProgramFallback from "@/public/images/software-development-referral-program.jpg";

export default function ReferralProgramPage() {
  return (
    <main className="main-wrapper">
      <header className="header-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large referral">
              <div className="w-layout-grid header-component">
                <div className="header-content">
                  <div className="margin-bottom margin-small">
                    <h1>
                      Hivekind client referral program
                    </h1>
                  </div>
                  <p className="text-size-medium">
                    Know someone who could benefit from our <a href="/services">services</a>?
                    Refer them to us and earn up to $10,000 as a reward!
                  </p>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <a
                        href="mailto:hello@hivekind.com"
                        className="button w-button"
                      >
                        Refer a client
                      </a>
                    </div>
                  </div>
                </div>
                <div className="header_image-wrapper">
                  <StaticImage
                    src={softwareDevelopmentReferralProgram}
                    srcfallback={softwareDevelopmentReferralProgramFallback}
                    priority={true}
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 90vw, 41vw"
                    alt="A woman holding an iPad"
                    className="header-image referral"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="steps-section background-color-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="steps_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large">
                      <h2>Here&#x27;s how the program works</h2>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid steps_list">
                  <div className="steps_item">
                    <div className="margin-bottom margin-small">
                      <div className="step-number">
                        <div className="text-size-large text-weight-bold">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h5">
                        Connect us with a client
                      </h3>
                    </div>
                    <p>
                      Refer us to someone who needs our{" "}
                      <a href="/services">services</a>. Make introductions to{" "}
                      <a href="mailto:hello@hivekind.com">hello@hivekind.com</a>{" "}
                      and we&#x27;ll take it from there.
                    </p>
                  </div>
                  <div className="steps_item">
                    <div className="margin-bottom margin-small">
                      <div className="step-number">
                        <div className="text-size-large text-weight-bold">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h5">
                        Stay in the loop
                      </h3>
                    </div>
                    <p>
                      We&#x27;ll keep you updated on how the conversation is progressing with the client you referred to us.
                    </p>
                  </div>
                  <div className="steps_item">
                    <div className="margin-bottom margin-small">
                      <div className="step-number">
                        <div className="text-size-large text-weight-bold">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h5">
                        Get paid
                      </h3>
                    </div>
                    <p>
                      Once we sign a contract with the client you introduced and they make their first payment, you will receive 50% of their first month&#x27;s billing, up to $10,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </main>
  );
}
