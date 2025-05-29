import React from "react";
import StaticImage from "@/components/static-image";

import hkWhiteLogo from "@/public/images/hk-white-logo.webp";
import hkWhiteLogoFallback from "@/public/images/hk-white-logo.png";
import FacebookSvg from "./svgs/facebook-svg";
import InstagramSvg from "./svgs/instagram-svg";
import XSvg from "./svgs/x-svg";
import LinkedinSvg from "./svgs/linkedin-svg";
import GithubSvg from "./svgs/github-svg";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="padding-global background-color-black">
        <div className="container-large">
          <div className="padding-vertical padding-xxlarge">
            <div className="padding-bottom padding-xxlarge">
              <div className="w-layout-grid foot_top-wrapper">
                <div className="foot_left-wrapper">
                  <div className="margin-bottom margin-small">
                    <a href="/" className="footer1_logo-link w-nav-brand">
                      <StaticImage
                        src={hkWhiteLogo}
                        srcfallback={hkWhiteLogoFallback}
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                        alt="Hivekind white logo"
                        style={{ width: 44, height: 50 }}
                      />
                    </a>
                  </div>
                  <div className="margin-bottom margin-small">
                    <div className="footer_details-wrapper">
                      <div className="margin-bottom margin-tiny">
                        <div className="text-size-small text-weight-semibold">
                          Address:
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <div className="text-size-small">
                          Unit 3A-01A, Level 3A
                          <br />
                          Glo Damansara, No. 699
                          <br />
                          Jalan Damansara
                          <br />
                          60000 Kuala Lumpur
                          <br />
                          WPKL Malaysia
                        </div>
                      </div>
                      <div className="margin-bottom margin-tiny">
                        <div className="text-size-small text-weight-semibold">
                          Contact:
                        </div>
                      </div>
                      <div className="text-size-small">
                        <a href="tel:+60322423731" className="text-color-white">
                          +603 3385 4561
                          <br />
                        </a>
                        <a
                          href="mailto:hello@hivekind.com"
                          className="text-color-white"
                        >
                          hello@hivekind.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid foot_menu-wrapper">
                  <div className="foot_link-list">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-weight-semibold">Company</div>
                    </div>
                    <a href="/services" className="foot_link">
                      Services
                    </a>
                    <a href="/about" className="foot_link">
                      About
                    </a>
                    <a href="/blog" className="foot_link">
                      Blog
                    </a>
                    <a href="/careers" className="foot_link">
                      Careers
                    </a>
                    <a href="/events" className="foot_link">
                      Events
                    </a>
                    <a href="/referral-program" className="foot_link">
                      Referral Program
                    </a>
                    <a href="/contact" className="foot_link">
                      Contact
                    </a>
                  </div>
                  <div className="foot_link-list">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-weight-semibold">Social</div>
                    </div>
                    <a
                      href="https://www.facebook.com/hivekindcom"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <FacebookSvg />
                      </div>
                      <div>Facebook</div>
                    </a>
                    <a
                      href="https://instagram.com/hivekindcom"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <InstagramSvg />
                      </div>
                      <div>Instagram</div>
                    </a>
                    <a
                      href="https://twitter.com/hivekindcom"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <XSvg />
                      </div>
                      <div>X</div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/hivekind"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <LinkedinSvg />
                      </div>
                      <div>LinkedIn</div>
                    </a>
                    <a
                      href="https://github.com/hivekind"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <GithubSvg />
                      </div>
                      <div>Github</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="line-divider-3"></div>
            <div className="padding-top padding-medium">
              <div className="footer1_bottom-wrapper">
                <div className="footer1_credit-text">
                  © 2025 Hivekind Sdn. Bhd.
                </div>
                <div className="w-layout-grid footer_legal-list">
                  <a
                    href="https://www.iubenda.com/privacy-policy/25742500"
                    target="_blank"
                    className="footer_legal-link iubenda-nostyle iubenda-noiframe iubenda-embed"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="https://www.iubenda.com/privacy-policy/25742500/cookie-policy"
                    target="_blank"
                    className="footer_legal-link iubenda-nostyle iubenda-noiframe iubenda-embed"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
