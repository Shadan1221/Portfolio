"use client";

import dynamic from "next/dynamic";

// Lazy load non-essential components with ssr: false
const SmoothScroll = dynamic(() => import("@/components/providers/SmoothScroll"), {
  ssr: false,
  loading: () => null,
});

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
  loading: () => null,
});

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}
