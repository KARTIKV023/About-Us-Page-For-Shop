
export const HEADER_HEIGHT = { mobile: 56, desktop: 64 } as const;

export default function HeaderSpacer() {
  return <div aria-hidden="true" className="h-14 shrink-0 lg:h-16 bg-blue-600" />;
}