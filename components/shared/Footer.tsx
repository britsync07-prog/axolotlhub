'use client';

import Link from 'next/link';
import { Droplets, Heart, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { getCurrentYear } from '@/lib/utils';

const footerLinks = {
  care: {
    title: 'Care Guides',
    links: [
      { href: '/axolotl-care-guide', label: 'Complete Care Guide' },
      { href: '/axolotl-tank-setup', label: 'Tank Setup' },
      { href: '/axolotl-diet-feeding', label: 'Diet & Feeding' },
      { href: '/axolotl-health-diseases', label: 'Health & Diseases' },
      { href: '/axolotl-breeding', label: 'Breeding Guide' },
    ],
  },
  discover: {
    title: 'Discover',
    links: [
      { href: '/axolotl-facts', label: 'Axolotl Facts' },
      { href: '/axolotl-colors-morphs', label: 'Colors & Morphs' },
      { href: '/axolotl-lifespan', label: 'Lifespan' },
      { href: '/daily-axolotl', label: 'Daily Axolotl' },
      { href: '/random-axolotl', label: 'Random Axolotl' },
    ],
  },
  tools: {
    title: 'Tools',
    links: [
      { href: '/tools/tank-size-calculator', label: 'Tank Size Calculator' },
      { href: '/tools/water-parameter-checker', label: 'Water Parameters' },
      { href: '/tools/feeding-calculator', label: 'Feeding Calculator' },
      { href: '/tools/morph-price-estimator', label: 'Price Estimator' },
      { href: '/tools', label: 'All Tools' },
    ],
  },
  legal: {
    title: 'Legal & Info',
    links: [
      { href: '/legal', label: 'Legal Information' },
      { href: '/breeders', label: 'Breeders Directory' },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
    ],
  },
};

const socialLinks = [
  { href: 'https://twitter.com/axolotlhub', icon: Twitter, label: 'Twitter' },
  { href: 'https://facebook.com/axolotlhub', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com/axolotlhub', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com/axolotlhub', icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-deep-abyss text-water-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bioluminescent to-axolotl-pink flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-semibold text-xl">AxolotlHub</span>
            </Link>
            <p className="text-water-surface/70 text-sm mb-6 max-w-xs">
              The ultimate resource for axolotl care, facts, and community. 
              Helping keepers provide the best care for these amazing creatures.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-water-surface/10 flex items-center justify-center hover:bg-bioluminescent/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-water-surface/70 text-sm hover:text-bioluminescent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-water-surface/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">
                Get Daily Axolotl Facts
              </h3>
              <p className="text-water-surface/70 text-sm">
                Subscribe to receive daily axolotl facts and care tips.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-water-surface/10 border border-water-surface/20 text-water-surface placeholder:text-water-surface/50 focus:outline-none focus:border-bioluminescent transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-bioluminescent text-deep-abyss font-medium hover:bg-bioluminescent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-water-surface/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-water-surface/50 text-sm">
            &copy; {getCurrentYear()} AxolotlHub. All rights reserved.
          </p>
          <p className="text-water-surface/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-gill-red fill-gill-red" /> for axolotls everywhere
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-water-surface/50 text-sm hover:text-water-surface transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-water-surface/50 text-sm hover:text-water-surface transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
