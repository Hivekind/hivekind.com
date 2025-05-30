import React from "react";
import Header from "@/components/header";
import ContactUsSection from "@/components/contact-us-section";

import ApproachSection from "./approach-section";

import StaticImage from "@/components/static-image";

import dedicatedTeamPlanning from "@/public/images/dedicated-team-planning.webp";
import dedicatedTeamPlanningFallback from "@/public/images/dedicated-team-planning.jpg";

import TestimonialSection from "@/components/testimonial-section";
import ServicesSection from "./services-section";
import { getByField } from "@/lib/contentfulApi";
import { FieldsType } from "contentful";

export default async function ServicesPage() {
  const title = "Make use of AI in your business operations";
  const description =
    "We help you identify, design, and implement AI-powered workflows that streamline operations, improve decision-making, and deliver measurable ROI—without disrupting your existing systems.";

  const testimonial = (await getByField({
    contentType: "testimonial",
    fields: { "fields.name[in]": "Mitch Gelber" },
  })) as FieldsType;

  return (
    <main className="main-wrapper">
      <Header title={title} description={description}>
        <div className="header_image-wrapper">
          <StaticImage
            src={dedicatedTeamPlanning}
            srcfallback={dedicatedTeamPlanningFallback}
            priority={true}
            sizes="90vw"
            alt="Dedicated team working"
            className="about_image"
          />
        </div>
      </Header>

      <ServicesSection />

      <ApproachSection />

      <TestimonialSection
        quote={String(testimonial.fields.quote)}
        name={String(testimonial.fields.name)}
        title={String(testimonial.fields.title)}
        image={testimonial.fields.image?.fields.file.url}
      />

      <ContactUsSection />
    </main>
  );
}
