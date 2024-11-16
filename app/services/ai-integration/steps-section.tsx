import CheckInCircleInvertedSvg from "@/components/svgs/check-in-circle-inverted";
import TimelineStep from "@/components/timeline-step";

const items = [
  {
    title: "Book a call",
    body: "In our initial meeting, we’ll explore your ideas, understand your goals, and discuss your vision. This introductory call helps us learn about your current state and the future outcomes you’re aiming for, establishing whether there’s a strong fit between your needs and our services.",
  },
  {
    title: "Discovery session",
    body: "Next, we’ll conduct a structured two-hour discovery session with key stakeholders from both sides. This in-depth discussion allows us to gather essential details about your objectives, challenges, and desired outcomes, ensuring we’re aligned with your vision and priorities.",
  },
  {
    title: "Proposal presentation",
    body: "Based on our discovery, we’ll present a proposal for a fixed-price, project-based engagement. This proposal includes tailored options, typically starting with an additional discovery and planning phase to refine our approach and ensure we fully understand your systems and processes.",
  },
  {
    title: "Statement of work & contract",
    body: "After agreeing on the proposal, we’ll provide a detailed Statement of Work (SOW) and contract. Signing this contract marks the official start of our engagement, setting expectations and milestones for the project.",
  },

  {
    title: "Kick-off",
    body: "We’ll begin with a kick-off session to align on working rhythms, establish access to necessary resources, and solidify our collaboration framework. From here, we move forward together toward your future vision, driving impactful outcomes for your business.Explore our proven workflow and process for transforming AI-powered ideas into successful, real-world applications.",
  },
];

export default function ApproachSection() {
  return (
    <section className="approach-section bg-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="w-layout-grid process_component">
              <div className="process_content-left">
                <div className="margin-bottom margin-small">
                  <h2>What's the next step?</h2>
                </div>
                <p className="text-size-medium">
                  Curious about working with us to implement AI integration for
                  your product or business? Here's how we'll move from where you
                  are now to kicking off an impactuful engagement together.
                </p>
                <div className="margin-top margin-medium">
                  <div className="button-group">
                    <a href="/contact" className="button w-button">
                      Book the first meeting
                    </a>
                  </div>
                </div>
              </div>
              <div className="process_content-right">
                <div className="process_stages-wrapper">
                  <div className="process_progress-bar-wrapper">
                    <div className="process_progress-bar"></div>
                  </div>

                  {items.map(({ title, body }) => (
                    <TimelineStep title={title} body={body} key={title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
