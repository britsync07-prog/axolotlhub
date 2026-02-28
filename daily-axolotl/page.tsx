'use client';

import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  RefreshCw,
  Share2,
  Download,
  Sparkles,
  Calendar,
  Heart,
} from 'lucide-react';
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

export default function DailyAxolotlPage() {
  const [axolotlData, setAxolotlData] = useState<AxolotlData | null>(null);
  const [dailyFact, setDailyFact] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [axolotl, fact] = await Promise.all([
          getRandomAxolotl(),
          Promise.resolve(getDailyFact()),
        ]);
        setAxolotlData(axolotl);
        setDailyFact(fact.fact);
        setCurrentDate(new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

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
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-water-surface via-bioluminescent/5 to-axolotl-pink/10">
        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Daily Feature
                </Badge>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-deep-abyss mb-4">
                  Daily Axolotl
                </h1>
                <p className="text-xl text-deep-abyss/70 max-w-2xl mx-auto">
                  A new axolotl every day at midnight UTC. Come back tomorrow 
                  for your daily dose of axolotl cuteness!
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Main Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="overflow-hidden shadow-2xl">
                  <div className="relative aspect-square">
                    {isLoading ? (
                      <div className="w-full h-full bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20 animate-pulse flex items-center justify-center">
                        <RefreshCw className="w-16 h-16 text-bioluminescent/50 animate-spin" />
                      </div>
                    ) : axolotlData ? (
                      <Image
                        src={axolotlData.url}
                        alt="Daily featured axolotl"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-bioluminescent/30 to-axolotl-pink/30 flex items-center justify-center">
                        <Heart className="w-24 h-24 text-white/70" />
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-deep-abyss font-semibold px-3 py-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {currentDate}
                      </Badge>
                    </div>

                    {/* Countdown */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Card className="bg-deep-abyss/90 border-0">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white">
                            <Clock className="w-5 h-5 text-bioluminescent" />
                            <span>Next axolotl in:</span>
                          </div>
                          <div className="font-mono font-bold text-2xl text-bioluminescent">
                            {timeLeft}
                          </div>
                        </CardContent>
                      </Card>
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
                        Get Random Axolotl
                      </Button>
                      <Button variant="outline" className="px-4">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="px-4">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Fact Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="bg-deep-abyss text-water-surface">
                  <CardContent className="p-8">
                    <Badge className="mb-6 bg-bioluminescent/20 text-bioluminescent">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Fact of the Day
                    </Badge>

                    <blockquote className="text-2xl sm:text-3xl font-heading font-medium leading-relaxed mb-6">
                      &ldquo;{dailyFact}&rdquo;
                    </blockquote>

                    <div className="pt-6 border-t border-water-surface/10">
                      <p className="text-water-surface/60 text-sm">
                        Come back tomorrow for a new fact!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Archive Preview */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-4">
                      Previous Daily Axolotls
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20 flex items-center justify-center"
                        >
                          <span className="text-2xl">🦎</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-deep-abyss/60 mt-4 text-center">
                      Archive coming soon!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
