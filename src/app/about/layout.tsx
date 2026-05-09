import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Agency Legacy",
  description: "Zing Bliss Events — Ahmedabad's premier event architects. A legacy of absolute fidelity and emotional storytelling in high-end event design.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
