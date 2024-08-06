"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { memo, useState } from "react";

interface StaticImageProps {
  src: StaticImport;
  srcfallback: StaticImport;
  [key: string]: any; // For other props that might be passed
}

function loader({ src }: { src: string }) {
  return `${src}?width`; // see https://nextjs.org/docs/messages/next-image-missing-loader-width
}

function StaticImage(props: StaticImageProps) {
  const [error, setError] = useState<boolean>(false);
  const { srcfallback, ...rest } = props; // no need to pass srcfallback to next/image

  return (
    <Image
      loading={props.priority ? undefined : "lazy"}
      loader={loader}
      {...rest}
      src={error ? props.srcfallback : props.src}
      alt={props.alt}
      onError={() => setError(true)}
    />
  );
}

export default memo(StaticImage);
