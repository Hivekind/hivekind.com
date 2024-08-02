import StaticImage from "@/components/static-image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

type CardProps = {
  image: string | StaticImport;
  imageFallback: string | StaticImport;
  alt: string;
  heading: string;
  body: string;
  link?: string;
};

function Card({ image, imageFallback, alt, heading, body }: CardProps) {
  return (
    <div>
      <div className="margin-bottom margin-medium">
        <div>
          <StaticImage
            src={image}
            srcfallback={imageFallback}
            sizes="(max-width: 767px) 90vw, 43vw"
            alt={alt}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="margin-bottom margin-small">
        <h3 className="heading-style-h4">{heading}</h3>
      </div>
      <p>{body}</p>
    </div>
  );
}

export default function ServiceItemCard(props: CardProps) {
  return props.link ? (
    <Link href={props.link} className="service-link w-inline-block">
      <Card {...props} />
    </Link>
  ) : (
    <Card {...props} />
  );
}
