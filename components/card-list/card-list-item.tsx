import { authorType } from "@/lib/contentfulApi";
import ContentfulImage from "../contentful-image";

export type CardListItemProps = {
  url: string;
  imageUrl: string;
  imageAltText?: string;
  topic: string;
  title: string;
  summary: string;
  author?: authorType;
};

export function CardListItem({ item }: { item: CardListItemProps }) {
  return (
    <div role="listitem" className="w-dyn-item">
      <div className="featuredblog_item">
        <a href={item.url} className="featuredblog_item-link w-inline-block">
          <div className="featuredblog_image-wrapper">
            <ContentfulImage
              src={item.imageUrl}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 28vw"
              className="featuredblog_image"
              alt={item.imageAltText || item.title}
              width={800}
              height={333}
            />
          </div>
          <div className="featuredblog_item-content">
            <div className="featuredblog_item-content-top">
              <div className="grid gap-4 justify-start">
                <div className="bg-neutral-200 rounded-full py-1 px-4 mb-4">
                  {item.topic}
                </div>
              </div>
              <div className="margin-bottom margin-xxsmall">
                <h3 blocks-non-deletable="true" className="heading-style-h5">
                  {item.title}
                </h3>
              </div>
              <div className="text-size-regular">{item.summary}</div>
            </div>
            <div className="margin-top margin-small">
              <div className="featuredblog_author-wrapper">
                <div className="featuredblog_author-image-wrapper">
                  <ContentfulImage
                    src={item.author?.profilePicture.fields.file.url || ""}
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, 90vw"
                    width={300}
                    height={300}
                    alt={item.author?.name || "Author"}
                    className="featuredblog_author-image"
                  />
                </div>
                <div className="featuredblog_author-text">
                  <div className="text-size-small text-weight-semibold">
                    {item.author?.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
