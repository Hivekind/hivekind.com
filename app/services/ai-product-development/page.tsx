import BlogSection from "@/app/blog-section";
import TestimonialCarousel from "@/components/testimonial-carousel";
import AIFlowSection from "./ai-flow-section";
import HeaderSection from "./header-section";
import StepsSection from "./steps-section";
import WhySection from "./why-section";
import ContactUsSection from "@/components/contact-us-section";
import Section from "@/components/section";
import { CardList } from "@/components/card-list/card-list";
import { getAllPosts } from "@/lib/contentfulApi";

export default async function AiProductDevelopment() {
  const { posts } = await getAllPosts({
    contentType: "blogPosts",
    order: ["-fields.publishedAt"],
  });

  const items = posts.filter(
    ({ fields }) => fields.blogPostTopic?.fields.name === "AI"
  );

  return (
    <>
      <HeaderSection />
      <WhySection />
      <StepsSection />

      <Section
        title="AI Explorations"
        description="Check out our latest articles and insights, where we dive into trending topics and share valuable tips to help you stay ahead."
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

      <AIFlowSection />
      <TestimonialCarousel />
      <ContactUsSection
        heading="Need help building your product?"
        body="Reach out to us by filling out the form on our contact page. If you need an NDA, just let us know, and we’ll gladly provide one!"
        cta="Take me to the contact page"
      />
    </>
  );
}
