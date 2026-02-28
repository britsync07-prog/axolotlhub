'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  RefreshCw,
  Share2,
  Download,
  Sparkles,
  Heart,
  Shuffle,
} from 'lucide-react';
import { getRandomAxolotl, AxolotlData } from '@/lib/api/axolotl-api';

export default function RandomAxolotlPage() {
  const [axolotlData, setAxolotlData] = useState<AxolotlData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState<AxolotlData[]>([]);

  const fetchRandomAxolotl = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getRandomAxolotl();
      setAxolotlData(data);
      setHistory((prev) => [data, ...prev].slice(0, 6));
    } catch (error) {
      console.error('Error fetching axolotl:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomAxolotl();
  }, [fetchRandomAxolotl]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-water-surface via-bioluminescent/5 to-axolotl-pink/10">
        {/* Hero */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent">
                  <Shuffle className="w-3 h-3 mr-1" />
                  Random Generator
                </Badge>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-deep-abyss mb-4">
                  Random Axolotl
                </h1>
                <p className="text-xl text-deep-abyss/70 max-w-2xl mx-auto">
                  Click the button to see a random axolotl. Every refresh brings 
                  a new cute axolotl to brighten your day!
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Main Image */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden shadow-2xl">
                    <div className="relative aspect-[4/3]">
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20 flex items-center justify-center"
                          >
                            <RefreshCw className="w-16 h-16 text-bioluminescent animate-spin" />
                          </motion.div>
                        ) : axolotlData ? (
                          <motion.div
                            key="image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full"
                          >
                            <Image
                              src={axolotlData.url}
                              alt="Random axolotl"
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 66vw"
                              priority
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="fallback"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full bg-gradient-to-br from-bioluminescent/30 to-axolotl-pink/30 flex items-center justify-center"
                          >
                            <Heart className="w-24 h-24 text-white/70" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex gap-3">
                        <Button
                          onClick={fetchRandomAxolotl}
                          className="flex-1 bg-bioluminescent text-deep-abyss"
                          size="lg"
                          disabled={isLoading}
                        >
                          <RefreshCw className={`w-5 h-5 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                          Get Another Axolotl
                        </Button>
                        <Button variant="outline" size="lg" className="px-4">
                          <Share2 className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="px-4">
                          <Download className="w-5 h-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Facts Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-bioluminescent" />
                      Did You Know?
                    </h3>
                    {axolotlData && axolotlData.facts.length > 0 ? (
                      <ul className="space-y-3">
                        {axolotlData.facts.slice(0, 3).map((fact, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-deep-abyss/70"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-bioluminescent mt-2 flex-shrink-0" />
                            {fact}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-deep-abyss/60 text-sm">
                        Loading facts...
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* History */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-4">
                      Recently Viewed
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {history.slice(1).map((item, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden"
                        >
                          <Image
                            src={item.url}
                            alt="Previous axolotl"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {history.length <= 1 && (
                        <p className="col-span-3 text-sm text-deep-abyss/60 text-center py-4">
                          No history yet. Keep clicking!
                        </p>
                      )}
                    </div>
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
