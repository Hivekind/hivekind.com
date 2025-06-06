"use client";

import { useState } from "react";
import { functions } from "@/firebase";
import { httpsCallable } from "firebase/functions";
import ArrowSvg from "@/components/svgs/arrow-svg";

const styles: { [index: string]: React.CSSProperties } = {
  blackCheckbox: {
    accentColor: "#000",
  },
  modal: {
    display: "block",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  acknowledgementBlock: {
    height: "100%",
  },
  show: {
    display: "block",
  },
  disableButton: {
    justifySelf: "start",
    cursor: "not-allowed",
  },
  submitButton: {
    justifySelf: "start",
  },
  horizontalMargin: {
    marginLeft: "3px",
    marginRight: "3px",
  },
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [privacyAcceptance, setPrivacyAcceptance] = useState(false);
  const [formSubmission, setFormSubmission] = useState("ongoing");
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);

  function clearForm() {
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setPrivacyAcceptance(false);
    setDisableSubmitButton(false);
  }

  function sendToConsentSolution() {
    if (
      typeof window !== "undefined" &&
      window._iub &&
      window._iub.cons_instructions
    ) {
      window._iub.cons_instructions.push([
        "submit",
        {
          submitElement: document.getElementById("submit_button"),
          form: {
            selector: document.getElementById("email-form"),
            map: {
              subject: {
                full_name: "name",
                email: "email",
              },
              preferences: {
                privacy_acceptance: "privacy_acceptance",
              },
            },
          },
          consent: {
            legal_notices: [
              {
                identifier: "privacy_policy",
              },
            ],
          },
        },
      ]);
    }
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    setDisableSubmitButton(true);

    const data = {
      subject: `New form submission on Hivekind website: ${name}, ${company}`,
      message: `
        <html>
          <body>
            You just got a form submission!<br /><br />
            <strong>Submitted content</strong><br />
            Name: ${name}<br />
            Email: ${email}<br />
            Company: ${company}<br />
            Message: ${message}<br />
            privacy_acceptance: ${privacyAcceptance}<br />
          </body>
        </html>
      `,
      name,
      company,
    };

    const sendEmail = httpsCallable(functions, "sendEmail");
    const response: any = await sendEmail(data);
    setDisableSubmitButton(false);

    if (response.data.success) {
      sendToConsentSolution();
      clearForm();
      setFormSubmission("succeeded");
    } else {
      setFormSubmission("failed");
    }
  }

  return (
    <main className="main-wrapper">
      <section className="contact-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="margin-bottom margin-large">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h1>Need help automating your operations?</h1>
                  </div>
                  <p className="text-size-medium">
                    Send us your details and we will get back to you soon. If
                    you need an NDA, just let us know and we’ll gladly provide
                    one.
                  </p>
                </div>
              </div>
              <div className="w-layout-grid contact_component">
                <div className="contact_form-block">
                  {formSubmission === "ongoing" ? (
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="contact_form"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-field-wrapper">
                        <label htmlFor="name" className="field-label">
                          What&#x27;s your name?
                        </label>
                        <input
                          className="form-input w-input"
                          maxLength={256}
                          name="name"
                          data-name="name"
                          placeholder=""
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-field-wrapper">
                        <label htmlFor="email" className="field-label">
                          How about your email address?
                        </label>
                        <input
                          className="form-input w-input"
                          maxLength={256}
                          name="email"
                          data-name="email"
                          placeholder=""
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-field-wrapper">
                        <label htmlFor="company" className="field-label">
                          What&#x27;s your company?
                        </label>
                        <input
                          className="form-input w-input"
                          maxLength={256}
                          name="Company"
                          data-name="Company"
                          placeholder=""
                          type="text"
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-field-wrapper">
                        <label htmlFor="message" className="field-label">
                          How can we help you?
                        </label>
                        <textarea
                          id="message"
                          name="Message"
                          maxLength={5000}
                          data-name="Message"
                          placeholder="Type your message..."
                          required
                          className="form-input is-text-area w-input"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="margin-bottom margin-xsmall">
                        <label
                          id="Contact-11-Checkbox"
                          className="w-checkbox form-checkbox"
                        >
                          <input
                            id="privacy_acceptance"
                            type="checkbox"
                            name="privacy_acceptance"
                            data-name="privacy_acceptance"
                            className="form-checkbox-icon"
                            style={styles.blackCheckbox}
                            checked={privacyAcceptance}
                            onChange={(e) =>
                              setPrivacyAcceptance(e.target.checked)
                            }
                            required
                          />
                          <span className="form-checkbox-label text-size-small w-form-label">
                            By ticking this box I agree that I have read the
                            <a
                              href="https://www.iubenda.com/privacy-policy/25742500"
                              target="_blank"
                              className="iubenda-nostyle iubenda-noframe iubenda-embed"
                              style={styles.horizontalMargin}
                            >
                              Privacy Policy
                            </a>
                            and consent to the given information being used by
                            Hivekind to contact me about my project.
                          </span>
                        </label>
                      </div>
                      <input
                        type="submit"
                        id="submit_button"
                        className="button w-button"
                        value={
                          disableSubmitButton ? "Please wait..." : "Submit"
                        }
                        style={
                          disableSubmitButton
                            ? styles.disableButton
                            : styles.submitButton
                        }
                        disabled={disableSubmitButton}
                      />
                    </form>
                  ) : (
                    <div style={styles.acknowledgementBlock}>
                      {formSubmission === "succeeded" && (
                        <div
                          className="success-message w-form-done"
                          style={styles.show}
                        >
                          <div className="success-message_wrapper">
                            <div className="success-text">
                              Thank you for contacting us! We will get back to
                              you as soon as possible.
                            </div>
                          </div>
                        </div>
                      )}
                      {formSubmission === "failed" && (
                        <div
                          className="error-message w-form-fail"
                          style={styles.show}
                        >
                          <div className="error-text">
                            Oops! Something went wrong while submitting the
                            form.
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="contact_content">
                  <div className="w-layout-grid contact_contact-list">
                    <div className="contact_item">
                      <div className="margin-bottom margin-xsmall">
                        <div className="contact_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="margin-bottom margin-xxsmall">
                        <h2 className="text-size-large">Email</h2>
                      </div>
                      <div className="margin-bottom margin-xxsmall">
                        <div>
                          Don&#x27;t like filling forms? Send us an email.
                        </div>
                      </div>
                      <a
                        href="mailto:hello@hivekind.com"
                        className="text-style-link"
                      >
                        hello@hivekind.com
                      </a>
                    </div>
                    <div className="contact_item">
                      <div className="margin-bottom margin-xsmall">
                        <div className="contact_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.707 12.293C17.6142 12.2 17.504 12.1263 17.3827 12.076C17.2614 12.0257 17.1313 11.9998 17 11.9998C16.8687 11.9998 16.7386 12.0257 16.6173 12.076C16.496 12.1263 16.3858 12.2 16.293 12.293L14.699 13.887C13.96 13.667 12.581 13.167 11.707 12.293C10.833 11.419 10.333 10.04 10.113 9.30096L11.707 7.70696C11.7999 7.61417 11.8737 7.50397 11.924 7.38265C11.9743 7.26134 12.0002 7.13129 12.0002 6.99996C12.0002 6.86862 11.9743 6.73858 11.924 6.61726C11.8737 6.49595 11.7999 6.38575 11.707 6.29296L7.707 2.29296C7.61421 2.20001 7.50401 2.12627 7.38269 2.07596C7.26138 2.02565 7.13133 1.99976 7 1.99976C6.86866 1.99976 6.73862 2.02565 6.6173 2.07596C6.49599 2.12627 6.38579 2.20001 6.293 2.29296L3.581 5.00496C3.201 5.38496 2.987 5.90696 2.995 6.43996C3.018 7.86396 3.395 12.81 7.293 16.708C11.191 20.606 16.137 20.982 17.562 21.006H17.59C18.118 21.006 18.617 20.798 18.995 20.42L21.707 17.708C21.7999 17.6152 21.8737 17.505 21.924 17.3837C21.9743 17.2623 22.0002 17.1323 22.0002 17.001C22.0002 16.8696 21.9743 16.7396 21.924 16.6183C21.8737 16.4969 21.7999 16.3867 21.707 16.294L17.707 12.293ZM17.58 19.005C16.332 18.984 12.062 18.649 8.707 15.293C5.341 11.927 5.015 7.64196 4.995 6.41896L7 4.41396L9.586 6.99996L8.293 8.29296C8.17546 8.41041 8.08904 8.55529 8.04155 8.71453C7.99406 8.87376 7.987 9.04231 8.021 9.20496C8.045 9.31996 8.632 12.047 10.292 13.707C11.952 15.367 14.679 15.954 14.794 15.978C14.9565 16.0129 15.1253 16.0064 15.2846 15.9591C15.444 15.9117 15.5889 15.825 15.706 15.707L17 14.414L19.586 17L17.58 19.005V19.005Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="margin-bottom margin-xxsmall">
                        <h2 className="text-size-large">Phone</h2>
                      </div>
                      <div className="margin-bottom margin-xxsmall">
                        <div>You can call us on weekdays 10am-5pm MYT.</div>
                      </div>
                      <a href="tel:+60322423731" className="text-style-link">
                        +603 3385 4561
                      </a>
                    </div>
                    <div className="contact_item">
                      <div className="margin-bottom margin-xsmall">
                        <div className="contact_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z"
                                fill="currentColor"
                              />
                              <path
                                d="M11.42 21.814C11.5892 21.9349 11.792 21.9998 12 21.9998C12.208 21.9998 12.4107 21.9349 12.58 21.814C12.884 21.599 20.029 16.44 20 10C20 5.589 16.411 2 12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.116 21.599 11.42 21.814ZM12 4C15.309 4 18 6.691 18 10.005C18.021 14.443 13.612 18.428 12 19.735C10.389 18.427 5.979 14.441 6 10C6 6.691 8.691 4 12 4Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="margin-bottom margin-xxsmall">
                        <h2 className="text-size-large">Hivekind HQ</h2>
                      </div>
                      <div>
                        Unit 3A-01A, Level 3A
                        <br />
                        Glo Damansara, No. 699
                        <br />
                        Jalan Damansara
                        <br />
                        60000 Kuala Lumpur
                      </div>
                      <div className="margin-top margin-small">
                        <div className="button-group">
                          <a
                            href="https://maps.app.goo.gl/NQDYc3H84iUG9cRq6"
                            target="_blank"
                            className="button is-link is-icon w-inline-block"
                          >
                            <div>Get Directions</div>
                            <div className="icon-embed-xxsmall w-embed">
                              <ArrowSvg />
                            </div>
                          </a>
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
    </main>
  );
}
