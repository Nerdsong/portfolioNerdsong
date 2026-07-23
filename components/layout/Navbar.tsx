'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/components/providers/I18nProvider';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollY } from '@/hooks/useScrollY';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { key: 'nav.home', section: 'hero' },
  { key: 'nav.about', section: 'about' },
  { key: 'nav.stack', section: 'stack' },
  { key: 'nav.projects', section: 'projects' },
  { key: 'nav.experience', section: 'experience' },
  { key: 'nav.contact', section: 'contact' },
] as const;

export function Navbar() {
  const { t, locale, setLocale } = useTranslation();
  const pathname = usePathname();
  const activeSection = useActiveSection();
  const scrollY = useScrollY();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 24;

  const toggleLocale = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={cn(
          'site-container !px-4 rounded-card border backdrop-blur-2xl transition-all duration-300 md:!px-6',
          scrolled
            ? 'border-white/15 bg-[rgba(6,6,10,0.92)] shadow-[0_8px_40px_rgba(0,0,0,0.45)]'
            : 'border-white/10 bg-navbar shadow-[0_8px_32px_rgba(0,0,0,0.2)]',
        )}
      >
        <div className="flex h-14 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-title text-foreground"
          >
            Nelson Adarmes
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.section}
                href={`/#${item.section}`}
                className="nav-link-item"
                data-active={isHome && activeSection === item.section}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={toggleLocale}
              aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <nav
          id="mobile-nav-drawer"
          className={cn(
            'overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden',
            mobileOpen ? 'max-h-80 py-3' : 'max-h-0 border-t-0',
          )}
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.section}
                href={`/#${item.section}`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'nav-link-item rounded-button px-3 py-2.5 text-sm',
                  isHome && activeSection === item.section && 'text-foreground',
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
