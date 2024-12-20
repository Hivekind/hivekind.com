import { ResolvingMetadata } from "next";

export function getPathnameFromState(state: ResolvingMetadata): string {
  const resources = Object.getOwnPropertySymbols(state)
    .map((item) => state[item as keyof ResolvingMetadata])
    .filter(Boolean);

  const kResourceStore = resources.find((resource) =>
    resource.hasOwnProperty?.("urlPathname")
  ) as unknown as { urlPathname: string } | undefined;

  const url = new URL(kResourceStore?.urlPathname ?? "", "http://localhost");

  return url.pathname;
}
