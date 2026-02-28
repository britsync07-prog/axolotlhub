import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Breeding Genetics Calculator | Axolotl Morphs',
  description: 'Estimate possible offspring colors when breeding different axolotl morphs. Learn basic genetics and responsible breeding tips.',
  alternates: { canonical: 'https://axolotlhub.com/tools/breeding-genetics-calculator' },
};

export default function BreedingGeneticsCalculatorPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="py-16 lg:py-20 bg-gradient-to-br from-bioluminescent/10 via-water-surface to-axolotl-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-deep-abyss mb-4">Breeding Genetics Calculator</h1>
            <p className="text-lg text-deep-abyss/70 max-w-2xl">
              This guide explains how dominant and recessive traits influence axolotl morphs. A full interactive calculator can be added next.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-4 text-deep-abyss/80">
              <p><strong>Tip:</strong> Leucistic is recessive, while wild-type is dominant in many crosses.</p>
              <p>Ethical breeding matters: avoid overbreeding and always provide proper homes.</p>
              <p>We can integrate a morph-pairing calculator in a future update.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
