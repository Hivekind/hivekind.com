export function TocLinkWrapper({
  text,
  anchor,
}: {
  text: string;
  anchor: string;
}) {
  return (
    <div className="fs-toc_link-wrapper">
      <a
        href={`${anchor}`}
        className="fs-toc_link w-inline-block"
        data-cmp-ab="2"
      >
        <div fs-toc-element="link" className="text-size-tiny">
          {text}
        </div>
      </a>
      <div fs-toc-element="ix-trigger" className="fs-toc_h-trigger"></div>
    </div>
  );
}
