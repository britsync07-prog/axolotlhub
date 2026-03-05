import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Tank Cycle Timeline Estimator | AxolotlHub',
  description: 'Estimate how long it takes to cycle an axolotl tank and understand the steps of the nitrogen cycle for safe water conditions.',
  alternates: { canonical: 'https://axolotlhub.pages.dev/tools/cycle-timeline-estimator' },
};

export default function CycleTimelineEstimatorPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="py-16 lg:py-20 bg-gradient-to-br from-bioluminescent/10 via-water-surface to-axolotl-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-deep-abyss mb-4">Cycle Timeline Estimator</h1>
            <p className="text-lg text-deep-abyss/70 max-w-2xl">
              Most axolotl tanks take <strong>3–6 weeks</strong> to cycle. This page outlines the typical timeline and key checkpoints.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-4 text-deep-abyss/80">
              <p><strong>Week 1–2:</strong> Ammonia appears, beneficial bacteria begin forming.</p>
              <p><strong>Week 2–4:</strong> Nitrite spikes as ammonia is consumed.</p>
              <p><strong>Week 4–6:</strong> Nitrates rise, ammonia/nitrite drop to 0.</p>
              <p>For a future interactive tool, we can add inputs for tank size and temperature.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
