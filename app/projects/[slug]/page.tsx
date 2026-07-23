import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { getProjectBySlug, projects } from '@/lib/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  return {
    title: project.content.es.name,
    description: project.content.es.shortDescription,
    openGraph: {
      title: project.content.es.name,
      description: project.content.es.shortDescription,
      images: [{ url: project.cardImage }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
