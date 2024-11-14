import { CardList } from "@/components/card-list/card-list";
import Section from "@/components/section";
import { markdownParser } from "@/lib/markdownParser";

const items = [
  {
    fields: {
      title: "AI Integration",
      body: `
- Model accuracy & precision
- Efficiency gains
- Cost savings
    `,
    },
  },

  {
    fields: {
      title: "Product reliability engineering",
      body: `
- Downtime reduction
- Web request performance
- System observability reach
    `,
    },
  },
  {
    fields: {
      title: "Technical operations optimization",
      body: `
- Build and deployment speed
- Error reduction in deployments
- Infrastructure cost efficiency
    `,
    },
  },
  {
    fields: {
      title: "Legacy system modernization",
      body: `
- Codebase maintainability
- Deployment frequency
- User retention
    `,
    },
  },
  {
    fields: {
      title: "Automated testing & verification",
      body: `
- Test coverage
- Regression bug rate
- Frequency of manual QA
    `,
    },
  },
  {
    fields: {
      title: "Team workflow support",
      body: `
- Workflow efficiency
- Team engagement
- Reduction in bottlenecks
    `,
    },
  },
];

export default function MeasurableOutcomesSection() {
  return (
    <Section
      className="bg-white"
      title="Measurable Outcomes"
      description="We don’t just deliver results; we make sure those results are quantifiable, supporting both your technical and business objectives. For each service we offer, here are some typical metrics that we’d consider using to demonstrate success:"
    >
      <CardList
        cols={items.length}
        items={items.map(({ fields }) => ({
          title: fields.title || "Untitled",
          summary: markdownParser(fields.body.trim()),
        }))}
      />
    </Section>
  );
}
