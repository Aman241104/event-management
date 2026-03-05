import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;
  
  // In a real app, you'd fetch event data here
  const title = id === "1" ? "The Future Tech Summit" : "Exclusive Event Archive";

  return {
    title: `${title} | Prestige Event Management`,
    description: `Detailed visual legacy and narrative for ${title}.`,
  }
}

export default function EventDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
