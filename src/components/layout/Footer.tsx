import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Instagram, Mail, Phone, Facebook, Twitter } from 'lucide-react';
import { BRANDS } from '@/lib/brands';
import { Link } from '@/i18n/routing';

const SECTIONS = ['about', 'brands', 'services', 'process', 'contact'] as const;

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/city hub logo.png"
                alt="City Hub"
                width={120}
                height={40}
                className="h-28 w-auto object-contain sm:h-36"
              />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              {t('footer.description')}
            </p>
            <p className="text-xs font-semibold text-brand-400">
              {t('closing.line1')} {t('closing.line2')}
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
              {t('footer.quickLinks')}
            </div>
            <ul className="space-y-2.5">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <Link
                    href={`/#${id}`}
                    className="text-sm text-white/60 transition hover:text-brand-400"
                  >
                    {t(`nav.${id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
              {t('footer.contact')}
            </div>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-brand-400 flex-none" />
                <a href="mailto:info@cityhub.eg" className="hover:text-white transition">
                  info@cityhub.eg
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-brand-400 flex-none" />
                <a href="tel:+201000000000" className="hover:text-white transition" dir="ltr">
                  +20 100 000 0000
                </a>
              </li>
              <li className="mt-5">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {t('footer.follow')}
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.instagram.com/chcd.eg?igsh=azBucmM3MngxdGxw"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-400"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1DQeSK8YcY/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row">
          <span>© {year} City Hub. {t('footer.rights')}</span>
          <span>{t('footer.madeWith')}</span>
        </div>
      </div>
    </footer>
  );
}
