'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from '@/i18n/routing';

export function Hero() {
  const t = useTranslations('hero');
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden bg-white text-gray-950 selection:bg-red-600/20 selection:text-red-700"
    >
      <motion.div
        style={{ y }}
        className="relative z-10 grid min-h-[100dvh] grid-cols-1 items-center gap-8 px-5 pb-20 pt-28 sm:gap-12 sm:px-8 sm:pt-32 md:px-10 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-0 lg:pb-24 lg:pt-36 max-w-[1600px] mx-auto"
      >
        {/* ── TEXT SIDE ── */}
        <div className="lg:ps-[80px] xl:ps-[112px] lg:pe-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-3 rounded-full bg-red-50 px-4 py-2 sm:mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 sm:text-xs">
              {t('eyebrow')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[1.75rem] font-black leading-[1.4] text-gray-950 sm:text-4xl sm:leading-[1.3] md:text-[2.75rem] md:leading-[1.25] lg:text-[3.35rem] lg:leading-[1.15]"
          >
            {t('title')}
          </motion.h1>

          {/* Lead Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl space-y-4 text-[15px] font-medium leading-relaxed text-gray-600 sm:mt-8 sm:text-[17px]"
          >
            <p>{t('lead_1')}</p>
            <p>{t('lead_2')}</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-6"
          >
            <Link
              href="/#contact"
              className="group flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-gray-900/10 transition-all duration-400 hover:scale-[1.02] hover:bg-red-600 hover:shadow-2xl hover:shadow-red-600/25 sm:px-8 sm:py-4 sm:text-[15px]"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
            <Link
              href="/#brands"
              className="group flex items-center gap-2 text-sm font-bold text-gray-950 transition-colors hover:text-red-600 sm:text-[15px]"
            >
              <span className="relative pb-1">
                {t('secondaryCta')}
                <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-red-600 transition-transform duration-300 origin-left group-hover:scale-x-100 rtl:origin-right" />
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex w-fit items-stretch gap-6 border-t border-gray-200 pt-6 sm:mt-14 sm:gap-10 sm:pt-8"
          >
            {(['brands', 'cuisines', 'system'] as const).map((k) => (
              <div key={k} className="flex flex-col items-start text-start">
                <span className="text-2xl font-black tabular-nums text-gray-950 sm:text-3xl md:text-4xl">
                  {t(`stats.${k}.value`)}
                </span>
                <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-gray-500 sm:mt-2 sm:text-[11px] sm:tracking-[0.25em]">
                  {t(`stats.${k}.label`)}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── IMAGE SIDE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[320px] sm:max-w-[500px] items-center justify-center lg:max-w-[700px] lg:pe-8 lg:ps-8 mt-12 lg:mt-0"
        >
          {/* Subtle Red Ambient Glow behind logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
            <div className="h-[60%] w-[60%] rounded-full bg-red-600/10 blur-[100px]" />
          </div>

          <div className="relative w-full aspect-[1.42]">
            <Image
              src="/images/hero/cityhub-place.webp"
              alt="City Hub"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-contain"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.08))" }}
            />
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
