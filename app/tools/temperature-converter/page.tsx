import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Axolotl Temperature Converter | °F to °C Guide',
  description: 'Convert Fahrenheit to Celsius and learn the safe temperature range for axolotl tanks. Keep water between 60–64°F (15–18°C).',
  alternates: { canonical: 'https://axolotlhub.pages.dev/tools/temperature-converter' },
};

export default function TemperatureConverterPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="py-16 lg:py-20 bg-gradient-to-br from-bioluminescent/10 via-water-surface to-axolotl-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-deep-abyss mb-4">Temperature Converter</h1>
            <p className="text-lg text-deep-abyss/70 max-w-2xl">
              Axolotls thrive in cool water. Use this guide to keep temperatures in the safe range: <strong>60–64°F (15–18°C)</strong>.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-4 text-deep-abyss/80">
              <p><strong>Quick conversion:</strong> °C = (°F − 32) × 5/9.</p>
              <p>Example: 62°F = (62 − 32) × 5/9 ≈ 16.7°C.</p>
              <p>For SEO and UX, you can later replace this section with an interactive converter.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
