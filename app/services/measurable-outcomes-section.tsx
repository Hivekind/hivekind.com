import { CardList } from "@/components/card-list/card-list";
import Section from "@/components/section";
import { getAllPosts } from "@/lib/contentfulApi";
import { markdownParser } from "@/lib/markdownParser";

export default async function MeasurableOutcomesSection() {
  const { posts } = await getAllPosts({
    contentType: "measurableOutcomesComponent",
    order: ["fields.order"],
  });

  // only render the items with an order associated with it
  const items = posts.filter((post) => post.fields.order);

  const hero = posts.find((post) => post.fields.heroEntry);

  return (
    <Section
      className="bg-white"
      title={hero?.fields.title}
      description={hero?.fields.body}
    >
      <CardList
        cols={items.length}
        items={items.map(({ fields }) => ({
          title: fields.title || "Untitled",
          summary: markdownParser(
            fields.body?.trim() || "No summary available"
          ),
        }))}
      />
    </Section>
  );
}
