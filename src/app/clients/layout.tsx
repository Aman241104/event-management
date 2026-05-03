import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clients | Zing Bliss Events',
  description: 'Our prestigious clients and partners who have trusted us with their most important moments.',
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
