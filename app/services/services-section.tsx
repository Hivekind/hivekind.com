import { CardList } from "@/components/card-list/card-list";
import Section from "@/components/section";
import { getAllPosts } from "@/lib/contentfulApi";

export default async function ServicesSection() {
  const { posts } = await getAllPosts({
    contentType: "servicesComponent",
    order: ["fields.order"],
  });

  const items = posts;
  return (
    <Section
      title="Services"
      description="Our services cover the essential technical and managerial foundations needed to support and scale a software team. From AI Integration to Engineering Management, we provide the expertise to elevate your team’s performance and product reliability."
    >
      <CardList
        cols={items.length}
        items={items.map(({ fields }) => ({
          title: fields.title || "Untitled",
          summary: fields.body || "No summary available",
          url: fields.url,
          cta: fields.url && "Learn more",
        }))}
      />
    </Section>
  );
}
