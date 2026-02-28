'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calculator,
  Droplets,
  Thermometer,
  Fish,
  Ruler,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tools = [
  {
    href: '/tools/tank-size-calculator',
    icon: Ruler,
    title: 'Tank Size Calculator',
    description: 'Find the perfect tank size for your axolotl based on count and age.',
    color: 'bg-blue-500',
  },
  {
    href: '/tools/water-parameter-checker',
    icon: Droplets,
    title: 'Water Parameters',
    description: 'Check if your water parameters are safe for axolotls.',
    color: 'bg-cyan-500',
  },
  {
    href: '/tools/feeding-calculator',
    icon: Fish,
    title: 'Feeding Calculator',
    description: 'Calculate the right amount of food for your axolotl.',
    color: 'bg-green-500',
  },
  {
    href: '/tools/temperature-converter',
    icon: Thermometer,
    title: 'Temperature Guide',
    description: 'Convert temperatures and check safe ranges.',
    color: 'bg-orange-500',
  },
  {
    href: '/tools/cycle-timeline-estimator',
    icon: Clock,
    title: 'Cycle Timeline',
    description: 'Estimate how long your tank will take to cycle.',
    color: 'bg-purple-500',
  },
  {
    href: '/tools',
    icon: Calculator,
    title: 'All Tools',
    description: 'Explore all 12+ care calculators and tools.',
    color: 'bg-bioluminescent',
  },
];

const quickStats = [
  { label: 'Tank Temperature', value: '60-64°F', safe: true },
  { label: 'pH Level', value: '7.4-7.6', safe: true },
  { label: 'Ammonia', value: '0 ppm', safe: true },
  { label: 'Nitrite', value: '0 ppm', safe: true },
  { label: 'Nitrate', value: '< 20 ppm', safe: true },
];

export function DashboardSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-deep-abyss to-night-glow text-water-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-bioluminescent/20 text-bioluminescent hover:bg-bioluminescent/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Interactive Tools
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Axolotl Care Dashboard
            </h2>
            <p className="text-lg text-water-surface/70 max-w-2xl mx-auto">
              Use our interactive tools to ensure your axolotl has the perfect 
              environment, diet, and care.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tools Grid */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link href={tool.href}>
                    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <tool.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading font-semibold text-lg text-water-surface mb-1 group-hover:text-bioluminescent transition-colors">
                              {tool.title}
                            </h3>
                            <p className="text-sm text-water-surface/60">
                              {tool.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-water-surface/40 group-hover:text-bioluminescent group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Quick Stats Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/5 border-white/10 h-full">
              <CardHeader>
                <CardTitle className="text-water-surface flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-bioluminescent" />
                  Ideal Water Parameters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                    >
                      <span className="text-sm text-water-surface/70">
                        {stat.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-medium text-bioluminescent">
                          {stat.value}
                        </span>
                        {stat.safe && (
                          <div className="w-2 h-2 rounded-full bg-algae-green" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-gill-red/10 border border-gill-red/20">
                  <p className="text-sm text-water-surface/80">
                    <strong className="text-gill-red">Warning:</strong> Never 
                    use tap water without dechlorinator. Chlorine and chloramines 
                    are toxic to axolotls.
                  </p>
                </div>

                <Link href="/axolotl-care-guide">
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-white/20 text-water-surface hover:bg-white/10"
                  >
                    View Full Care Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
