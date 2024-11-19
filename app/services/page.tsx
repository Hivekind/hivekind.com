import React from "react";
import Header from "@/components/header";
import ContactUsSection from "@/components/contact-us-section";

import ApproachSection from "./approach-section";

import StaticImage from "@/components/static-image";

import dedicatedTeamPlanning from "@/public/images/dedicated-team-planning.webp";
import dedicatedTeamPlanningFallback from "@/public/images/dedicated-team-planning.jpg";

import TestimonialSection from "@/components/testimonial-section";
import ServicesSection from "./services-section";
import MeasurableOutcomesSection from "./measurable-outcomes-section";
import CustomSoftwareDevelopmentSection from "./custom-software-development-section";
import { getByField } from "@/lib/contentfulApi";
import { FieldsType } from "contentful";

export default async function ServicesPage() {
  const title = "Build software with confidence";
  const description =
    "Whether you're a startup or an established enterprise, Hivekind is here to help you through the tricky parts of shipping software and cultivating software teams.";

  const testimonial = (await getByField({
    contentType: "testimonial",
    fields: { "fields.name[in]": "Jayasimhan Masilamani" },
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

      <MeasurableOutcomesSection />

      <CustomSoftwareDevelopmentSection />

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
