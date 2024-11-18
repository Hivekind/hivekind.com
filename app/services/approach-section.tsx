import CheckInCircleInvertedSvg from "@/components/svgs/check-in-circle-inverted";
import TimelineStep from "@/components/timeline-step";

const items = [
  {
    title: "Discovery",
    body: "We begin by fully immersing ourselves in your goals, exploring your challenges, and defining clear objectives. This initial deep dive allows us to grasp both specific issues and broader pain points, setting a strong foundation.",
  },
  {
    title: "Planning",
    body: "With a shared understanding in place, we design a strategic roadmap that includes milestones and success metrics. Each step is tailored to align closely with your business goals, ensuring measurable outcomes along the way.",
  },
  {
    title: "Implementation",
    body: "In this phase, we work closely with your team, executing the plan with an agile, iterative approach. Constant feedback loops ensure adjustments are made as needed, blending our expertise with your team’s unique strengths.",
  },
  {
    title: "Verification",
    body: "As we near completion, we validate that our solutions meet the agreed objectives, reflecting the metrics established in planning. This step is a collaborative effort, ensuring the solutions are aligned with your vision and deliver true value.",
  },

  {
    title: "Handoff & empowerment",
    body: "Our goal is to leave your team well-equipped and independent. We complete a comprehensive knowledge transfer, covering documentation and guidance, so you’re prepared to continue on a clear path forward without us.",
  },
];

export default function ApproachSection() {
  return (
    <section className="approach-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="w-layout-grid process_component">
              <div className="process_content-left">
                <div className="margin-bottom margin-small">
                  <h2>Approach</h2>
                </div>
                <p className="text-size-medium">
                  At Hivekind, we partner with your team to enhance strengths
                  and tackle challenges together. Our focus is on empowering
                  your growth, leaving you stronger and ready to thrive on your
                  own​​.
                  <br />
                  <br />
                  Our approach is focused and flexible, built on delivering
                  meaningful, measurable results without creating dependency.
                  Each engagement is crafted to align with your specific goals
                  and outcomes​​.
                  <br />
                  <br />
                  With every project, we’re here to make a difference. From
                  streamlining processes to introducing new efficiencies, we
                  work to leave you equipped for lasting success and confident
                  in the road ahead​​.
                </p>
                <div className="margin-top margin-medium">
                  <div className="button-group">
                    <a href="/contact" className="button w-button">
                      Schedule a call
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
