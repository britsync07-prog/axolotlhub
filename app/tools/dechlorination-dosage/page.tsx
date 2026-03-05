import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Dechlorination Dosage Calculator | AxolotlHub',
  description: 'Calculate the right amount of dechlorinator for your axolotl tank. Use the product label and water volume for safe dosing.',
  alternates: { canonical: 'https://axolotlhub.pages.dev/tools/dechlorination-dosage' },
};

export default function DechlorinationDosagePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="py-16 lg:py-20 bg-gradient-to-br from-bioluminescent/10 via-water-surface to-axolotl-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-deep-abyss mb-4">Dechlorination Dosage</h1>
            <p className="text-lg text-deep-abyss/70 max-w-2xl">
              Always dechlorinate tap water. Dose depends on tank volume and product strength.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-4 text-deep-abyss/80">
              <p><strong>Formula:</strong> (Tank volume ÷ label volume) × label dose.</p>
              <p>Example: If 5 ml treats 50 L and your tank is 100 L → use 10 ml.</p>
              <p>We can add an interactive dose calculator next.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
