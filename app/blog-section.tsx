import { CardList } from "@/components/card-list/card-list";
import Section from "@/components/section";
import { getAllPosts } from "@/lib/contentfulApi";
import "@/styles/blog-section.css";

export default async function BlogSection() {
  const { posts } = await getAllPosts({
    contentType: "blogPosts",
    order: ["-fields.publishedAt"],
  });

  const items = posts.slice(0, 3);

  return (
    <Section
      title="We love sharing knowledge"
      description="Check out our latest articles and insights, where we dive into trending topics and share valuable tips to help you stay ahead."
      cta="View all"
      ctaUrl="/blog"
    >
      <CardList
        cols={items.length}
        items={items.map(({ fields }) => ({
          title: fields.name || "Untitled",
          summary: fields.postSummary || "No summary available",
          imageUrl: fields.mainImage?.fields.file.url || "",
          imageAlt: fields.mainImageAltText || "No image description",
          url: `/blog/${fields.slug}`,
          topic: fields.blogPostTopic?.fields.name || "Unknown topic",
          author: fields.author?.fields,
        }))}
      />
    </Section>
  );
}
