import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { createArticleSchema, createBreadcrumbSchema } from '@/lib/seo/schemas';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  DollarSign,
  Dna,
  Info,
  Heart,
  AlertCircle,
  Share2,
} from 'lucide-react';
import {
  morphs,
  getMorphBySlug,
  getAllMorphSlugs,
  getRelatedMorphs,
  getRarityLabel,
  getRarityColor,
} from '@/lib/data/morphs';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllMorphSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const morph = getMorphBySlug(params.slug);
  if (!morph) {
    return {
      title: 'Morph Not Found | AxolotlHub',
    };
  }

  return {
    title: `${morph.name} Axolotl | Facts, Genetics & Care Guide`,
    description: `Learn about ${morph.name} axolotls. Price range: $${morph.priceRange.min}-$${morph.priceRange.max}. ${morph.description.slice(0, 150)}...`,
    keywords: [`${morph.name} axolotl`, 'axolotl morph', 'axolotl genetics', 'axolotl price'],
    alternates: {
      canonical: `https://axolotlhub.com/morphs/${morph.slug}`,
    },
    openGraph: {
      title: `${morph.name} Axolotl | Facts, Genetics & Care`,
      description: morph.description,
      url: `https://axolotlhub.com/morphs/${morph.slug}`,
      type: 'article',
    },
  };
}

export default function MorphPage({ params }: Props) {
  const morph = getMorphBySlug(params.slug);

  if (!morph) {
    notFound();
  }

  const relatedMorphs = getRelatedMorphs(params.slug);

  const articleSchema = createArticleSchema({
    title: `${morph.name} Axolotl - Complete Guide`,
    description: morph.description,
    url: `https://axolotlhub.com/morphs/${morph.slug}`,
    image: `https://axolotlhub.com${morph.imageUrl}`,
    datePublished: '2024-01-01',
    dateModified: '2024-01-01',
    author: 'AxolotlHub Team',
    section: 'Morphs',
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://axolotlhub.com' },
    { name: 'Morphs', url: 'https://axolotlhub.com/axolotl-colors-morphs' },
    { name: morph.name, url: `https://axolotlhub.com/morphs/${morph.slug}` },
  ]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <JsonLd data={[articleSchema, breadcrumbSchema]} />

        {/* Breadcrumb */}
        <div className="bg-water-surface border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/axolotl-colors-morphs"
              className="flex items-center text-sm text-deep-abyss/60 hover:text-bioluminescent transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to All Morphs
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-water-surface to-bioluminescent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={morph.imageUrl}
                  alt={`${morph.name} axolotl`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={cn(
                      'text-white text-sm px-3 py-1',
                      getRarityColor(morph.rarity)
                    )}
                  >
                    {getRarityLabel(morph.rarity)}
                  </Badge>
                </div>
              </div>

              {/* Info */}
              <div>
                <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-abyss mb-4">
                  {morph.name}
                </h1>
                <p className="text-lg text-deep-abyss/60 italic mb-4">
                  {morph.scientificName}
                </p>
                <p className="text-deep-abyss/80 text-lg mb-6">
                  {morph.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <DollarSign className="w-5 h-5 text-bioluminescent" />
                    <span className="font-semibold text-deep-abyss">
                      ${morph.priceRange.min}-${morph.priceRange.max}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <Info className="w-5 h-5 text-bioluminescent" />
                    <span className="text-deep-abyss">{morph.availability}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-bioluminescent text-deep-abyss">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Favorites
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Tabs */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="characteristics" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
                <TabsTrigger value="genetics">Genetics</TabsTrigger>
                <TabsTrigger value="care">Care Notes</TabsTrigger>
                <TabsTrigger value="related">Related</TabsTrigger>
              </TabsList>

              <TabsContent value="characteristics" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5 text-bioluminescent" />
                      Key Characteristics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {morph.characteristics.map((char, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 p-3 bg-water-surface rounded-lg"
                        >
                          <div className="w-2 h-2 rounded-full bg-bioluminescent mt-2" />
                          <span className="text-deep-abyss">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="genetics" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Dna className="w-5 h-5 text-bioluminescent" />
                      Genetics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-deep-abyss/80 leading-relaxed">
                      {morph.genetics}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="care" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-bioluminescent" />
                      Care Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-deep-abyss/80 leading-relaxed">
                      {morph.careNotes}
                    </p>
                    <div className="mt-4 p-4 bg-algae-green/10 rounded-lg">
                      <p className="text-sm text-deep-abyss/70 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-algae-green flex-shrink-0 mt-0.5" />
                        Standard axolotl care applies unless otherwise noted. 
                        Refer to our complete care guide for detailed information.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="related" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Related Morphs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {relatedMorphs.length > 0 ? (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {relatedMorphs.map((related) => (
                          <Link key={related.slug} href={`/morphs/${related.slug}`}>
                            <div className="flex items-center gap-4 p-4 bg-water-surface rounded-lg hover:bg-bioluminescent/10 transition-colors">
                              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={related.imageUrl}
                                  alt={related.name}
                                  fill
                                  className="object-cover"
                                  sizes="64px"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold text-deep-abyss">
                                  {related.name}
                                </h4>
                                <p className="text-sm text-deep-abyss/60">
                                  ${related.priceRange.min}-${related.priceRange.max}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-deep-abyss/60">
                        No related morphs available.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
