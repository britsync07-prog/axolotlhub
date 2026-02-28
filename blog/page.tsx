import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Axolotl Blog | Care Tips, News & Community Stories',
  description: 'Read the latest axolotl care tips, research news, conservation updates, and community stories on the AxolotlHub blog.',
  keywords: ['axolotl blog', 'axolotl news', 'axolotl care tips', 'axolotl community'],
  alternates: {
    canonical: 'https://axolotlhub.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'wild-population-crisis-2024',
    title: 'Wild Axolotl Population Crisis: 2024 Update',
    excerpt: 'The latest research shows fewer than 1,000 wild axolotls remain in Lake Xochimilco. Learn about conservation efforts and what you can do to help.',
    category: 'Conservation',
    author: 'Dr. Maria Gonzalez',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'beginner-mistakes-to-avoid',
    title: '10 Beginner Mistakes Every New Axolotl Owner Makes',
    excerpt: 'Avoid these common pitfalls when setting up your first axolotl tank. Learn from experienced keepers and give your axolotl the best start.',
    category: 'Beginner Guide',
    author: 'Sarah Johnson',
    date: '2024-01-12',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'regeneration-research-breakthrough',
    title: 'New Breakthrough in Axolotl Regeneration Research',
    excerpt: 'Scientists have identified key genes involved in limb regeneration. This could have implications for human medicine.',
    category: 'Research',
    author: 'Dr. James Chen',
    date: '2024-01-10',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'minecraft-axolotl-impact',
    title: 'How Minecraft Changed Axolotl Popularity Forever',
    excerpt: 'Since their addition to Minecraft in 2021, axolotl interest has skyrocketed. We explore the positive and negative impacts of this gaming phenomenon.',
    category: 'Culture',
    author: 'Alex Rivera',
    date: '2024-01-08',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'winter-care-tips',
    title: 'Winter Care Tips: Keeping Your Axolotl Comfortable',
    excerpt: 'Colder months can affect your axolotl\'s tank temperature. Learn how to maintain optimal conditions during winter.',
    category: 'Care Tips',
    author: 'Emily Watson',
    date: '2024-01-05',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'gfp-axolotl-guide',
    title: 'Complete Guide to GFP Axolotls: Care, Science & Ethics',
    excerpt: 'Everything you need to know about Green Fluorescent Protein axolotls, from their scientific origins to special care requirements.',
    category: 'Morphs',
    author: 'Dr. Michael Park',
    date: '2024-01-03',
    readTime: '10 min read',
    featured: false,
  },
];

const categories = [
  'All',
  'Conservation',
  'Research',
  'Care Tips',
  'Beginner Guide',
  'Morphs',
  'Culture',
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-bioluminescent/20 via-water-surface to-axolotl-pink/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent">
                <Clock className="w-3 h-3 mr-1" />
                Weekly Updates
              </Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-deep-abyss mb-6">
                Axolotl Blog
              </h1>
              <p className="text-xl text-deep-abyss/70 max-w-2xl mx-auto">
                Care tips, research news, conservation updates, and stories 
                from the axolotl community.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 bg-white border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={`rounded-full whitespace-nowrap ${
                    category === 'All'
                      ? 'bg-bioluminescent text-deep-abyss'
                      : ''
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Link href={`/blog/${featuredPost.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-bioluminescent/30 to-axolotl-pink/30 flex items-center justify-center">
                      <span className="text-6xl">🦎</span>
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-axolotl-pink/10 text-axolotl-pink">
                        Featured
                      </Badge>
                      <h2 className="font-heading font-bold text-2xl lg:text-3xl text-deep-abyss mb-4 hover:text-bioluminescent transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-deep-abyss/70 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-deep-abyss/60">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12 bg-water-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-deep-abyss mb-8">
              Latest Posts
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <div className="aspect-video bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20 flex items-center justify-center">
                      <span className="text-4xl">🦎</span>
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3" variant="secondary">
                        {post.category}
                      </Badge>
                      <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-2 group-hover:text-bioluminescent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-deep-abyss/60 line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-deep-abyss/50">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
