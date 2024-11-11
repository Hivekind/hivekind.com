import ContactButton from "@/components/contact-button";
import "@/styles/answers.css";
import StaticImage from "@/components/static-image";
import techStack from "@/public/images/tech-stack.webp";
import techStackFallback from "@/public/images/tech-stack.jpg";
import meetingDeadlines from "@/public/images/meeting-deadlines.webp";
import meetingDeadlinesFallback from "@/public/images/meeting-deadlines.jpg";
import calumWorking from "@/public/images/calum-working.webp";
import calumWorkingFallback from "@/public/images/calum-working.jpg";
import hkOffice from "@/public/images/hk-office.webp";
import hkOfficeFallback from "@/public/images/hk-office.jpg";
import Section from "@/components/section";

export default function AnswersSection() {
  return (
    <>
      <Section
        title="We Have Team Empowerment Figured Out for You"
        description="Building a great software product isn’t easy, especially when you’re a technical leader. You’ve got a million things on your plate, and figuring out how to make your team effective is just one of them. That’s where we come in. We are here to answer questions like these that you or your team might have:"
      >
        <div className="w-layout-grid answers_list">
          <div className="answer_item">
            <div className="margin-bottom margin-small">
              <div className="answers_image-wrapper">
                <StaticImage
                  src={techStack}
                  srcfallback={techStackFallback}
                  sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 44vw"
                  alt="Yuri shifting through his tech stack"
                  className="answers_image"
                />
              </div>
            </div>
            <div className="margin-bottom margin-xsmall">
              <h3 blocks-non-deletable="true" className="heading-style-h5">
                How do I make sure my team is aligned and productive, not bogged
                down by process?
              </h3>
            </div>
            <p>
              We help cut through the clutter by refining workflows, introducing
              best practices, and enabling clear communication. This keeps your
              team focused on what truly matters—delivering results. Our
              hands-on, flexible approach empowers your team to excel while
              building the skills and independence they need to sustain that
              success.
            </p>
          </div>
          <div className="answer_item">
            <div className="margin-bottom margin-small">
              <div className="answers_image-wrapper">
                <StaticImage
                  src={meetingDeadlines}
                  srcfallback={meetingDeadlinesFallback}
                  sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 44vw"
                  alt="Jose in the meeting room"
                  className="answers_image"
                />
              </div>
            </div>
            <div className="margin-bottom margin-xsmall">
              <h3 blocks-non-deletable="true" className="heading-style-h5">
                What should I prioritize to get a lagging project back on track?
              </h3>
            </div>
            <p>
              Through rapid discovery and agile planning, we’ll help you
              identify critical blockers and focus on high-impact actions that
              make an immediate difference. By targeting only the essentials, we
              drive measurable progress right from the start.
            </p>
          </div>
          <div className="answer_item">
            <div className="margin-bottom margin-small">
              <div className="answers_image-wrapper">
                <StaticImage
                  src={calumWorking}
                  srcfallback={calumWorkingFallback}
                  sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 44vw"
                  alt="Calum working on a project"
                  className="answers_image"
                />
              </div>
            </div>
            <div className="margin-bottom margin-xsmall">
              <h3 blocks-non-deletable="true" className="heading-style-h5">
                How can I use AI to create real value in our product?
              </h3>
            </div>
            <p>
              Our AI expertise takes the guesswork out of adopting this powerful
              technology. We’ll guide you through building an AI strategy that
              fits your product, from roadmap creation to developing proofs of
              concept. By working side-by-side with your team, we make sure AI
              adds value without disrupting your current processes.
            </p>
          </div>
          <div className="answer_item">
            <div className="margin-bottom margin-small">
              <div className="answers_image-wrapper">
                <StaticImage
                  src={hkOffice}
                  srcfallback={hkOfficeFallback}
                  sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 44vw"
                  alt="Hivekind office"
                  className="answers_image"
                />
              </div>
            </div>
            <div className="margin-bottom margin-xsmall">
              <h3 blocks-non-deletable="true" className="heading-style-h5">
                Can we improve our deployment pipeline without causing major
                disruptions?
              </h3>
            </div>
            <p>
              Absolutely. We specialize in gradual, low-risk improvements to
              your CI/CD pipeline that enhance efficiency and stability. Whether
              it’s reducing build times or improving visibility, our approach
              makes releases smoother and boosts team morale.
            </p>
          </div>
        </div>
        <div className="margin-top margin-xxlarge">
          <ContactButton isCenter={false} cta="Get more answers" />
        </div>
      </Section>
    </>
  );
}
