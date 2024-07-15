import Link from "next/link";

export function TocLinkWrapper({
  text,
  anchor,
}: {
  text: string;
  anchor: string;
}) {
  return (
    <div className="fs-toc_link-wrapper">
      <Link href={`${anchor}`} className="fs-toc_link w-inline-block">
        <div fs-toc-element="link" className="text-size-tiny">
          {text}
        </div>
      </Link>
    </div>
  );
}
