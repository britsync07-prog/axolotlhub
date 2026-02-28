import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(min: number, max: number): string {
  if (min === max) {
    return `$${min}`;
  }
  return `$${min}-$${max}`;
}

export function getRarityLabel(rarity: string): string {
  const labels: Record<string, string> = {
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    'very-rare': 'Very Rare',
    'extremely-rare': 'Extremely Rare',
  };
  return labels[rarity] || rarity;
}

export function getRarityColor(rarity: string): string {
  const colors: Record<string, string> = {
    common: 'bg-green-500',
    uncommon: 'bg-blue-500',
    rare: 'bg-purple-500',
    'very-rare': 'bg-orange-500',
    'extremely-rare': 'bg-red-500',
  };
  return colors[rarity] || 'bg-gray-500';
}

export function generateMetaTitle(title: string): string {
  return `${title} | AxolotlHub`;
}

export function generateMetaDescription(description: string): string {
  const maxLength = 160;
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength - 3) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength - 3) + '...';
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function getScrollProgress(): number {
  if (typeof window === 'undefined') return 0;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? scrollTop / docHeight : 0;
}

export function isInViewport(element: HTMLElement, offset: number = 0): boolean {
  if (typeof window === 'undefined') return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight + offset &&
    rect.right <= window.innerWidth
  );
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toTitleCase(str: string): string {
  return str
    .split(' ')
    .map((word) => capitalizeFirst(word.toLowerCase()))
    .join(' ');
}
