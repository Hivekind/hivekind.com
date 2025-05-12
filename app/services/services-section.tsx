import { CardList } from "@/components/card-list/card-list";
import Section from "@/components/section";
import { servicesContent } from "@/app/data/services";

export default function ServicesSection() {
  const { hero, services } = servicesContent;

  return (
    <Section title={hero.title} description={hero.description}>
      <CardList
        cols={services.length}
        items={services.map((service) => ({
          title: service.title,
          summary: service.description,
          url: service.url,
          cta: service.url && "Learn more",
        }))}
      />
    </Section>
  );
}
