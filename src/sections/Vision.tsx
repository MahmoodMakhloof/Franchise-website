'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Vision() {
  const t = useTranslations('vision');

  return (
    <section className="relative overflow-hidden bg-brand-500 py-20 sm:py-28 md:py-32 lg:py-36">
      {/* Decorative large ghost text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none text-[12rem] font-black leading-none text-white/[0.04] sm:text-[18rem] md:text-[22rem]">
          &ldquo;
        </span>
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="mb-5 inline-flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
            <span className="h-px w-6 bg-white/30" />
            {t('eyebrow')}
            <span className="h-px w-6 bg-white/30" />
          </span>

          <blockquote className="font-display text-2xl font-black leading-[1.25] text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {t('title')}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
