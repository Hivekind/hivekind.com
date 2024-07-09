import React from "react";

interface ListItemProps {
  url: string;
  imgSrc: string;
  imgSrcSet: string;
  client: string;
  title: string;
  description: string;
}

const ListItem = ({ url, imgSrc, imgSrcSet, client, title, description }: ListItemProps) => {
  return (
    <div role="listitem" className="w-dyn-item">
      <div className="featured-work_item">
        <a href={url} className="featured-work_item-link w-inline-block">
          <div className="featured-work_image-wrapper round-corner-top">
            <img
              alt=""
              loading="lazy"
              src={imgSrc}
              sizes="(max-width: 767px) 90vw, 43vw"
              srcSet={imgSrcSet}
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
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="CurrentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
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
