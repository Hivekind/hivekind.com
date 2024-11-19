import { getAllByField } from "@/lib/contentfulApi";
import { FieldsType } from "contentful";
import { TestimonialBox } from "../services/custom-software-development/testimonial-client";

export default async function TestimonialStaff() {
  const testimonials = await getAllByField({
    contentType: "testimonial",
    fields: { "fields.type[in]": "staff" },
  });

  const items = testimonials.map((item) => item.fields as FieldsType);

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
