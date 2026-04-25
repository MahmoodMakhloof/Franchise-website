import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

const REGION_KEYS = ['egypt', 'ksa', 'uae', 'kuwait', 'qatar', 'jordan', 'morocco', 'nigeria'] as const;

export function Stats() {
  const t = useTranslations('stats');
  const items = t.raw('items') as Array<{ value: string; label: string }>;

  return (
    <section className="section bg-gray-900 text-white">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center mb-4 text-brand-400 sm:mb-5">{t('eyebrow')}</div>
            <h2 className="h-display text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">{t('title')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:mt-5 sm:text-lg">
              {t('subtitle')}
            </p>
          </div>
        </Reveal>

        {/* Big numbers */}
        <div className="mt-12 grid grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden sm:mt-20 md:grid-cols-4">
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center justify-center border-b border-white/10 px-5 py-10 text-center sm:px-8 sm:py-14 md:border-b-0 md:border-e md:last:border-e-0">
                <div className="text-5xl font-black text-brand-400 sm:text-6xl md:text-8xl">
                  {s.value}
                </div>
                <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 sm:mt-4 sm:text-xs sm:tracking-[0.24em]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Region chips */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {REGION_KEYS.map((key) => (
              <span
                key={key}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/60 transition hover:border-brand-500/40 hover:text-brand-400"
              >
                {t(`regions.${key}`)}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
