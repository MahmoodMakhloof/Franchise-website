'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const HERO_PRODUCTS = [
  { key: 'jinzo',       image: '/images/jinzo/img-p7-01.webp',            tint: '#fef3e7' },
  { key: 'haret',       image: '/images/haret/img-p11-01.webp',           tint: '#f3e9dc' },
  { key: 'stravo',      image: '/images/stravo/03.webp',                   tint: '#fde2df' },
  { key: 'shakencake',  image: '/images/shakencake/sc-20.webp',            tint: '#fce7f3' },
  { key: 'tokyotreats', image: '/images/tokyotreats/tokyo-06.webp',        tint: '#fee2e2' },
  { key: 'ktown',       image: '/images/ktown/korian-fried-chicken.webp',  tint: '#fef3c7' },
] as const;

function WordReveal({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span
        className="inline-block pb-2 pt-2 rtl:pb-6 rtl:pt-3"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}


export function Hero() {
  const t = useTranslations('hero');
  const tBrands = useTranslations('brands.items');
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
          {/* Top rule + eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-5 sm:mb-10"
          >
            <span className="h-[2px] w-10 bg-red-600 sm:w-16" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-600 sm:text-xs">
              {t('eyebrow')}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="h-display font-black leading-[0.92] tracking-tight text-gray-950 text-[2.6rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6.2rem] space-y-1 rtl:space-y-4 sm:rtl:space-y-6">
            <div className="block"><WordReveal text={t('title.line1')} delay={0.1} /></div>
            <div className="block sm:ms-4 lg:ms-8"><WordReveal text={t('title.line2')} delay={0.2} /></div>
            <div className="relative block sm:ms-10 lg:ms-16">
              <WordReveal
                text={t('title.line3')}
                delay={0.3}
                className="text-red-600"
              />
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[10%] start-0 block h-[4px] w-14 origin-[start] rounded-full bg-red-600 sm:h-[6px] sm:w-24"
                aria-hidden
              />
            </div>
          </h1>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:mt-8 sm:text-base md:text-lg font-medium"
          >
            {t('lead')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-6"
          >
            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-gray-900/10 transition-all duration-400 hover:scale-[1.02] hover:bg-red-600 hover:shadow-2xl hover:shadow-red-600/25 sm:px-8 sm:py-4 sm:text-[15px]"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
            </a>
            <a
              href="#brands"
              className="group flex items-center gap-2 text-sm font-bold text-gray-950 transition-colors hover:text-red-600 sm:text-[15px]"
            >
              <span className="relative pb-1">
                {t('secondaryCta')}
                <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-red-600 transition-transform duration-300 origin-left group-hover:scale-x-100 rtl:origin-right" />
              </span>
            </a>
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
        <div className="relative mx-auto hidden h-[500px] w-full max-w-[600px] sm:block sm:h-[600px] md:h-[650px] lg:h-[750px] lg:max-w-[650px] lg:pe-12 lg:ps-6">
          {/* Subtle Red Ambient Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
            <div className="h-[50%] w-[50%] rounded-full bg-red-600/8 blur-[100px]" />
          </div>

          {HERO_PRODUCTS.map((p, i) => {
            const name = tBrands(`${p.key}.name`);

            const layouts = [
              { pos: 'top-[2%] end-[5%]',       size: 'h-[30%] w-[48%]', rotate: -2, zIndex: 10 },
              { pos: 'top-[16%] start-[2%]',    size: 'h-[26%] w-[42%]', rotate:  2, zIndex: 20 },
              { pos: 'top-[36%] end-[8%]',      size: 'h-[24%] w-[46%]', rotate: -1, zIndex: 30 },
              { pos: 'top-[50%] start-[5%]',    size: 'h-[28%] w-[48%]', rotate:  3, zIndex: 40 },
              { pos: 'bottom-[6%] end-[12%]',   size: 'h-[24%] w-[44%]', rotate: -2, zIndex: 50 },
              { pos: 'bottom-[0%] start-[6%]',  size: 'h-[26%] w-[42%]', rotate:  1, zIndex: 60 },
            ] as const;
            const L = layouts[i];

            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: L.rotate }}
                transition={{ delay: 0.3 + i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  rotate: 0,
                  scale: 1.04,
                  zIndex: 100,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                className={`absolute ${L.pos} ${L.size} overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-950/15 ring-1 ring-black/5 bg-white cursor-pointer`}
                style={{ zIndex: L.zIndex }}
              >
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-500 hover:opacity-0" />
                <Image
                  src={p.image}
                  alt={name}
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  priority={i < 3}
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.08]"
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── MOBILE IMAGE GRID ── */}
        <div className="grid grid-cols-3 gap-3 sm:hidden">
          {HERO_PRODUCTS.slice(0, 3).map((p, i) => {
            const name = tBrands(`${p.key}.name`);
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5"
              >
                <Image
                  src={p.image}
                  alt={name}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </section>
  );
}
