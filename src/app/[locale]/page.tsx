import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Brands } from '@/sections/Brands';
import { Services } from '@/sections/Services';
import { Gallery } from '@/sections/Gallery';
import { Stats } from '@/sections/Stats';
import { Why } from '@/sections/Why';
import { Process } from '@/sections/Process';
import { Vision } from '@/sections/Vision';
import { Support } from '@/sections/Support';
import { Contact } from '@/sections/Contact';
import { ClosingBanner } from '@/sections/ClosingBanner';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <Services />
        <Gallery />
        <Stats />
        <Why />
        <Process />
        <Vision />
        <Support />
        <Contact />
        <ClosingBanner />
      </main>
      <Footer />
    </>
  );
}
