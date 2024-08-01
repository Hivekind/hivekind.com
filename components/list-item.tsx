import React from "react";
import CustomImage from "./custom-image";
import "@/styles/work.css";
import ArrowSvg from "@/components/svgs/arrow-svg";

interface ListItemProps {
  url: string;
  imgSrc: string;
  imgSrcSet?: string;
  client: string;
  title: string;
  description: string;
}

const ListItem = ({
  url,
  imgSrc,
  client,
  title,
  description,
}: ListItemProps) => {
  return (
    <div role="listitem" className="w-dyn-item">
      <div className="featured-work_item">
        <a href={url} className="featured-work_item-link w-inline-block">
          <div className="featured-work_image-wrapper round-corner-top">
            <CustomImage
              src={imgSrc}
              alt=""
              sizes="(max-width: 767px) 90vw, 43vw"
              width={616}
              height={438}
              loading="lazy"
              className="featured-work_image"
            />
          </div>
          <div className="featured-work_item-content background-color-white round-corner-bottom">
            <div className="work_item-content-top">
              <div className="work_meta-wrapper">
                <div className="work_client">
                  <div className="text-size-small text-weight-semibold">
                    {client}
                  </div>
                </div>
              </div>
              <div className="work_title-wrapper">
                <h2 className="heading-style-h5">{title}</h2>
              </div>
              <div className="text-size-regular">{description}</div>
            </div>
            <div className="work_button-wrapper">
              <div className="button is-link is-icon">
                <div>Read more</div>
                <div className="icon-embed-xxsmall w-embed">
                  <ArrowSvg />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ListItem;
