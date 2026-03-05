import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { createArticleSchema } from '@/lib/seo/schemas';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, DollarSign, Dna, Info } from 'lucide-react';
import { morphs, getRarityLabel, getRarityColor } from '@/lib/data/morphs';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Axolotl Colors & Morphs Guide | Complete Visual Encyclopedia',
  description: 'Explore all axolotl colors and morphs from common leucistic pinks to rare chimeras. Learn about genetics, pricing, and care for each variety.',
  keywords: ['axolotl colors', 'axolotl morphs', 'axolotl types', 'axolotl varieties', 'GFP axolotl'],
  alternates: {
    canonical: 'https://axolotlhub.pages.dev/axolotl-colors-morphs',
  },
};

const categories = [
  { id: 'common', label: 'Common', description: 'Readily available, great for beginners', count: 5 },
  { id: 'uncommon', label: 'Uncommon', description: 'Limited availability, unique colors', count: 4 },
  { id: 'fluorescent', description: 'Glow under UV light, scientific varieties', count: 5 },
  { id: 'rare', label: 'Rare', description: 'Extremely rare, collector items', count: 10 },
];

export default function AxolotlColorsMorphsPage() {
  const articleSchema = createArticleSchema({
    title: 'Complete Axolotl Colors & Morphs Guide',
    description: 'Visual encyclopedia of all axolotl morphs with genetics, pricing, and care information.',
    url: 'https://axolotlhub.pages.dev/axolotl-colors-morphs',
    image: 'https://axolotlhub.pages.dev/og/morphs.jpg',
    datePublished: '2024-01-01',
    dateModified: '2024-01-01',
    author: 'AxolotlHub Team',
    section: 'Morphs',
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <JsonLd data={articleSchema} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-axolotl-pink/20 via-water-surface to-bioluminescent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-axolotl-pink/10 text-axolotl-pink">
                <Sparkles className="w-3 h-3 mr-1" />
                Visual Encyclopedia
              </Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-deep-abyss mb-6">
                Axolotl Colors & Morphs
              </h1>
              <p className="text-xl text-deep-abyss/70 max-w-2xl mx-auto mb-8">
                From common leucistic pinks to extremely rare chimeras, explore 
                the incredible variety of axolotl colors, patterns, and genetics.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#all-morphs">
                  <Button size="lg" className="bg-bioluminescent text-deep-abyss">
                    Explore All Morphs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/tools/morph-price-estimator">
                  <Button size="lg" variant="outline">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Price Estimator
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
              Morph Categories
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className={cn(
                        'w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4',
                        category.id === 'common' && 'bg-green-500',
                        category.id === 'uncommon' && 'bg-blue-500',
                        category.id === 'fluorescent' && 'bg-purple-500',
                        category.id === 'rare' && 'bg-orange-500'
                      )}
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-2">
                      {category.label || category.id.charAt(0).toUpperCase() + category.id.slice(1)}
                    </h3>
                    <p className="text-sm text-deep-abyss/60 mb-3">
                      {category.description}
                    </p>
                    <Badge variant="secondary">{category.count} morphs</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Morphs */}
        <section id="all-morphs" className="py-16 bg-water-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
              All {morphs.length} Axolotl Morphs
            </h2>

            {/* Common Morphs */}
            <div className="mb-12">
              <h3 className="font-heading font-semibold text-xl text-deep-abyss mb-6 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                Common Varieties
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {morphs
                  .filter((m) => m.category === 'common')
                  .map((morph) => (
                    <MorphCard key={morph.slug} morph={morph} />
                  ))}
              </div>
            </div>

            {/* Uncommon Morphs */}
            <div className="mb-12">
              <h3 className="font-heading font-semibold text-xl text-deep-abyss mb-6 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                Uncommon Varieties
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {morphs
                  .filter((m) => m.category === 'uncommon')
                  .map((morph) => (
                    <MorphCard key={morph.slug} morph={morph} />
                  ))}
              </div>
            </div>

            {/* Fluorescent Morphs */}
            <div className="mb-12">
              <h3 className="font-heading font-semibold text-xl text-deep-abyss mb-6 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                Fluorescent Varieties
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {morphs
                  .filter((m) => m.category === 'fluorescent')
                  .map((morph) => (
                    <MorphCard key={morph.slug} morph={morph} />
                  ))}
              </div>
            </div>

            {/* Rare Morphs */}
            <div>
              <h3 className="font-heading font-semibold text-xl text-deep-abyss mb-6 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                Rare & Extremely Rare Varieties
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {morphs
                  .filter((m) => m.category === 'rare')
                  .map((morph) => (
                    <MorphCard key={morph.slug} morph={morph} />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Genetics Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
                Understanding Axolotl Genetics
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Dna className="w-10 h-10 text-bioluminescent mb-4" />
                    <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-2">
                      Recessive vs Dominant
                    </h3>
                    <p className="text-deep-abyss/70">
                      Many axolotl traits follow Mendelian genetics. Leucistic (l), 
                      albino (a), and melanoid (m) are all recessive traits that 
                      require two copies to be expressed.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Info className="w-10 h-10 text-bioluminescent mb-4" />
                    <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-2">
                      GFP & Transgenes
                    </h3>
                    <p className="text-deep-abyss/70">
                      GFP (Green Fluorescent Protein) is a transgene inserted into 
                      the axolotl genome. It produces green fluorescence under UV 
                      light and is heritable.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MorphCard({ morph }: { morph: (typeof morphs)[0] }) {
  return (
    <Link href={`/morphs/${morph.slug}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20" />
          <Image
            src={morph.imageUrl}
            alt={morph.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute top-3 left-3">
            <Badge
              className={cn(
                'text-white text-xs',
                getRarityColor(morph.rarity)
              )}
            >
              {getRarityLabel(morph.rarity)}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-white/90 text-deep-abyss text-xs">
              ${morph.priceRange.min}-${morph.priceRange.max}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-heading font-semibold text-lg text-deep-abyss group-hover:text-bioluminescent transition-colors">
            {morph.name}
          </h3>
          <p className="text-sm text-deep-abyss/60 line-clamp-2 mt-1">
            {morph.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
