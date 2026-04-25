'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Cog,
  BarChart3,
  Rocket,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface ServiceCard {
  icon: LucideIcon;
  accent: string;
  accentLight: string;
  dark: boolean;
}

const SERVICE_CONFIG: ServiceCard[] = [
  { icon: TrendingUp, accent: '#ff2d87', accentLight: 'rgba(255,45,135,0.08)', dark: false },
  { icon: Cog, accent: '#e3392e', accentLight: 'rgba(227,57,46,0.08)', dark: true },
  { icon: BarChart3, accent: '#b5533c', accentLight: 'rgba(181,83,60,0.08)', dark: false },
  { icon: Rocket, accent: '#dc2626', accentLight: 'rgba(220,38,38,0.08)', dark: true },
  { icon: MapPin, accent: '#c4382b', accentLight: 'rgba(196,56,43,0.08)', dark: false },
];

export function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <section id="services" className="section bg-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8">

        {/* ── Centered header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-5 inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-600 sm:text-xs">
              {t('eyebrow')}
            </span>
            <span className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('title')}</h2>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-500 sm:mt-5 sm:text-base sm:tracking-[0.24em]">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* ── Cards grid: 3 top + 2 bottom centered ── */}
        <div className="mx-auto max-w-6xl">
          {/* Top row: 3 cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, 3).map((item, i) => (
              <ServiceCardItem key={item.title} item={item} index={i} config={SERVICE_CONFIG[i]} />
            ))}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.666%+0.625rem)]">
            {items.slice(3, 5).map((item, i) => (
              <ServiceCardItem key={item.title} item={item} index={i + 3} config={SERVICE_CONFIG[i + 3]} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ServiceCardItem({
  item,
  index,
  config,
}: {
  item: { title: string; description: string };
  index: number;
  config: ServiceCard;
}) {
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.06 * index, ease: EASE }}
      className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-10 lg:p-12 ${
        config.dark
          ? 'bg-gray-900 text-white'
          : 'border border-gray-100 bg-white text-gray-900 hover:border-gray-200'
      }`}
    >
      {/* Ghost icon background */}
      <Icon
        className={`absolute -end-6 -bottom-6 h-40 w-40 transition-transform duration-700 group-hover:scale-110 sm:h-48 sm:w-48 ${
          config.dark ? 'text-white/[0.04]' : 'text-gray-900/[0.03]'
        }`}
        strokeWidth={1}
      />

      {/* Top accent bar */}
      <div
        className="mb-6 h-[3px] w-8 origin-start rounded-full transition-all duration-500 group-hover:w-14"
        style={{ background: config.accent }}
      />

      {/* Number + Icon row */}
      <div className="relative mb-6 flex items-center justify-between sm:mb-8">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 sm:h-16 sm:w-16"
          style={{
            background: config.dark ? 'rgba(255,255,255,0.08)' : config.accentLight,
          }}
        >
          <Icon
            className="h-7 w-7 sm:h-8 sm:w-8"
            style={{ color: config.dark ? '#fff' : config.accent }}
          />
        </div>
        <span
          className={`text-5xl font-black sm:text-6xl ${
            config.dark ? 'text-white/[0.08]' : 'text-gray-900/[0.06]'
          }`}
        >
          0{index + 1}
        </span>
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className={`text-xl font-black leading-tight sm:text-2xl lg:text-[1.65rem] ${
            config.dark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`mt-3 text-[15px] leading-relaxed sm:text-base ${
            config.dark ? 'text-white/60' : 'text-gray-500'
          }`}
        >
          {item.description}
        </p>
      </div>

      {/* Bottom hover line */}
      <div
        className="absolute inset-x-0 bottom-0 h-[3px] origin-start scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
        style={{ background: config.accent }}
      />
    </motion.div>
  );
}
