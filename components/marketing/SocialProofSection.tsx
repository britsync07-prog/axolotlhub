'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Users, Camera, Heart, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Axolotl Keeper for 3 Years',
    content: 'AxolotlHub helped me set up my first tank perfectly. The calculators saved me from so many mistakes!',
    rating: 5,
    avatar: 'S',
  },
  {
    name: 'Michael T.',
    role: 'Breeder',
    content: 'The morph database is incredibly detailed. I reference it constantly for my breeding program.',
    rating: 5,
    avatar: 'M',
  },
  {
    name: 'Emily R.',
    role: 'New Axolotl Parent',
    content: 'Daily Axolotl is the highlight of my morning! So much great information in one place.',
    rating: 5,
    avatar: 'E',
  },
];

const stats = [
  { icon: Users, value: '50,000+', label: 'Active Keepers' },
  { icon: Camera, value: '10,000+', label: 'Photos Shared' },
  { icon: Heart, value: '1M+', label: 'Axolotls Loved' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

export function SocialProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-water-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-algae-green/10 text-algae-green hover:bg-algae-green/20">
              <Heart className="w-3 h-3 mr-1" />
              Community
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-abyss mb-4">
              Loved by Axolotl Keepers
            </h2>
            <p className="text-lg text-deep-abyss/70 max-w-2xl mx-auto">
              Join thousands of axolotl enthusiasts who trust AxolotlHub for 
              care guidance and community.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-bioluminescent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-bioluminescent" />
              </div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-deep-abyss mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-deep-abyss/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-2xl p-6 shadow-sm relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-bioluminescent/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-deep-abyss/80 mb-6 relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bioluminescent to-axolotl-pink flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-deep-abyss">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-deep-abyss/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Photo Gallery Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading font-semibold text-2xl text-deep-abyss mb-2">
              Community Gallery
            </h3>
            <p className="text-deep-abyss/60">
              Share your axolotl photos with #AxolotlHub
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="aspect-square rounded-xl bg-gradient-to-br from-bioluminescent/20 to-axolotl-pink/20 overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-deep-abyss/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
