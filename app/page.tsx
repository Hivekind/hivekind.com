import ContactUsSection from "@/components/contact-us-section";
import Header from "@/components/header";
import StaticImage from "@/components/static-image";

import softwareDevelopmentCompanyPhotomontage from "@/public/images/software-development-company-photomontage.webp";
import softwareDevelopmentCompanyPhotomontageFallback from "@/public/images/software-development-company-photomontage.jpeg";

import TestimonialCarousel from "@/components/testimonial-carousel";
import AdvantagesSection from "./advantages-section";
import CasestudiesSection from "./casestudies-section";
import AnswersSection from "./answers-section";
import BlogSection from "./blog-section";
import { getAllPosts } from "@/lib/contentfulApi";
import { TestimonialCarouselProps } from "@/components/testimonial-carousel";

export default async function Home() {
  const title = "Rewire your organization using automation and AI";
  const description =
    "Don't grow your team, grow what your team can do. We help you automate internal workflows using AI so your people spend less time on grunt work and more time on creative, valuable, high-leverage tasks.";

  const { posts } = await getAllPosts({
    contentType: "testimonial",
    order: ["fields.order"],
  });

  const items = posts
    .filter((post) => post.fields.type === "client")
    .map((post) => ({
      quote: post.fields.quote,
      name: post.fields.name,
      title: post.fields.title,
      image: post.fields.image?.fields?.file?.url,
    })) as TestimonialCarouselProps["items"];

  return (
    <>
      <main className="main-wrapper">
        <Header
          title={title}
          description={description}
          paddingStyle="padding-section-medium"
          cta="Get in Touch"
        >
          <div className="header_image-wrapper">
            <StaticImage
              src={softwareDevelopmentCompanyPhotomontage}
              srcfallback={softwareDevelopmentCompanyPhotomontageFallback}
              priority={true}
              sizes="(max-width: 1137px) 90vw, 1024px"
              alt="Software development company photomontage"
              className="header_image"
            />
          </div>
        </Header>

        <AnswersSection />

        <TestimonialCarousel items={items} bgColorClass="bg-white" />

        <AdvantagesSection />

        <CasestudiesSection />

        <BlogSection />

        <ContactUsSection />
      </main>
    </>
  );
}
