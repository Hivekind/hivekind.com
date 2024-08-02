"use client";

import Image from "next/image";

interface ContentfulImageProps {
  src: string;
  width?: number;
  quality?: number;
  format?: string;
  [key: string]: any; // For other props that might be passed
}

const contentfulLoader = ({
  src,
  width,
  quality,
  format,
}: ContentfulImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}&fm=${format || "webp"}`;
};

export default function ContentfulImage(props: ContentfulImageProps) {
  const fallbackImage = contentfulLoader({
    src: props.src,
    width: props.width,
    quality: props.quality,
    format: "jpg",
  });

  return (
    <Image
      alt={props.alt}
      loader={contentfulLoader}
      {...props}
      onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
        const target = event.target as HTMLImageElement;
        target.src = fallbackImage;
        target.srcset = fallbackImage;
      }}
    />
  );
}
