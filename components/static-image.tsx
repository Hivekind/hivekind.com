"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentProps, memo, useState } from "react";

type StaticImageProps = {
  src: StaticImport;
  srcfallback: StaticImport;
} & ComponentProps<typeof Image>;

function loader({ src }: { src: string }) {
  return `${src}?width`; // see https://nextjs.org/docs/messages/next-image-missing-loader-width
}

function StaticImage(props: StaticImageProps) {
  const [error, setError] = useState<boolean>(false);
  const { priority, alt, src, srcfallback, ...rest } = props;

  return (
    <Image
      loading={priority ? undefined : "lazy"}
      loader={loader}
      {...rest}
      src={error ? srcfallback : src}
      alt={alt}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}

export default memo(StaticImage);
