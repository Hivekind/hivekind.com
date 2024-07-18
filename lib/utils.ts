import { ResolvingMetadata } from "next";

export function getPathnameFromState(state: ResolvingMetadata): string {
  const kResourceStore = Object.getOwnPropertySymbols(state)
    .map((item) => state[item as keyof ResolvingMetadata])
    .find((state) => state?.hasOwnProperty?.("urlPathname"));

  const url = new URL(
    (kResourceStore as unknown as { urlPathname: string })?.urlPathname ?? "",
    "http://localhost"
  );

  return url.pathname;
}
