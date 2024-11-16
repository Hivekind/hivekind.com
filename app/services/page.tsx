import React from "react";
import Header from "@/components/header";
import ContactUsSection from "@/components/contact-us-section";

import ApproachSection from "./approach-section";

import StaticImage from "@/components/static-image";

import dedicatedTeamPlanning from "@/public/images/dedicated-team-planning.webp";
import dedicatedTeamPlanningFallback from "@/public/images/dedicated-team-planning.jpg";

import jayasimhanMasilamani from "@/public/images/jayasimhan-masilamani.webp";
import jayasimhanMasilamaniFallback from "@/public/images/jayasimhan-masilamani.jpg";

import TestimonialSection from "@/components/testimonial-section";
import ServicesSection from "./services-section";
import MeasurableOutcomesSection from "./measurable-outcomes-section";
import CustomSoftwareDevelopmentSection from "./custom-software-development-section";

export default function ServicesPage() {
  const title = "Build software with confidence";
  const description =
    "Whether you're a startup or an established enterprise, Hivekind is here to help you through the tricky parts of making software. We turn problems into opportunities and your ideas into market-ready products.";

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
        quote="The Hivekind team built the Willmaker Online product from start to finish. The project had thousands of screens and on delivery there were no major issues. The business team was very happy with the quality at launch. The online version now enables our business team to apply different business models and pricing strategies. The conversion rate is up 70% since the launch."
        name="Jayasimhan Masilamani"
        title="VP of Technology, Nolo"
        image={jayasimhanMasilamani}
        imageFallback={jayasimhanMasilamaniFallback}
      />

      <ContactUsSection />
    </main>
  );
}
