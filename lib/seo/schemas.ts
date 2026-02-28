type SchemaData = Record<string, unknown>;

export const OrganizationSchema: SchemaData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AxolotlHub',
  url: 'https://axolotlhub.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://axolotlhub.com/logo.png',
    width: 512,
    height: 512,
  },
  description: 'The ultimate resource for axolotl care, facts, morphs, and breeding.',
  sameAs: [
    'https://twitter.com/axolotlhub',
    'https://facebook.com/axolotlhub',
    'https://instagram.com/axolotlhub',
    'https://youtube.com/axolotlhub',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@axolotlhub.com',
    availableLanguage: ['English'],
  },
};

export const WebSiteSchema: SchemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AxolotlHub',
  url: 'https://axolotlhub.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://axolotlhub.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export function createArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
  section,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  section: string;
}): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AxolotlHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://axolotlhub.com/logo.png',
        width: 512,
        height: 512,
      },
    },
    articleSection: section,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function createFAQSchema(questions: Array<{ question: string; answer: string }>): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function createHowToSchema({
  title,
  description,
  steps,
  totalTime,
  estimatedCost,
  image,
}: {
  title: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  image?: string;
}): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    image: image ? { '@type': 'ImageObject', url: image } : undefined,
    totalTime,
    estimatedCost: estimatedCost
      ? {
          '@type': 'MonetaryAmount',
          currency: estimatedCost.currency,
          value: estimatedCost.value,
        }
      : undefined,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? { '@type': 'ImageObject', url: step.image } : undefined,
    })),
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createImageObjectSchema({
  url,
  name,
  description,
  author,
  datePublished,
}: {
  url: string;
  name: string;
  description: string;
  author?: string;
  datePublished?: string;
}): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    name,
    description,
    author: author ? { '@type': 'Person', name: author } : undefined,
    datePublished,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    acquireLicensePage: 'https://axolotlhub.com/licensing',
  };
}

export function createProductSchema({
  name,
  description,
  image,
  offers,
  rating,
}: {
  name: string;
  description: string;
  image: string;
  offers: { price: string; currency: string; availability: string };
  rating?: { ratingValue: string; reviewCount: string };
}): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    offers: {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: offers.currency,
      availability: offers.availability,
      url: 'https://axolotlhub.com/products',
    },
    aggregateRating: rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: rating.ratingValue,
          reviewCount: rating.reviewCount,
        }
      : undefined,
  };
}
