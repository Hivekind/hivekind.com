import { CardList } from "@/components/card-list/card-list";
import "@/styles/casestudies.css";
import { getAllPosts } from "@/lib/contentfulApi";
import Section from "@/components/section";

export default async function CasestudiesSection() {
  const { posts } = await getAllPosts({
    contentType: "work",
    order: ["fields.order"],
  });

  const items = posts;

  return (
    <Section
      title="Case studies"
      description="Here’s a closer look at how we helped some of our clients achieve success."
      className="bg-white"
    >
      <CardList
        cols={items.length}
        items={items.map(({ fields }) => ({
          title: fields.name || "Untitled",
          summary: fields.caseSummary || "No summary available",
          imageUrl: fields.mainImage?.fields.file.url || "",
          imageAlt: fields.mainImageAltText || "No image description",
          url: `/work/${fields.slug}`,
          topic: fields.client || "Unknown client",
          imageInset: true,
        }))}
      />
    </Section>
  );
}
