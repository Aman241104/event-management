import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Owner Portal | Prestige Exclusivity",
  description: "Minimalist overview of the high-fidelity event portfolio and prestige metrics.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
