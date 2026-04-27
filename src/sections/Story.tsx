'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Flag, Network, ShieldCheck } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Story() {
  const t = useTranslations('story');
  const paragraphs = t.raw('paragraphs') as string[];

  const ICONS = [Flag, Network, ShieldCheck];

  return (
    <section id="story" className="relative overflow-hidden bg-white py-20 sm:py-28 md:py-32 lg:py-36">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 start-1/2 -ml-[50vw] h-[1px] w-[100vw] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          
          {/* Left: Sticky Title */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="lg:sticky lg:top-32"
            >
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="h-px w-8 bg-brand-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-600 sm:text-xs">
                  {t('eyebrow')}
                </span>
              </div>
              <h2 className="h-display mb-5 text-3xl leading-snug text-gray-900 sm:text-4xl md:text-5xl">
                {t('title')}
              </h2>
              <p className="text-xl font-medium text-gray-500 sm:text-2xl">
                {t('subtitle')}
              </p>
            </motion.div>
          </div>

          {/* Right: Timeline Cards */}
          <div className="relative lg:col-span-7">
            {/* The vertical timeline line */}
            <div className="absolute bottom-0 start-4 top-0 w-px bg-gray-200 sm:start-6" />

            <div className="flex flex-col gap-10 sm:gap-12">
              {paragraphs.map((desc, i) => {
                const Icon = ICONS[i] || ShieldCheck;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: i * 0.15, duration: 0.7, ease: EASE }}
                    className="group relative flex items-start gap-6 sm:gap-10"
                  >
                    {/* The Dot / Icon container */}
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-brand-500 shadow-sm sm:h-12 sm:w-12 sm:border-[4px]">
                      <div className="h-2 w-2 rounded-full bg-white sm:hidden" />
                      <Icon className="hidden h-5 w-5 text-white sm:block" />
                    </div>

                    {/* The Card */}
                    <div className="flex-1 rounded-2xl border border-gray-100 bg-[#faf7f2] p-6 shadow-sm transition-all duration-300 hover:border-brand-200 hover:bg-white hover:shadow-md sm:p-8 xl:p-10">
                      <p className="text-[15px] leading-relaxed text-gray-600 sm:text-[17px]">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
