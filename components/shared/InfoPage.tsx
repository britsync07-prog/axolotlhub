import type { ReactNode } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type InfoPageProps = {
  badge?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function InfoPage({ badge, title, description, children }: InfoPageProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-water-surface">
        <section className="py-14 lg:py-20 bg-gradient-to-br from-water-surface via-white to-bioluminescent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {badge ? <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent">{badge}</Badge> : null}
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-abyss mb-4">{title}</h1>
              <p className="text-lg text-deep-abyss/70 mb-8">{description}</p>
              <div className="prose prose-slate max-w-none text-deep-abyss/80">{children}</div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/axolotl-care-guide"><Button>Care Guide</Button></Link>
                <Link href="/tools"><Button variant="outline">Tools</Button></Link>
                <Link href="/blog"><Button variant="outline">Blog</Button></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
