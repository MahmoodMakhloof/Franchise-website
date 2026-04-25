'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Lightbulb,
  Wrench,
  Cog,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const FLOW_ICONS: LucideIcon[] = [Lightbulb, Wrench, Cog, Rocket];

export function About() {
  const t = useTranslations('about');
  const paragraphs = t.raw('paragraphs') as string[];
  const flow = t.raw('flow') as Array<{ label: string; sub: string }>;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#faf7f2] py-20 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10">

        {/* ── Two-column: text left + overlapped cards right ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-brand-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-600 sm:text-xs">
                {t('eyebrow')}
              </span>
            </div>
            <h2 className="h-display text-3xl leading-[1.15] text-gray-900 sm:text-4xl md:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-gray-500 sm:text-base md:text-[17px]">
              {paragraphs[0]}
            </p>
            <a
              href="#brands"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors hover:text-brand-500"
            >
              <span className="relative pb-0.5">
                {t('cta')}
                <span className="absolute inset-x-0 bottom-0 h-px bg-gray-900 transition-colors duration-300 group-hover:bg-brand-500" />
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </motion.div>

          {/* Right: overlapped visa-style cards */}
          <div className="relative h-[420px] sm:h-[480px] md:h-[520px]">
            {flow.map((step, i) => {
              const Icon = FLOW_ICONS[i];
              const isRed = i % 2 !== 0;
              const rotation = ['-4deg', '2deg', '-2deg', '3deg'][i];
              const topOffset = i * 80;

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 60, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: Number(rotation.replace('deg', '')) }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: EASE }}
                  whileHover={{ scale: 1.04, rotate: 0, zIndex: 50 }}
                  className="absolute start-0 end-0 cursor-default"
                  style={{
                    top: `${topOffset}px`,
                    zIndex: 10 + i,
                    marginInlineStart: `${i * 20}px`,
                  }}
                >
                  {/* Card — visa/credit-card aspect ratio */}
                  <div
                    className={`relative aspect-[1.586/1] w-full max-w-[420px] overflow-hidden rounded-2xl p-6 shadow-2xl sm:rounded-3xl sm:p-8 ${
                      isRed
                        ? 'bg-gradient-to-br from-brand-500 to-brand-600'
                        : 'bg-gradient-to-br from-gray-900 to-gray-950'
                    }`}
                  >
                    {/* Ghost number */}
                    <span
                      className={`absolute end-6 top-4 text-[72px] font-black leading-none sm:end-8 sm:top-5 sm:text-[88px] ${
                        isRed ? 'text-white/10' : 'text-white/[0.05]'
                      }`}
                    >
                      0{i + 1}
                    </span>

                    {/* Top: icon */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 ${
                        isRed ? 'bg-white/15' : 'bg-white/[0.07]'
                      }`}
                    >
                      <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                    </div>

                    {/* Bottom: text pinned to bottom */}
                    <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                      <h3 className="text-xl font-black text-white sm:text-2xl">
                        {step.label}
                      </h3>
                      <p
                        className={`mt-1 text-sm sm:text-base ${
                          isRed ? 'text-white/60' : 'text-white/40'
                        }`}
                      >
                        {step.sub}
                      </p>
                    </div>

                    {/* Chip decoration (like a visa chip) */}
                    <div
                      className={`absolute start-6 top-[52%] h-8 w-10 rounded-md sm:start-8 sm:h-9 sm:w-11 ${
                        isRed ? 'bg-white/10' : 'bg-white/[0.05]'
                      }`}
                    >
                      <div
                        className={`absolute inset-x-1.5 top-1/2 h-px ${
                          isRed ? 'bg-white/15' : 'bg-white/10'
                        }`}
                      />
                      <div
                        className={`absolute inset-y-1.5 start-1/2 w-px ${
                          isRed ? 'bg-white/15' : 'bg-white/10'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
