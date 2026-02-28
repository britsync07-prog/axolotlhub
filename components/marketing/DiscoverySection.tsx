'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { morphs, getRarityLabel, getRarityColor } from '@/lib/data/morphs';
import { cn } from '@/lib/utils';

const categories = [
  { value: 'all', label: 'All Morphs' },
  { value: 'common', label: 'Common' },
  { value: 'uncommon', label: 'Uncommon' },
  { value: 'fluorescent', label: 'Fluorescent' },
  { value: 'rare', label: 'Rare' },
];

export function DiscoverySection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMorphs = morphs.filter((morph) => {
    const matchesSearch =
      morph.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      morph.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || morph.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-axolotl-pink/10 text-axolotl-pink hover:bg-axolotl-pink/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Explore
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-abyss mb-4">
              Discover Axolotl Morphs
            </h2>
            <p className="text-lg text-deep-abyss/70 max-w-2xl mx-auto">
              From common leucistic pinks to extremely rare chimeras, explore the 
              incredible variety of axolotl colors and patterns.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-10 max-w-3xl mx-auto"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-deep-abyss/40" />
            <Input
              type="text"
              placeholder="Search morphs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 rounded-xl border-2 border-deep-abyss/10 focus:border-bioluminescent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className={cn(
                  'rounded-full whitespace-nowrap',
                  selectedCategory === category.value
                    ? 'bg-bioluminescent text-deep-abyss'
                    : 'border-deep-abyss/20'
                )}
              >
                <Filter className="w-4 h-4 mr-1" />
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Morphs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredMorphs.slice(0, 8).map((morph) => (
            <motion.div key={morph.slug} variants={itemVariants}>
              <Link href={`/morphs/${morph.slug}`}>
                <div className="group bg-water-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20" />
                    <Image
                      src={morph.imageUrl}
                      alt={morph.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Rarity Badge */}
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
                    {/* Price Range */}
                    <div className="absolute bottom-3 right-3">
                      <Badge className="bg-white/90 text-deep-abyss text-xs">
                        ${morph.priceRange.min}-${morph.priceRange.max}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg text-deep-abyss mb-2 group-hover:text-bioluminescent transition-colors">
                      {morph.name}
                    </h3>
                    <p className="text-sm text-deep-abyss/60 line-clamp-2 mb-4">
                      {morph.description}
                    </p>
                    <div className="flex items-center text-bioluminescent text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/axolotl-colors-morphs">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-deep-abyss/20 hover:border-bioluminescent hover:text-bioluminescent font-semibold px-8 py-6 text-lg rounded-xl"
            >
              View All {morphs.length} Morphs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
