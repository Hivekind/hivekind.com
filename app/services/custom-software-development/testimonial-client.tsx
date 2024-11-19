import { getByField } from "@/lib/contentfulApi";
import { FieldsType } from "contentful";
import ContentfulImage from "@/components/contentful-image";

export default async function TestimonialClient() {
  const tony = (await getByField({
    contentType: "testimonial",
    fields: { "fields.name[in]": "Tony Jones" },
  })) as FieldsType;

  const jay = (await getByField({
    contentType: "testimonial",
    fields: { "fields.name[in]": "Jayasimhan Masilamani" },
  })) as FieldsType;

  return (
    <>
      {[tony, jay].map((item) => (
        <TestimonialBox
          key={item.sys.id}
          name={item.fields.name}
          title={item.fields.title}
          quote={item.fields.quote}
          image={item.fields.image?.fields.file.url}
        />
      ))}
    </>
  );
}

export function TestimonialBox({
  name,
  title,
  quote,
  image,
}: {
  name: string;
  title: string;
  quote: string;
  image: string;
}) {
  return (
    <div className="staff-testimonial_content">
      <div className="margin-vertical margin-medium">
        <div className="heading-style-h6">&quot;{quote}&quot;</div>
      </div>
      <div className="testimonial_staff">
        <div className="staff-testimonial_image-wrapper">
          <ContentfulImage
            src={image}
            alt={name}
            className="testimonial_staff-image"
            width={400}
            height={400}
          />
        </div>
        <div className="testimonial_staff-info">
          <p className="text-weight-semibold">
            <strong>{name}</strong>
          </p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
