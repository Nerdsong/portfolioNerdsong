'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, Download } from 'lucide-react';
import { useTranslation } from '@/components/providers/I18nProvider';
import type { Project } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';

type ProjectDetailProps = {
  project: Project;
};

const linkLabels: Record<string, { es: string; en: string }> = {
  demo: { es: 'Demo', en: 'Demo' },
  github: { es: 'Repositorio', en: 'Repository' },
  excel1: { es: 'Excel demo 1', en: 'Excel demo 1' },
  excel2: { es: 'Excel demo 2', en: 'Excel demo 2' },
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { t, locale } = useTranslation();
  const content = project.content[locale];
  const [description, setDescription] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const url = project.longDescription[locale];

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed');
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setDescription(text);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [project, locale]);

  const paragraphs = description
    ?.split('.  ')
    .filter(Boolean)
    .map((p) => `${p.trim()}.`);

  return (
    <article className="section-spacing">
      <div className="site-container max-w-4xl space-y-12">
        <Button variant="ghost" asChild className="group pl-0 text-muted hover:text-foreground">
          <Link href="/#projects">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t('projects.backToList')}
          </Link>
        </Button>

        <header className="space-y-5">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{content.name}</h1>
          <p className="text-lg text-muted md:text-xl">{content.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <div className="space-y-4">
          <div className="project-image-wrap relative aspect-video border border-white/10">
            <Image
              src={project.images[activeImage]?.src ?? project.cardImage}
              alt={project.images[activeImage]?.alt ?? content.name}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          {project.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`${content.name} — image ${i + 1}`}
                  aria-pressed={i === activeImage}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-image border transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    i === activeImage ? 'border-primary shadow-glow-sm' : 'border-white/10'
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="96px" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="card-interactive space-y-5 p-8 md:p-10">
          {error && <p className="text-muted">{t('projects.descriptionError')}</p>}
          {!error && !description && <p className="text-muted">{t('projects.loading')}</p>}
          {paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.demoUrl && (
            <Button asChild>
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                {t('projects.demo')}
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="outline" asChild>
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                {t('projects.github')}
              </Link>
            </Button>
          )}
          {project.links
            .filter((l) => l.type === 'file')
            .map((link) => (
              <Button key={link.url} variant="outline" asChild>
                <Link href={link.url} download={link.downloadName}>
                  <Download className="h-4 w-4" />
                  {linkLabels[link.labelKey]?.[locale] ?? link.labelKey}
                </Link>
              </Button>
            ))}
        </div>
      </div>
    </article>
  );
}
