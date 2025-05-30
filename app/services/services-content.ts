export interface Service {
  title: string;
  description: string;
  url?: string;
  order: number;
}

export interface ServicesContent {
  hero: {
    title: string;
    description: string;
  };
  services: Service[];
}

export const servicesContent: ServicesContent = {
  hero: {
    title: "Services",
    description: "Our services cover the full lifecycle of internal automation and AI integration, from early-stage exploration to hands-on implementation and long-term support. Whether you're prototyping ideas or deploying production-ready workflows, we help teams streamline operations, reduce reliance on manual work, and unlock new capacity for growth."
  },
  services: [
    {
      title: "AI discovery workshop",
      description: "<p>A fast, focused way to figure out what's worth automating.</p><br/><p>We run a 5-day sprint-style workshop to explore your internal operations, uncover pain points, and identify high-leverage automation opportunities. By the end, you'll have a shortlist of ideas, a business case for each, and a clear implementation roadmap.</p><br><p>Ideal for teams who know AI could help and want to determine where to begin.</p>",
      order: 1
    },
    {
      title: "Workflow automation",
      description: "<p>From concept to execution, we build systems that work.</p><br><p>We design and deliver automated workflows using low-code platforms and AI agents built in Python. Whether it's syncing systems, enriching data, automating decisions, or deploying full agentic processes, our team turns messy, manual operations into structured, scalable systems.</p><br><p>Includes low-code automations, AI agents, evaluation frameworks, and integrations.</p>",
      order: 2
    },
    {
      title: "Support & maintenance",
      description: "<p>Keep your automations healthy, accurate, and cost-efficient.</p><br><p>Our support services ensure your workflows continue to perform reliably after launch. We offer monitoring, bug fixes, upgrades (as AI tools evolve), usage insights, and optional hosting. Choose from client-managed or Hivekind-managed infrastructure, whichever suits your team best.</p><br><p>Support plans start from monthly retainers and scale with your usage.</p>",
      order: 3
    },
  ]
}; 