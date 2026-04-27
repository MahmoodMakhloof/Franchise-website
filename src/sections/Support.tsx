'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Wrench,
  Megaphone,
  BarChart3,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const SUPPORT_ICONS: LucideIcon[] = [
  MessageCircle,
  Wrench,
  Megaphone,
  BarChart3,
  TrendingUp,
];

export function Support() {
  const t = useTranslations('support');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 sm:py-28 md:py-32 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 md:px-10">

        {/* ── Header — centered ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400 sm:text-xs">
              {t('eyebrow')}
            </span>
            <span className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="h-display text-3xl leading-snug text-white sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
        </motion.div>

        {/* ── Items — simple centered list ── */}
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = SUPPORT_ICONS[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: EASE }}
                className="flex items-start gap-4 sm:gap-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-brand-400 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/40 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
