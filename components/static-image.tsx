"use client";
import React, { useState, useEffect } from "react";

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

  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <Image
      alt={alt}
      priority={priority}

      onError={() => setError(true)}
      src={error ? srcfallback : src}
      loader={customLoader}

      {...props}
    />
  );
}
