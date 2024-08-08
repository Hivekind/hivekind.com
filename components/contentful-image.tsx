"use client";

import Image from "next/image";
import { ComponentProps, useState } from "react";

type ContentfulImageProps = {
  src: string;
  format?: string;
  width: number;
} & ComponentProps<typeof Image>;

type ContentfulImageLoaderProps = {
  src: string;
  width?: number;
  format?: string;
  quality?: number | `${number}`;
};

const webploader = ({
  src,
  quality = 75,
  format = "webp",
}: ContentfulImageLoaderProps) => {
  return `${src}?&q=${quality}&fm=${format}`;
};

const fallbackloader = ({ src, quality = 75 }: ContentfulImageLoaderProps) => {
  return `${src}?&q=${quality}`;
};

export default function ContentfulImage(props: ContentfulImageProps) {
  const [error, setError] = useState<boolean>(false);
  const { width, priority, alt, src, ...rest } = props;

  return (
    <Image
      loading={priority ? undefined : "lazy"}
      loader={error ? fallbackloader : webploader}
      {...rest}
      width={width}
      src={src}
      alt={alt}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
