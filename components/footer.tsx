import React from "react";
import CustomImage from "./custom-image";

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
                    <a href="#" className="footer1_logo-link w-nav-brand">
                      <CustomImage
                        src="/images/6542de116bc3db8aa568cd97_hk-white-logo.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                        width={44}
                        height={50}
                        alt="Hivekind white logo"
                        className="footer_logo"
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
                          Unit 25-02 Tower A, The Vertical Business Suites
                          <br />
                          No. 8 Jalan Kerinchi, 59200, Kuala Lumpur, Malaysia
                        </div>
                      </div>
                      <div className="margin-bottom margin-tiny">
                        <div className="text-size-small text-weight-semibold">
                          Contact:
                        </div>
                      </div>
                      <div className="text-size-small">
                        <a href="tel:+60322423731" className="text-color-white">
                          +603 2242 3731
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
                    <a href="/work" className="foot_link">
                      Work
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
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                      <div>Facebook</div>
                    </a>
                    <a
                      href="https://instagram.com/hivekindcom"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                      <div>Instagram</div>
                    </a>
                    <a
                      href="https://twitter.com/hivekindcom"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                      <div>X</div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/hivekind"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721L15.2781 9.53721L15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2991 10.9315L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                      <div>LinkedIn</div>
                    </a>
                    <a
                      href="https://github.com/hivekind"
                      target="_blank"
                      className="foot_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0074 3C7.02656 3 3 7.05625 3 12.0744C3 16.0856 5.57996 19.4811 9.15904 20.6828C9.60652 20.7732 9.77043 20.4876 9.77043 20.2473C9.77043 20.037 9.75568 19.3159 9.75568 18.5646C7.25002 19.1055 6.72824 17.4828 6.72824 17.4828C6.32557 16.4312 5.72893 16.1609 5.72893 16.1609C4.90883 15.605 5.78867 15.605 5.78867 15.605C6.69837 15.6651 7.17572 16.5364 7.17572 16.5364C7.98089 17.9185 9.27833 17.528 9.8003 17.2876C9.87478 16.7016 10.1135 16.296 10.3671 16.0707C8.36863 15.8603 6.26602 15.0791 6.26602 11.5935C6.26602 10.602 6.6237 9.79071 7.19047 9.15978C7.10105 8.93447 6.7878 8.00283 7.28008 6.7559C7.28008 6.7559 8.04062 6.51547 9.75549 7.68736C10.4897 7.48873 11.2469 7.38768 12.0074 7.38683C12.768 7.38683 13.5433 7.49211 14.2592 7.68736C15.9743 6.51547 16.7348 6.7559 16.7348 6.7559C17.2271 8.00283 16.9137 8.93447 16.8242 9.15978C17.4059 9.79071 17.7489 10.602 17.7489 11.5935C17.7489 15.0791 15.6463 15.8452 13.6329 16.0707C13.9611 16.3561 14.2443 16.8969 14.2443 17.7533C14.2443 18.9702 14.2295 19.9468 14.2295 20.2472C14.2295 20.4876 14.3936 20.7732 14.8409 20.683C18.42 19.4809 21 16.0856 21 12.0744C21.0147 7.05625 16.9734 3 12.0074 3Z"
                            fill="currentColor"
                          />
                        </svg>
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
                  © 2024 Hivekind Sdn. Bhd.
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
