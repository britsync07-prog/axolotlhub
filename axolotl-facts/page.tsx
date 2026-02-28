import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { createArticleSchema, createFAQSchema } from '@/lib/seo/schemas';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Lightbulb, Brain, Heart, Leaf, Microscope, History, Fish } from 'lucide-react';
import { axolotlFactsDatabase, getFactsByCategory } from '@/lib/api/axolotl-api';

export const metadata: Metadata = {
  title: '200+ Axolotl Facts | Amazing & Weird Axolotl Information',
  description: 'Discover 200+ amazing axolotl facts! Learn about their regeneration abilities, neoteny, habitat, diet, and more. Daily updated facts about these incredible creatures.',
  keywords: ['axolotl facts', 'interesting axolotl facts', 'axolotl information', 'axolotl trivia'],
  alternates: {
    canonical: 'https://axolotlhub.com/axolotl-facts',
  },
};

const categories = [
  { id: 'regeneration', label: 'Regeneration', icon: Microscope, color: 'bg-purple-500' },
  { id: 'biology', label: 'Biology', icon: Brain, color: 'bg-blue-500' },
  { id: 'habitat', label: 'Habitat', icon: Leaf, color: 'bg-green-500' },
  { id: 'conservation', label: 'Conservation', icon: Heart, color: 'bg-red-500' },
  { id: 'anatomy', label: 'Anatomy', icon: Lightbulb, color: 'bg-yellow-500' },
  { id: 'morphs', label: 'Morphs', icon: Sparkles, color: 'bg-pink-500' },
  { id: 'diet', label: 'Diet', icon: Fish, color: 'bg-cyan-500' },
  { id: 'history', label: 'History', icon: History, color: 'bg-amber-600' },
];

const featuredFacts = [
  {
    fact: 'Axolotls can regenerate their limbs, heart, spinal cord, and parts of their brain without scarring.',
    category: 'regeneration',
    highlight: true,
  },
  {
    fact: 'Unlike most amphibians, axolotls keep their juvenile features (like external gills) throughout their entire life.',
    category: 'biology',
    highlight: true,
  },
  {
    fact: 'Wild axolotls are critically endangered with fewer than 1,000 remaining in their native habitat.',
    category: 'conservation',
    highlight: true,
  },
  {
    fact: 'The axolotl genome is 10 times larger than the human genome, making it the longest animal genome ever sequenced.',
    category: 'biology',
    highlight: true,
  },
];

export default function AxolotlFactsPage() {
  const articleSchema = createArticleSchema({
    title: '200+ Amazing Axolotl Facts',
    description: 'Comprehensive collection of axolotl facts covering regeneration, biology, habitat, and more.',
    url: 'https://axolotlhub.com/axolotl-facts',
    image: 'https://axolotlhub.com/og/facts.jpg',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    author: 'AxolotlHub Team',
    section: 'Facts',
  });

  const faqSchema = createFAQSchema([
    {
      question: 'What makes axolotls unique?',
      answer: 'Axolotls are unique because they retain their juvenile features (neoteny) throughout their entire life, can regenerate complex body parts like limbs and organs, and are only found in one place on Earth - Lake Xochimilco in Mexico.',
    },
    {
      question: 'Can axolotls regenerate their head?',
      answer: 'Axolotls cannot regenerate their entire head or brain, but they can regenerate significant portions of their brain, spinal cord, heart, limbs, and other organs.',
    },
    {
      question: 'Why are axolotls endangered?',
      answer: 'Wild axolotls are critically endangered due to habitat destruction, pollution, and the introduction of invasive species like tilapia and perch in Lake Xochimilco.',
    },
  ]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <JsonLd data={[articleSchema, faqSchema]} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-bioluminescent/20 via-water-surface to-axolotl-pink/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent">
                <Sparkles className="w-3 h-3 mr-1" />
                Daily Updated
              </Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-deep-abyss mb-6">
                200+ Amazing Axolotl Facts
              </h1>
              <p className="text-xl text-deep-abyss/70 max-w-2xl mx-auto">
                Discover the incredible world of axolotls. From their amazing 
                regeneration abilities to their unique biology, learn something 
                new every day.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Facts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
              Featured Facts
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {featuredFacts.map((fact, index) => (
                <Card
                  key={index}
                  className="border-2 border-bioluminescent/20 bg-gradient-to-br from-bioluminescent/5 to-transparent"
                >
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-bioluminescent/10 text-bioluminescent">
                      {categories.find((c) => c.id === fact.category)?.label}
                    </Badge>
                    <p className="text-lg text-deep-abyss font-medium">
                      {fact.fact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-water-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {categories.map((category) => {
                const count = getFactsByCategory(category.id).length;
                return (
                  <Card
                    key={category.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-deep-abyss mb-1">
                        {category.label}
                      </h3>
                      <p className="text-sm text-deep-abyss/60">{count} facts</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Facts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss text-center mb-10">
              All Axolotl Facts
            </h2>
            <div className="grid gap-4 max-w-4xl mx-auto">
              {axolotlFactsDatabase.slice(0, 20).map((fact, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bioluminescent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-bioluminescent">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-deep-abyss">{fact.fact}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {categories.find((c) => c.id === fact.category)?.label || fact.category}
                        </Badge>
                        <span className="text-xs text-deep-abyss/50">
                          Source: {fact.source}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-deep-abyss/60 mt-8">
              Showing 20 of {axolotlFactsDatabase.length} facts. More coming soon!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
