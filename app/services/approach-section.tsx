import CheckInCircleInvertedSvg from "@/components/svgs/check-in-circle-inverted";
import TimelineStep from "@/components/timeline-step";

const items = [
  {
    title: "AI discovery workshop",
    body: "A 5-day sprint that explores your current workflows, identifies automation opportunities, and produces a roadmap with prototypes and a business case.",
  },
  {
    title: "Implementation planning",
    body: "We define the scope of each workflow, clarify outcomes, and map out technical details before development begins.",
  },
  {
    title: "Workflow build & test",
    body: "Our team builds low-code or custom AI workflows and refines them to meet performance, cost, and reliability goals.",
  },
  {
    title: "Integration & training",
    body: "We connect new workflows to your tools and processes, and ensure your team is equipped to use and maintain them.",
  },
  {
    title: "Support & maintenance",
    body: "Ongoing monitoring, bug fixes, and upgrades—available whether the system is hosted by Hivekind or on your infrastructure.",
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
                  <h2>Approach</h2>
                </div>
                <p className="text-size-medium">
                  Every engagement with Hivekind begins by understanding your operations and uncovering areas where AI and automation can deliver meaningful business improvements.
                  <br />
                  <br />
                  We then design and build workflows that streamline your internal processes—reducing manual effort, increasing speed, and improving consistency across teams and tools.
                  <br />
                  <br />
                  Once deployed, we provide support to keep your systems running smoothly and evolving with your business—so your team can focus on higher-leverage work.
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
