'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { useTranslation } from '@/components/providers/I18nProvider';
import { SectionHeader } from '@/components/ui/section-header';
import { SectionReveal } from '@/components/motion/SectionReveal';
import { ContactForm } from '@/components/sections/ContactForm';
import handsTyping from '@/assets/lottie/handsTyping.json';

export function Contact() {
  const { t } = useTranslation();
  const [animation, setAnimation] = useState<object>(handsTyping);
  const [loop, setLoop] = useState(true);

  return (
    <SectionReveal id="contact" className="section-spacing">
      <div className="site-container grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-8">
          <SectionHeader
            title={t('contact.title')}
            subtitle={t('contact.description')}
          />
          <div className="flex flex-col gap-4">
            <Link
              href="https://www.linkedin.com/in/nerdsong/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/Nerdsong"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Link>
            <Link href={`mailto:${t('contact.email')}`} className="social-link">
              <Mail className="h-5 w-5" />
              {t('contact.email')}
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center pt-4 lg:min-h-[280px]">
            <Lottie
              animationData={animation}
              loop={loop}
              className="h-full w-full max-h-[320px] max-w-md"
              aria-hidden="true"
            />
          </div>
        </div>

        <ContactForm onAnimationChange={setAnimation} onLoopChange={setLoop} />
      </div>
    </SectionReveal>
  );
}
