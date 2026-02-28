'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getRandomAxolotl, AxolotlData } from '@/lib/api/axolotl-api';

export function HeroSection() {
  const [axolotlData, setAxolotlData] = useState<AxolotlData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRandomAxolotl();
        setAxolotlData(data);
      } catch (error) {
        console.error('Error fetching axolotl:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-water-surface via-water-surface to-bioluminescent/10" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-bioluminescent/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-axolotl-pink/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bioluminescent/10 text-bioluminescent text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Daily Fresh Axolotl Content</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-deep-abyss leading-tight mb-6">
              Discover the{' '}
              <span className="text-gradient">Magical World</span>{' '}
              of Axolotls
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-deep-abyss/70 max-w-2xl mx-auto lg:mx-0 mb-8">
              The ultimate resource for axolotl care, facts, and community. 
              Learn how to keep these amazing creatures happy and healthy with 
              our expert guides and interactive tools.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href="/axolotl-care-guide">
                <Button
                  size="lg"
                  className="bg-bioluminescent hover:bg-bioluminescent/90 text-deep-abyss font-semibold px-8 py-6 text-lg rounded-xl group"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/daily-axolotl">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-deep-abyss/20 hover:border-bioluminescent hover:text-bioluminescent font-semibold px-8 py-6 text-lg rounded-xl"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Meet Today&apos;s Axolotl
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { value: '200+', label: 'Axolotl Facts' },
                { value: '24', label: 'Morph Types' },
                { value: '12', label: 'Care Tools' },
                { value: '50K+', label: 'Happy Keepers' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-bioluminescent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-deep-abyss/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-bioluminescent/10 to-axolotl-pink/10" />
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
                {isLoading ? (
                  <div className="w-full h-full bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20 animate-pulse flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-bioluminescent/50" />
                  </div>
                ) : axolotlData ? (
                  <Image
                    src={axolotlData.url}
                    alt="Cute axolotl"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-bioluminescent/30 to-axolotl-pink/30 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white/70" />
                  </div>
                )}
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-3xl">🦎</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-bioluminescent shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
