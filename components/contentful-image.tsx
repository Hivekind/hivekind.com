"use client";

import { ImageLoader } from "next/dist/client/image-component";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
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

const loader = ({ src, quality, format }: ContentfulImageLoaderProps) => {
  return `${src}?&q=${quality}&fm=${format}`;
};

const webploader = ({ src, quality = 75 }: ContentfulImageLoaderProps) => {
  return loader({ src, quality, format: "webp" });
};

const jpegloader = ({ src, quality = 75 }: ContentfulImageLoaderProps) => {
  return loader({ src, quality, format: "png&fl=png8" });
};

export default function ContentfulImage(props: ContentfulImageProps) {
  const [error, setError] = useState<boolean>(false);
  const { width, priority, alt, src, ...rest } = props;

  return (
    <Image
      loading={priority ? undefined : "lazy"}
      loader={error ? jpegloader : webploader}
      {...rest}
      width={width}
      src={src}
      alt={alt}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
