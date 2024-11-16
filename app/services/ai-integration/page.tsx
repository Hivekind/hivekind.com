import TestimonialCarousel from "@/components/testimonial-carousel";
import HeaderSection from "./header-section";
import WhatCanAiDoForYouSection from "./what-can-ai-do-for-you-section";
import WhySection from "./why-section";
import ContactUsSection from "@/components/contact-us-section";
import Section from "@/components/section";
import { CardList } from "@/components/card-list/card-list";
import { getAllPosts } from "@/lib/contentfulApi";
import StepsSection from "./steps-section";
import HowDoYouMeasureSection from "./how-do-you-measure-section";
import WhatIsAiIntegrationSection from "./what-is-ai-integration-section";

export default async function AiProductDevelopment() {
  const { posts } = await getAllPosts({
    contentType: "blogPosts",
    order: ["-fields.publishedAt"],
  });

  const items = posts
    .filter(({ fields }) => fields.blogPostTopic?.fields.name === "AI")
    .slice(0, 3);

  return (
    <>
      <HeaderSection />

      <WhatIsAiIntegrationSection />

      <WhatCanAiDoForYouSection />

      <HowDoYouMeasureSection />

      <WhySection />

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

      <StepsSection />

      <TestimonialCarousel />

      <ContactUsSection />
    </>
  );
}
