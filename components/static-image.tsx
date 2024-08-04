"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface StaticImageProps {
  src: string | StaticImport;
  srcfallback: string | StaticImport;
  width?: number;
  [key: string]: any; // For other props that might be passed
}

export default function StaticImage(props: StaticImageProps) {
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
      loading={props.priority ? undefined : "lazy"}
      loader={({ src }: { src: string }) => `${src}?width=${width}`}
      {...props}
      src={props.src}
      alt={props.alt}
      onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
        const target = event.target as HTMLImageElement;
        target.src = fallback;
        target.srcset = fallback;
      }}
    />
  );
}
