import { CardList } from "@/components/card-list/card-list";
import Section from "@/components/section";
import { getAllPosts } from "@/lib/contentfulApi";

export default async function ServicesSection() {
  const { posts } = await getAllPosts({
    contentType: "servicesComponent",
    order: ["fields.order"],
  });

  // only render the items with an order associated with it
  const items = posts.filter((post) => post.fields.order);

  const hero = posts.find((post) => post.fields.heroEntry);

  return (
    <Section title={hero?.fields.title} description={hero?.fields.body}>
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
