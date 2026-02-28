import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { createArticleSchema, createFAQSchema, createHowToSchema } from '@/lib/seo/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  AlertCircle,
  Thermometer,
  Droplets,
  Fish,
  Home,
  Heart,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Complete Axolotl Care Guide 2024 | Husbandry & Tank Setup',
  description: 'Learn how to care for axolotls with our comprehensive guide. Covers tank setup, water parameters, feeding, health, and breeding. Veterinary-reviewed advice for happy, healthy axolotls.',
  keywords: ['axolotl care', 'axolotl husbandry', 'pet axolotl guide', 'axolotl tank setup', 'axolotl feeding'],
  alternates: {
    canonical: 'https://axolotlhub.com/axolotl-care-guide',
  },
  openGraph: {
    title: 'Complete Axolotl Care Guide 2024 | Husbandry & Tank Setup',
    description: 'Learn how to care for axolotls with our comprehensive guide. Veterinary-reviewed advice.',
    url: 'https://axolotlhub.com/axolotl-care-guide',
    type: 'article',
  },
};

const careChapters = [
  {
    title: 'Tank Setup',
    icon: Home,
    description: 'Learn the perfect tank size, filtration, and decoration for your axolotl.',
    href: '/axolotl-tank-setup',
  },
  {
    title: 'Water Parameters',
    icon: Droplets,
    description: 'Master water chemistry to keep your axolotl healthy and thriving.',
    href: '/tools/water-parameter-checker',
  },
  {
    title: 'Temperature',
    icon: Thermometer,
    description: 'Understand why cool water is crucial and how to maintain it.',
    href: '/tools/temperature-converter',
  },
  {
    title: 'Diet & Feeding',
    icon: Fish,
    description: 'Discover what axolotls eat and how much to feed them.',
    href: '/axolotl-diet-feeding',
  },
  {
    title: 'Health & Diseases',
    icon: Heart,
    description: 'Recognize common health issues and how to treat them.',
    href: '/axolotl-health-diseases',
  },
  {
    title: 'Breeding',
    icon: AlertCircle,
    description: 'Learn responsible breeding practices and genetics.',
    href: '/axolotl-breeding',
  },
];

const quickTips = [
  'Tank size: Minimum 20 gallons for one axolotl',
  'Water temperature: 60-64°F (15-18°C)',
  'pH level: 7.4-7.6',
  'No gravel - use sand or bare bottom',
  'Feed 2-3 times per week for adults',
  'Never use tap water without dechlorinator',
];

const faqs = [
  {
    question: 'Are axolotls good pets for beginners?',
    answer: 'Axolotls can be good pets for beginners who are willing to learn about their specific care requirements. They are relatively low-maintenance compared to some pets, but they do require proper tank setup, water quality management, and cool temperatures.',
  },
  {
    question: 'How long do axolotls live?',
    answer: 'With proper care, axolotls typically live 10-15 years in captivity. Some have been known to live up to 20 years with exceptional care.',
  },
  {
    question: 'What size tank does an axolotl need?',
    answer: 'A single adult axolotl needs a minimum of 20 gallons (75 liters). If keeping multiple axolotls, add at least 10 gallons per additional axolotl.',
  },
  {
    question: 'Can axolotls live with fish?',
    answer: 'No, axolotls should not be kept with fish. Fish may nip at axolotl gills, and axolotls may eat small fish. Additionally, fish often require different water temperatures.',
  },
  {
    question: 'Why is my axolotl floating?',
    answer: 'Floating can indicate several issues: gas from swallowing air while eating, constipation, or in rare cases, a bacterial infection. If your axolotl is floating and unable to sink, consult a vet experienced with axolotls.',
  },
];

const tankSetupSteps = [
  {
    name: 'Choose the Right Tank',
    text: 'Select a tank that is at least 20 gallons for one axolotl. Long tanks are better than tall tanks as axolotls spend most of their time on the bottom.',
  },
  {
    name: 'Set Up Filtration',
    text: 'Use a sponge filter or gentle canister filter. Axolotls prefer low water flow as they are not strong swimmers.',
  },
  {
    name: 'Add Substrate',
    text: 'Use fine sand (grain size under 1mm) or keep a bare bottom. Never use gravel as axolotls can swallow it and become impacted.',
  },
  {
    name: 'Provide Hiding Spots',
    text: 'Add caves, PVC pipes, or plants (real or silk) for your axolotl to hide in. This helps them feel secure.',
  },
  {
    name: 'Cycle the Tank',
    text: 'Before adding your axolotl, cycle the tank for 4-6 weeks to establish beneficial bacteria. Test water parameters regularly.',
  },
];

export default function AxolotlCareGuidePage() {
  const articleSchema = createArticleSchema({
    title: 'Complete Axolotl Care Guide 2024',
    description: 'Comprehensive guide to axolotl care including tank setup, water parameters, feeding, and health.',
    url: 'https://axolotlhub.com/axolotl-care-guide',
    image: 'https://axolotlhub.com/og/care-guide.jpg',
    datePublished: '2024-01-01',
    dateModified: '2024-01-01',
    author: 'AxolotlHub Team',
    section: 'Care Guides',
  });

  const faqSchema = createFAQSchema(faqs);
  const howToSchema = createHowToSchema({
    title: 'How to Set Up an Axolotl Tank',
    description: 'Step-by-step guide to setting up the perfect habitat for your axolotl.',
    steps: tankSetupSteps,
    totalTime: 'PT4W',
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <JsonLd data={[articleSchema, faqSchema, howToSchema]} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-water-surface to-bioluminescent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent">
                Veterinary Reviewed
              </Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-deep-abyss mb-6">
                Complete Axolotl Care Guide
              </h1>
              <p className="text-xl text-deep-abyss/70 max-w-2xl mx-auto mb-8">
                Everything you need to know to keep your axolotl happy and healthy. 
                From tank setup to feeding, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#quick-start">
                  <Button size="lg" className="bg-bioluminescent text-deep-abyss">
                    Quick Start Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button size="lg" variant="outline">
                    Use Care Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section id="quick-start" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
              Quick Care Tips
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {quickTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-water-surface rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-algae-green flex-shrink-0 mt-0.5" />
                  <span className="text-deep-abyss">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Care Chapters */}
        <section className="py-16 bg-water-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
              Explore Care Topics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {careChapters.map((chapter) => (
                <Link key={chapter.title} href={chapter.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-bioluminescent/10 flex items-center justify-center mb-4 group-hover:bg-bioluminescent/20 transition-colors">
                        <chapter.icon className="w-6 h-6 text-bioluminescent" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-2 group-hover:text-bioluminescent transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-deep-abyss/60">
                        {chapter.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tank Setup How-To */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
                Setting Up Your Axolotl Tank
              </h2>
              <div className="space-y-6">
                {tankSetupSteps.map((step, index) => (
                  <Card key={step.name} className="border-l-4 border-l-bioluminescent">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-bioluminescent text-deep-abyss font-bold flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-2">
                            {step.name}
                          </h3>
                          <p className="text-deep-abyss/70">{step.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-water-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg text-deep-abyss flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-bioluminescent flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-deep-abyss/70">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-deep-abyss to-night-glow text-water-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-water-surface/70 max-w-2xl mx-auto mb-8">
              Use our interactive tools to plan your axolotl setup perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools/tank-size-calculator">
                <Button size="lg" className="bg-bioluminescent text-deep-abyss">
                  Tank Size Calculator
                </Button>
              </Link>
              <Link href="/axolotl-facts">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-water-surface/20 text-water-surface hover:bg-water-surface/10"
                >
                  Learn More Facts
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
