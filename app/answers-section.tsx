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
        title="We&apos;ve got automation and AI figured out for you"
        description="You&apos;ve built a capable team, strong processes, and a growing operation—but scaling is getting harder. Manual steps are piling up, coordination is slowing down, and hiring more people just to keep up doesn&apos;t feel like the right answer. You&apos;re not failing, but you know there&apos;s a smarter, more efficient way to run things."
        className="bg-white"
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
                Is your operations team bogged down by manual, repetitive tasks?
              </h3>
            </div>
            <p>
              Many growing businesses still rely on spreadsheets, email chains, and people remembering what to do. We help replace that with streamlined, AI-enhanced systems that work quietly in the background—getting the job done without you needing to worry.
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
                Are your tools in place, but not really working together?
              </h3>
            </div>
            <p>
              Disconnected platforms mean double entry, lost data, and friction. We integrate your existing systems and design automations that keep everything in sync—so your tools finally act like a team.
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
                Do you want to scale operations without increasing headcount?
              </h3>
            </div>
            <p>
              When the only path to growth looks like hiring more people, it&apos;s time to think differently. We help you create leverage by codifying your processes and enhancing them with automation and AI.
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
                Are you experimenting with AI, but unsure how to apply it at scale?
              </h3>
            </div>
            <p>
              Many teams have dabbled—maybe a chatbot here, a little automation there—but the impact feels scattered. We help you move from isolated tools to cohesive systems. By embedding AI into your core workflows, we turn small wins into sustained, compounding value across your operations.
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
