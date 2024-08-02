import Link from "next/link";
import ContentfulImage from "./contentful-image";
import ArrowSvg from "@/components/svgs/arrow-svg";

export type BlogCardProps = {
  slug: string;
  mainImageUrl: string;
  mainImageAltText: string;
  topic: string;
  name: string;
  summary?: string;
};

export default function BlogCard({
  slug,
  mainImageUrl,
  mainImageAltText,
  topic,
  name,
}: BlogCardProps): JSX.Element {
  return (
    <div role="listitem" className="w-dyn-item">
      <Link href={`/blog/${slug}`} className="blog_item-link w-inline-block">
        <div className="blog_image-wrapper">
          <ContentfulImage
            src={mainImageUrl}
            alt={mainImageAltText}
            width={800}
            height={333}
            className="blog_image"
            loading="lazy"
          />
        </div>
        <div className="blog_item-content background-color-white">
          <div className="blog_item-content-top">
            <div className="blog_topic-wrapper">
              <div className="blog_topic">
                <div className="text-size-small text-weight-semibold">
                  {topic}
                </div>
              </div>
            </div>
            <div className="blog_title-wrapper">
              <h2 className="heading-style-h5">{name}</h2>
            </div>
          </div>
          <div className="blog_button-wrapper">
            <div className="button is-link is-icon">
              <div>Read more</div>
              <div className="icon-embed-xxsmall w-embed">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
