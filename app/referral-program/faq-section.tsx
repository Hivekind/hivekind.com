"use client";
import React, { useState, useRef } from "react";
import styles from "./faq.module.css";

interface itemProps {
  question: string;
  answer: React.ReactNode;
}

const FaqItem = ({ question, answer }: itemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const answerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (answerRef.current && iconRef.current) {
      if (isExpanded) {
        // Start collapsing
        answerRef.current.style.height = `${answerRef.current.scrollHeight}px`;
        iconRef.current.style.transform = "rotate(45deg)";

        requestAnimationFrame(() => {
          if (answerRef.current && iconRef.current) {
            answerRef.current.style.height = "0";
            iconRef.current.style.transform = "rotate(0deg)";
          }
        });

        setIsExpanded(false);
      } else {
        // Start expanding
        answerRef.current.style.height = "0";
        iconRef.current.style.transform = "rotate(0deg)";

        requestAnimationFrame(() => {
          if (answerRef.current && iconRef.current) {
            answerRef.current.style.height = `${answerRef.current.scrollHeight}px`;
            iconRef.current.style.transform = "rotate(45deg)";
          }
        });

        // After the animation, we set the height to "auto" so that the margin remains responsive in smaller screens
        //    due to these responsive classes: "margin-bottom margin-small"
        // We can't set the height to "auto" initially because it will break the animation
        setTimeout(() => {
          if (answerRef.current) {
            answerRef.current.style.height = "auto";
          }
        }, 400); // match with CSS time: transition: height 0.4s ease-out;

        setIsExpanded(true);
      }
    }
  };

  return (
    <div className={styles.faq_accordion}>
      <div className={styles.faq_question} onClick={handleToggle}>
        <div className="text-size-medium text-weight-bold">{question}</div>
        <div className={styles.faq_icon_wrappper} ref={iconRef}>
          <div className="icon-embed-small w-embed">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.faq_answer} ref={answerRef}>
        <div className="margin-bottom margin-small">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section>
      <div className="padding-global">
        <div className="container-small">
          <div className="padding-section-large">
            <div className="margin-bottom margin-xxlarge">
              <div className="text-align-center">
                <div className="max-width-large">
                  <h2>Frequently asked questions</h2>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.faq_list}>
                <FaqItem
                  question="How much can I earn?"
                  answer="If the monthly billing for the client you referred to us is USD 20,000, you will earn a one-time payment of USD 10,000, which is 50% of their first month’s bill. If the client’s monthly billing is USD 30,000, you will still earn a one-time payment of USD 10,000. The maximum reward is capped at USD 10,000 per successful referral."
                />
                <FaqItem
                  question="How do I get paid?"
                  answer="Your earnings will be transferred to your personal bank account. If you're an existing client of Hivekind, we can convert it to monthly engineering credits."
                />
                <FaqItem
                  question="Who can join this program?"
                  answer="Anyone over the age of 18 can join this program. If you know someone who could benefit from unlocking the potential of their team or product, you’re already a great fit!"
                />
                <FaqItem
                  question="Who is a good referral?"
                  answer="A good referral for Hivekind is a business or founder who needs dedicated product development support. Ideal clients might be startups with a clear product vision or established companies looking to scale and improve their digital products. They may be interested in product management support, tailored project planning, or even exploring new technologies like AI to enhance their products."
                />
                <FaqItem
                  question="Why should I recommend Hivekind?"
                  answer={
                    <>
                      We don&#x27;t want to tell you why you should recommend
                      us. Instead,{" "}
                      <a
                        href="https://clutch.co/profile/hivekind#reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        click here
                      </a>{" "}
                      to see why our clients recommend us.
                    </>
                  }
                />
                <FaqItem
                  question="How can I learn more about Hivekind?"
                  answer={
                    <>
                      Send an email to{" "}
                      <a
                        href="mailto:attraction@hivekind.com?subject=Referral%20enquiry"
                      >
                        attraction@hivekind.com
                      </a>{" "}
                      and we’ll get back to you. 
                    </>
                  }
                />
              </div>
            </div>
            <div className="margin-top margin-xxlarge">
              <div className="text-align-center">
                <div className="max-width-medium align-center">
                  <div className="margin-bottom margin-xsmall">
                    <h3>Still have questions?</h3>
                  </div>
                  <p className="text-size-medium">
                    Feel free to reach out to our team for more information.
                  </p>
                  <div className="margin-top margin-medium">
                    <a
                      href="mailto:attraction@hivekind.com?subject=Referral%20enquiry"
                      className="button w-button"
                    >
                      Contact us
                    </a>
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

export default FaqSection;
