import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

import { blogPosts } from '@/lib/data/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | AxolotlHub Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="py-16 lg:py-20 bg-gradient-to-br from-bioluminescent/10 via-water-surface to-axolotl-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Badge className="mb-4" variant="secondary">
                {post.category}
              </Badge>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-abyss mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-deep-abyss/70 mb-6">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-deep-abyss/60">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <p className="text-deep-abyss/80 leading-relaxed">
                    {post.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
