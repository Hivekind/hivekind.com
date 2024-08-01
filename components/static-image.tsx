"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface StaticImageProps {
  src: string | StaticImport;
  srcfallback: string | StaticImport;
  width?: number;
  [key: string]: any; // For other props that might be passed
}

export default function CustomImage(props: StaticImageProps) {
  const width =
    typeof props.src === "object" && "width" in props.src
      ? props.src.width
      : props.width;

  const fallback = (
    typeof props.srcfallback === "object" && "src" in props.srcfallback
      ? props.srcfallback.src
      : props.srcfallback
  ).toString();

  return (
    <Image
      {...props}
      loader={({ src }) => `${src}?width=${width}`}
      src={props.src}
      alt={props.alt}
      onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
        const target = event.target as HTMLImageElement;
        target.id = fallback;
        target.srcset = fallback;
      }}
    />
  );
}
