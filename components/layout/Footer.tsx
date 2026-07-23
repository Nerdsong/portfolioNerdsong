'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '@/components/providers/I18nProvider';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 py-14">
      <div className="site-container flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-bold">Nelson Adarmes</p>
          <p className="mt-2 text-sm text-muted">{t('footer.copyright')}</p>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="https://github.com/Nerdsong"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nerdsong/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href={`mailto:${t('contact.email')}`}
            className="social-link"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
