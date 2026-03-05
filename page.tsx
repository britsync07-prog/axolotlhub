import { Metadata } from 'next';
import { HeroSection } from '@/components/marketing/HeroSection';
import { DiscoverySection } from '@/components/marketing/DiscoverySection';
import { DashboardSection } from '@/components/marketing/DashboardSection';
import { SocialProofSection } from '@/components/marketing/SocialProofSection';
import { FreshnessSection } from '@/components/marketing/FreshnessSection';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { WebSiteSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'AxolotlHub | Complete Axolotl Care Guide, Facts & Resources',
  description: 'The ultimate resource for axolotl care, facts, morphs, and breeding. Daily fresh axolotl content, interactive tools, and expert guidance for keepers worldwide.',
  alternates: {
    canonical: 'https://axolotlhub.pages.dev',
  },
  openGraph: {
    title: 'AxolotlHub | Complete Axolotl Care Guide, Facts & Resources',
    description: 'The ultimate resource for axolotl care, facts, morphs, and breeding. Daily fresh content and interactive tools.',
    url: 'https://axolotlhub.pages.dev',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <JsonLd data={WebSiteSchema} />
        <HeroSection />
        <DiscoverySection />
        <DashboardSection />
        <SocialProofSection />
        <FreshnessSection />
      </main>
      <Footer />
    </>
  );
}
