import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Archive | Prestige Event Portfolio",
  description: "Explore our curated collection of global summits, private celebrations, and immersive stage productions.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
