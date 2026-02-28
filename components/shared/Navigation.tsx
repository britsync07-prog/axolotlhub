'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplets, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  {
    href: '/axolotl-care-guide',
    label: 'Care Guide',
    children: [
      { href: '/axolotl-tank-setup', label: 'Tank Setup' },
      { href: '/axolotl-diet-feeding', label: 'Diet & Feeding' },
      { href: '/axolotl-health-diseases', label: 'Health' },
      { href: '/axolotl-breeding', label: 'Breeding' },
    ],
  },
  { href: '/axolotl-facts', label: 'Facts' },
  { href: '/axolotl-colors-morphs', label: 'Morphs' },
  { href: '/tools', label: 'Tools' },
  { href: '/daily-axolotl', label: 'Daily Axolotl' },
  { href: '/blog', label: 'Blog' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-water-surface/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-bioluminescent to-axolotl-pink flex items-center justify-center group-hover:scale-110 transition-transform">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-semibold text-xl text-deep-abyss">
              AxolotlHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-bioluminescent bg-bioluminescent/10'
                      : 'text-deep-abyss/80 hover:text-deep-abyss hover:bg-deep-abyss/5'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        activeDropdown === item.href && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-border overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-3 text-sm transition-colors',
                            isActive(child.href)
                              ? 'text-bioluminescent bg-bioluminescent/5'
                              : 'text-deep-abyss/80 hover:text-deep-abyss hover:bg-deep-abyss/5'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-deep-abyss/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-deep-abyss" />
            ) : (
              <Menu className="w-6 h-6 text-deep-abyss" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-water-surface"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      isActive(item.href)
                        ? 'text-bioluminescent bg-bioluminescent/10'
                        : 'text-deep-abyss/80 hover:text-deep-abyss hover:bg-deep-abyss/5'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'block px-4 py-2 rounded-lg text-sm transition-colors',
                            isActive(child.href)
                              ? 'text-bioluminescent bg-bioluminescent/5'
                              : 'text-deep-abyss/60 hover:text-deep-abyss hover:bg-deep-abyss/5'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
