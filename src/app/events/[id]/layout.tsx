import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = (await params).id;
  
  // In a real app, you'd fetch event data here
  const title = id === "1" ? "The Future Tech Summit" : "Exclusive Event Archive";

  return {
    title: `${title}`,
    description: `Detailed visual legacy and narrative for ${title} by Zing Bliss Events.`,
  }
}

export default function EventDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
