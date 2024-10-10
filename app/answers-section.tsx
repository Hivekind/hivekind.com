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
        title="We’ve got software development figured out for you"
        description="Building a great web or mobile app isn’t easy, especially when you’re a founder. You’ve got a million things on your plate, and developing the app is just one of them. That’s where we step in. We make the process simple and are here to answer questions like these that you or your team might have:"
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
                What tech stack should I use for my product?
              </h3>
            </div>
            <p>
              It depends on a few key things, like your team’s skills and the
              type of product you’re building. The right tech stack should match
              your project&rsquo;s needs and your team&rsquo;s expertise to
              ensure everything runs smoothly. Don’t get easily swayed by the
              shiniest new toy in town.
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
                I want my app built within budget and on time
              </h3>
            </div>
            <p>
              That’s fantastic because we charge a fixed monthly price for all
              our services. Right from the start, we streamline communication,
              create a clear roadmap, and align on timelines and expectations to
              ensure your project stays on track and within budget.
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
                I have an idea, but where do I even start?
              </h3>
            </div>
            <p>
              That’s exactly where we come in. Our discovery services help you
              turn your idea into a clear plan. We’ll work with you to define
              the product, understand your audience, and outline key features,
              so you’ll know exactly where to start and how to move forward.
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
                How can I utilize AI to elevate my product?
              </h3>
            </div>
            <p>
              AI development is progressing rapidly. We’ll help you understand
              how AI can fit your business goals, whether it’s automating tasks,
              enhancing user experiences, or adding smart features to make your
              product more efficient and intelligent.
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
