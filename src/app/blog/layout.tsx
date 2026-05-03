import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Zing Bliss Events',
  description: 'Insights, trends, and stories from the world of luxury event planning.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
