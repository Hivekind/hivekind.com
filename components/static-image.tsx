"use client";
// import React, { useState, useEffect } from "react";

import {
  StaticImageData,
} from "next/dist/shared/lib/get-img-props";

import type { ImageLoaderProps } from 'next/image';


import Image from "next/image";

interface StaticImageProps {
  src: StaticImageData;
  srcfallback: StaticImageData;
  priority?: boolean;
  alt?: string;
  [key: string]: any; // For other props that might be passed
}

const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
  // return `${src}?w=${width}`;
};


export default function StaticImage({
  src,
  srcfallback,
  priority = false,
  alt = "",
  ...props
}: StaticImageProps) {

  // const [error, setError] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log("useEffect ....");
  //   setError(false);
  // }, [src])

  // const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  //   console.log("onError event: ", event);

  //   if (!error) {
  //     setError(true);
  //   }
  // };

  return (
    <Image
      alt={alt}
      priority={priority}

      onError={(e) => console.error(e.target)}

      src={src}

      loader={customLoader}

      {...props}
    />
  );
}
