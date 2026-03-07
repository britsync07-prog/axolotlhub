export interface AxolotlData {
  url: string;
  facts: string[];
  pics: string[];
  num: number;
}

export interface AxolotlFact {
  fact: string;
  url: string;
}

const API_BASE_URL = 'https://axoltlapi.herokuapp.com';

// Removed cache wrapper for compatibility with client-side fetching in static exports
export async function getRandomAxolotl(): Promise<AxolotlData> {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching axolotl data:', error);
    // Return fallback data
    return {
      url: 'https://axoltlapi.herokuapp.com/axolotls/default.jpg',
      facts: [
        'Axolotls can regenerate their limbs, heart, and parts of their brain.',
        'Axolotls keep their juvenile features throughout their entire life.',
        'Axolotls are native only to Lake Xochimilco in Mexico.',
      ],
      pics: ['https://axoltlapi.herokuapp.com/axolotls/default.jpg'],
      num: 1,
    };
  }
}

export async function getRandomFact(): Promise<AxolotlFact> {
  try {
    const response = await fetch(`${API_BASE_URL}/facts/random`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching axolotl fact:', error);
    return {
      fact: 'Axolotls can regenerate their limbs, heart, and parts of their brain.',
      url: 'https://axoltlapi.herokuapp.com',
    };
  }
}

// Predefined facts database for SEO content
export const axolotlFactsDatabase = [
  {
    fact: 'Axolotls can regenerate their limbs, heart, and parts of their brain.',
    category: 'regeneration',
    source: 'Scientific Research',
  },
  {
    fact: 'Axolotls keep their juvenile features throughout their entire life, a condition called neoteny.',
    category: 'biology',
    source: 'Biology Studies',
  },
  {
    fact: 'Axolotls are native only to Lake Xochimilco in Mexico City.',
    category: 'habitat',
    source: 'Conservation Data',
  },
  {
    fact: 'Wild axolotls are critically endangered with fewer than 1,000 remaining.',
    category: 'conservation',
    source: 'IUCN Red List',
  },
  {
    fact: 'Axolotls have external gills that look like feathery branches on their heads.',
    category: 'anatomy',
    source: 'Anatomical Studies',
  },
  {
    fact: 'Axolotls can live 10-15 years in captivity with proper care.',
    category: 'lifespan',
    source: 'Husbandry Data',
  },
  {
    fact: 'The name "axolotl" comes from the Aztec god Xolotl.',
    category: 'history',
    source: 'Cultural History',
  },
  {
    fact: 'Axolotls come in many colors including leucistic (pink), wild-type (brown), albino, and melanoid.',
    category: 'morphs',
    source: 'Genetics Research',
  },
  {
    fact: 'GFP axolotls glow green under blacklight due to a jellyfish protein.',
    category: 'morphs',
    source: 'Genetic Engineering',
  },
  {
    fact: 'Axolotls are carnivores and eat worms, insects, and small fish.',
    category: 'diet',
    source: 'Nutritional Studies',
  },
  {
    fact: 'Axolotls have poor eyesight and rely on smell to find food.',
    category: 'anatomy',
    source: 'Sensory Research',
  },
  {
    fact: 'Female axolotls can lay 100-1,000 eggs at a time.',
    category: 'breeding',
    source: 'Reproductive Studies',
  },
  {
    fact: 'Axolotls were used in space experiments on the Space Shuttle.',
    category: 'research',
    source: 'NASA Studies',
  },
  {
    fact: 'Axolotls can regenerate the same limb up to 5 times.',
    category: 'regeneration',
    source: 'Regeneration Research',
  },
  {
    fact: 'The axolotl genome is 10 times larger than the human genome.',
    category: 'genetics',
    source: 'Genomic Studies',
  },
  {
    fact: 'Axolotls don\'t undergo metamorphosis like other salamanders.',
    category: 'biology',
    source: 'Developmental Biology',
  },
  {
    fact: 'Axolotls prefer water temperatures between 60-64°F (15-18°C).',
    category: 'care',
    source: 'Husbandry Guidelines',
  },
  {
    fact: 'Axolotls can regenerate their spinal cord after injury.',
    category: 'regeneration',
    source: 'Medical Research',
  },
  {
    fact: 'The first axolotls in captivity were brought to Europe in 1864.',
    category: 'history',
    source: 'Historical Records',
  },
  {
    fact: 'Axolotls have four toes on their front feet and five on their back feet.',
    category: 'anatomy',
    source: 'Anatomical Studies',
  },
  {
    fact: 'Axolotls can swallow prey as wide as their own head.',
    category: 'diet',
    source: 'Feeding Studies',
  },
  {
    fact: 'Mosaic axolotls have patches of different colors due to cell mutation.',
    category: 'morphs',
    source: 'Genetics Research',
  },
  {
    fact: 'Axolotls are illegal to own in California, Maine, New Jersey, and Virginia.',
    category: 'legal',
    source: 'Legal Research',
  },
  {
    fact: 'Axolotls can breathe through their skin, gills, and lungs.',
    category: 'anatomy',
    source: 'Physiological Studies',
  },
  {
    fact: 'Baby axolotls are called larvae and hatch from eggs after 2-3 weeks.',
    category: 'breeding',
    source: 'Developmental Studies',
  },
  {
    fact: 'Axolotls were featured in Minecraft as a passive aquatic mob.',
    category: 'culture',
    source: 'Gaming Culture',
  },
  {
    fact: 'The axolotl is the national animal of Mexico City.',
    category: 'culture',
    source: 'Cultural Significance',
  },
  {
    fact: 'Axolotls can regenerate their heart tissue without scarring.',
    category: 'regeneration',
    source: 'Cardiac Research',
  },
  {
    fact: 'Copper axolotls have a metallic, copper-colored appearance.',
    category: 'morphs',
    source: 'Morphology Studies',
  },
  {
    fact: 'Axolotls should not be kept with fish as they may eat each other.',
    category: 'care',
    source: 'Husbandry Guidelines',
  },
];

export function getRandomFacts(count: number = 5): typeof axolotlFactsDatabase {
  const shuffled = [...axolotlFactsDatabase].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getFactsByCategory(category: string): typeof axolotlFactsDatabase {
  return axolotlFactsDatabase.filter((fact) => fact.category === category);
}

export function getDailyFact(): typeof axolotlFactsDatabase[0] {
  // Get a fact based on the current date for consistency
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const index = dayOfYear % axolotlFactsDatabase.length;
  return axolotlFactsDatabase[index];
}
