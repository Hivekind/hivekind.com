import Section from "@/components/section";
import StaticImage from "@/components/static-image";

import hivekindCustomSoftwareDevelopment from "@/public/images/hivekind-custom-software-development.webp";
import hivekindCustomSoftwareDevelopmentFallback from "@/public/images/hivekind-custom-software-development.png";
import ContactButton from "@/components/contact-button";

export default function CustomSoftwareDevelopmentSection() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 md:grid-rows-none grid-rows-2 md:gap-32 gap-2">
        <div>
          <div className="margin-bottom margin-xsmall">
            <h2 className="leading-tight font-bold text-4xl md:text-[2.75rem] lg:text-5xl">
              Custom software development
            </h2>
          </div>
          <p className="text-size-medium">
            If your needs extend beyond our standard services, we also offer
            custom software development engagements. Whether you need an MVP,
            feature enhancements for your product, or support to meet critical
            deadlines, we’re here to help. Reach out, and we’ll explore how we
            can support your goals.
          </p>
          <ContactButton isCenter={false} cta="Schedule a call" />
        </div>

        <StaticImage
          src={hivekindCustomSoftwareDevelopment}
          srcfallback={hivekindCustomSoftwareDevelopmentFallback}
          sizes="(max-width: 1404px) 90vw, 1264px"
          alt="Custom software development"
          className="card-large-image"
        />
      </div>
    </Section>
  );
}
