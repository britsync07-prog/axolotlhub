import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calculator,
  Ruler,
  Droplets,
  Thermometer,
  Fish,
  Clock,
  DollarSign,
  Dna,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Axolotl Care Calculators & Tools | Interactive Tools',
  description: 'Free interactive tools for axolotl keepers. Tank size calculator, water parameter checker, feeding calculator, and more. Plan your axolotl care perfectly.',
  keywords: ['axolotl calculator', 'axolotl tools', 'tank size calculator', 'axolotl care tools'],
  alternates: {
    canonical: 'https://axolotlhub.com/tools',
  },
};

const tools = [
  {
    href: '/tools/tank-size-calculator',
    icon: Ruler,
    title: 'Tank Size Calculator',
    description: 'Calculate the perfect tank size based on number of axolotls and their age.',
    color: 'bg-blue-500',
    popular: true,
  },
  {
    href: '/tools/water-parameter-checker',
    icon: Droplets,
    title: 'Water Parameter Checker',
    description: 'Check if your water parameters are safe and get recommendations.',
    color: 'bg-cyan-500',
    popular: true,
  },
  {
    href: '/tools/feeding-calculator',
    icon: Fish,
    title: 'Feeding Calculator',
    description: 'Calculate the right amount of food for your axolotl based on age and size.',
    color: 'bg-green-500',
    popular: false,
  },
  {
    href: '/tools/temperature-converter',
    icon: Thermometer,
    title: 'Temperature Guide',
    description: 'Convert between Fahrenheit and Celsius with safe range indicators.',
    color: 'bg-orange-500',
    popular: false,
  },
  {
    href: '/tools/cycle-timeline-estimator',
    icon: Clock,
    title: 'Cycle Timeline Estimator',
    description: 'Estimate how long your tank will take to fully cycle.',
    color: 'bg-purple-500',
    popular: false,
  },
  {
    href: '/tools/morph-price-estimator',
    icon: DollarSign,
    title: 'Morph Price Estimator',
    description: 'Get estimated price ranges for different axolotl morphs.',
    color: 'bg-emerald-500',
    popular: true,
  },
  {
    href: '/tools/breeding-genetics-calculator',
    icon: Dna,
    title: 'Breeding Genetics Calculator',
    description: 'Predict offspring colors when breeding different morphs.',
    color: 'bg-pink-500',
    popular: false,
  },
  {
    href: '/tools/dechlorination-dosage',
    icon: Droplets,
    title: 'Dechlorination Dosage',
    description: 'Calculate the exact amount of dechlorinator needed for your tank.',
    color: 'bg-teal-500',
    popular: false,
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-bioluminescent/20 via-water-surface to-axolotl-pink/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent">
                <Calculator className="w-3 h-3 mr-1" />
                Interactive Tools
              </Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-deep-abyss mb-6">
                Axolotl Care Tools
              </h1>
              <p className="text-xl text-deep-abyss/70 max-w-2xl mx-auto">
                Free interactive calculators and tools to help you provide the 
                best care for your axolotl. Plan tank setup, check water parameters, 
                and more.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
              All {tools.length} Tools
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <Link key={tool.href} href={tool.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center`}
                        >
                          <tool.icon className="w-6 h-6 text-white" />
                        </div>
                        {tool.popular && (
                          <Badge className="bg-axolotl-pink/10 text-axolotl-pink text-xs">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-2 group-hover:text-bioluminescent transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-deep-abyss/60 mb-4">
                        {tool.description}
                      </p>
                      <div className="flex items-center text-bioluminescent text-sm font-medium">
                        Use Tool
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-deep-abyss to-night-glow text-water-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-water-surface/70 max-w-2xl mx-auto mb-8">
              Check out our comprehensive care guide for detailed information 
              on all aspects of axolotl care.
            </p>
            <Link href="/axolotl-care-guide">
              <Button size="lg" className="bg-bioluminescent text-deep-abyss">
                View Care Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
