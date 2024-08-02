import { BlogCardProps } from "./blog-card";
import Link from "next/link";
import ContentfulImage from "./contentful-image";
import ArrowSvg from "@/components/svgs/arrow-svg";

export default function BlogCardFeatured({
  slug,
  mainImageUrl,
  mainImageAltText,
  topic,
  name,
  summary,
}: BlogCardProps): JSX.Element {
  return (
    <div role="listitem" className="collection-item w-dyn-item">
      <Link href={`/blog/${slug}`} className="blog_item-link w-inline-block">
        <div className="blog_featured-item-wrapper">
          <div className="blog_featured-image-wrapper">
            <ContentfulImage
              src={mainImageUrl}
              alt={mainImageAltText}
              width={800}
              height={333}
              className="blog_image"
              priority={true}
            />
          </div>
          <div className="blog_featured-item-content background-color-white">
            <div className="blog_item-content-top">
              <div className="blog_topic-wrapper">
                <div className="blog_topic">
                  <div className="text-size-small text-weight-semibold">
                    {topic}
                  </div>
                </div>
              </div>
              <div className="blog_title-wrapper featured-article">
                <h2 className="heading-style-h4">{name}</h2>
              </div>
              <div className="text-size-regular">{summary}</div>
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
        </div>
      </Link>
    </div>
  );
}
