'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, RefreshCw, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getRandomAxolotl, getDailyFact, AxolotlData } from '@/lib/api/axolotl-api';

function getTimeUntilMidnightUTC(): string {
  const now = new Date();
  const midnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
  const diff = midnight.getTime() - now.getTime();
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export function FreshnessSection() {
  const [axolotlData, setAxolotlData] = useState<AxolotlData | null>(null);
  const [dailyFact, setDailyFact] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [axolotl, fact] = await Promise.all([
          getRandomAxolotl(),
          Promise.resolve(getDailyFact()),
        ]);
        setAxolotlData(axolotl);
        setDailyFact(fact.fact);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilMidnightUTC());
    }, 1000);

    setTimeLeft(getTimeUntilMidnightUTC());

    return () => clearInterval(timer);
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const data = await getRandomAxolotl();
      setAxolotlData(data);
    } catch (error) {
      console.error('Error refreshing:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-axolotl-pink/10 via-water-surface to-bioluminescent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent hover:bg-bioluminescent/20">
              <RefreshCw className="w-3 h-3 mr-1" />
              Always Fresh
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-abyss mb-4">
              Daily Axolotl
            </h2>
            <p className="text-lg text-deep-abyss/70 max-w-2xl mx-auto">
              Every day at midnight UTC, we feature a new axolotl with a fun fact. 
              Come back tomorrow for a fresh dose of axolotl cuteness!
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Daily Axolotl Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-xl">
              <div className="relative aspect-square">
                {isLoading ? (
                  <div className="w-full h-full bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20 animate-pulse flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-bioluminescent/50" />
                  </div>
                ) : axolotlData ? (
                  <Image
                    src={axolotlData.url}
                    alt="Daily featured axolotl"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-bioluminescent/30 to-axolotl-pink/30 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-white/70" />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Daily Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-bioluminescent text-deep-abyss font-semibold px-3 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Today&apos;s Axolotl
                  </Badge>
                </div>

                {/* Countdown */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Next axolotl in:</span>
                    </div>
                    <div className="font-mono font-bold text-xl text-bioluminescent bg-deep-abyss/80 px-3 py-1 rounded-lg">
                      {timeLeft}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex gap-3">
                  <Button
                    onClick={handleRefresh}
                    variant="outline"
                    className="flex-1"
                    disabled={isLoading}
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                    Get Random
                  </Button>
                  <Button variant="outline" className="px-4">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Daily Fact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full bg-deep-abyss text-water-surface">
              <CardContent className="p-8 flex flex-col h-full">
                <Badge className="w-fit mb-6 bg-bioluminescent/20 text-bioluminescent">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Fact of the Day
                </Badge>

                <div className="flex-1 flex items-center">
                  <blockquote className="text-2xl sm:text-3xl font-heading font-medium leading-relaxed">
                    &ldquo;{dailyFact}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-8 pt-8 border-t border-water-surface/10">
                  <p className="text-water-surface/60 text-sm mb-4">
                    Want more amazing axolotl facts? Check out our complete collection!
                  </p>
                  <Link href="/axolotl-facts">
                    <Button className="bg-bioluminescent text-deep-abyss hover:bg-bioluminescent/90">
                      Explore All Facts
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-xl mx-auto">
            <h3 className="font-heading font-semibold text-xl text-deep-abyss mb-2">
              Never Miss a Daily Axolotl
            </h3>
            <p className="text-deep-abyss/60 mb-6">
              Subscribe to get daily axolotl photos and facts delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-2 border-deep-abyss/10 focus:border-bioluminescent focus:outline-none transition-colors"
              />
              <Button className="bg-bioluminescent text-deep-abyss hover:bg-bioluminescent/90 px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
