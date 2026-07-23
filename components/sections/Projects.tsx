'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from '@/components/providers/I18nProvider';
import { projects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { SectionReveal } from '@/components/motion/SectionReveal';
import { SectionHeader } from '@/components/ui/section-header';
import { Tag } from '@/components/ui/tag';

export function Projects() {
  const { t, locale } = useTranslation();

  return (
    <SectionReveal id="projects" className="section-spacing">
      <div className="site-container space-y-14">
        <SectionHeader title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <div className="grid gap-10">
          {[...projects].reverse().map((project) => {
            const content = project.content[locale];
            return (
              <article
                key={project.slug}
                className="card-interactive overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="project-image-wrap relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
                    <Image
                      src={project.cardImage}
                      alt={content.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                        {content.name}
                      </h3>
                      <p className="text-base leading-relaxed text-muted md:text-lg">
                        {content.shortDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild className="group">
                        <Link href={`/projects/${project.slug}`}>
                          {t('projects.viewDetail')}
                          <ArrowRight className="btn-arrow h-4 w-4" />
                        </Link>
                      </Button>
                      {project.demoUrl && (
                        <Button variant="outline" asChild>
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
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
