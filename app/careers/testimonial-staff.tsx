import { getAllByField } from "@/lib/contentfulApi";
import { FieldsType } from "contentful";
import ContentfulImage from "@/components/contentful-image";

export default async function TestimonialStaff() {
  const testimonials = await getAllByField({
    contentType: "testimonial",
    fields: { "fields.type[in]": "staff" },
  });

  const items = testimonials.map((item) => item.fields as FieldsType);

  function TestimonialBox({
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

  return (
    <>
      {items.map((item) => (
        <TestimonialBox
          key={item.name}
          name={item.name}
          title={item.title}
          quote={item.quote}
          image={item.image?.fields.file.url}
        />
      ))}
    </>
  );
}
