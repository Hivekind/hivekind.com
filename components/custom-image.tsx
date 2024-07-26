"use client";

import Image from "next/image";

interface CustomImageProps {
  src: string;
  width?: number;
  quality?: number;
  [key: string]: any; // For other props that might be passed
}

const customLoader = ({ src, width, quality }: CustomImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function CustomImage(props: CustomImageProps) {
  return <Image alt={props.alt} loader={customLoader} {...props} />;
}
