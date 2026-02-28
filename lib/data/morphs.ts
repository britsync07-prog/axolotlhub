export interface Morph {
  slug: string;
  name: string;
  scientificName: string;
  description: string;
  characteristics: string[];
  genetics: string;
  priceRange: { min: number; max: number };
  rarity: 'common' | 'uncommon' | 'rare' | 'very-rare' | 'extremely-rare';
  availability: string;
  careNotes: string;
  imageUrl: string;
  category: 'common' | 'uncommon' | 'fluorescent' | 'rare';
  relatedMorphs: string[];
}

export const morphs: Morph[] = [
  // Common Varieties
  {
    slug: 'leucistic-pink',
    name: 'Leucistic (Pink)',
    scientificName: 'Ambystoma mexicanum (leucistic)',
    description: 'The most popular and recognizable axolotl morph, leucistic axolotls have pale pink skin with dark eyes and pink or red gills. They are often called "pink" axolotls and are the most commonly kept pet variety.',
    characteristics: [
      'Pale pink to white skin',
      'Dark black eyes',
      'Pink or red external gills',
      'May have dark speckling on body',
      'Translucent skin showing internal organs faintly',
    ],
    genetics: 'Leucism is caused by a recessive mutation that reduces pigment production in the skin, but not in the eyes. Both parents must carry the leucistic gene (ll) to produce leucistic offspring.',
    priceRange: { min: 30, max: 80 },
    rarity: 'common',
    availability: 'Readily available year-round from most breeders',
    careNotes: 'Standard axolotl care applies. Leucistic axolotls may show more visible dirt and debris on their light skin, requiring clean water.',
    imageUrl: '/images/morphs/leucistic-pink.jpg',
    category: 'common',
    relatedMorphs: ['albino-white', 'melanoid', 'wild-type'],
  },
  {
    slug: 'wild-type',
    name: 'Wild Type',
    scientificName: 'Ambystoma mexicanum (wild type)',
    description: 'Wild-type axolotls display the natural coloration found in the few remaining wild populations in Lake Xochimilco. They have olive-brown to gray-green skin with gold speckling.',
    characteristics: [
      'Olive-brown to gray-green base color',
      'Gold or iridescent speckling across body',
      'Dark eyes with gold rings',
      'Purple or gray gills',
      'Camouflage patterning',
    ],
    genetics: 'Wild-type is the dominant phenotype. Axolotls with at least one copy of the wild-type gene (W) will display wild-type coloration unless other mutations are present.',
    priceRange: { min: 25, max: 60 },
    rarity: 'common',
    availability: 'Readily available from most breeders',
    careNotes: 'Standard care. Their darker coloration makes them less sensitive to bright lights than lighter morphs.',
    imageUrl: '/images/morphs/wild-type.jpg',
    category: 'common',
    relatedMorphs: ['leucistic-pink', 'melanoid', 'copper'],
  },
  {
    slug: 'albino-golden',
    name: 'Albino Golden',
    scientificName: 'Ambystoma mexicanum (albino)',
    description: 'Golden albino axolotls lack melanin pigment, resulting in a golden-yellow to peach appearance with red or pink eyes. They are sensitive to bright light due to lack of eye pigment.',
    characteristics: [
      'Golden-yellow to peach skin color',
      'Red or pink eyes (no melanin)',
      'Bright red or pink gills',
      'Reflective skin with golden sheen',
      'May have shiny spots',
    ],
    genetics: 'Albinism is caused by a recessive mutation (a) that prevents melanin production. Albino axolotls lack all dark pigment and have light-sensitive eyes.',
    priceRange: { min: 35, max: 75 },
    rarity: 'common',
    availability: 'Commonly available from breeders',
    careNotes: 'Requires dim lighting or hiding spots due to light sensitivity. May need slightly cooler water temperatures.',
    imageUrl: '/images/morphs/albino-golden.jpg',
    category: 'common',
    relatedMorphs: ['albino-white', 'leucistic-pink', 'copper'],
  },
  {
    slug: 'albino-white',
    name: 'Albino White',
    scientificName: 'Ambystoma mexicanum (albino white)',
    description: 'White albinos are a variation of albino with very pale, almost white skin. They have the same red eyes as golden albinos but with reduced yellow pigmentation.',
    characteristics: [
      'Very pale white to cream skin',
      'Red or pink eyes',
      'Pale pink or white gills',
      'Translucent appearance',
      'May show slight golden tint',
    ],
    genetics: 'Same albino gene (a) as golden albinos, but with additional genetic factors that reduce yellow pigment expression.',
    priceRange: { min: 40, max: 85 },
    rarity: 'common',
    availability: 'Regularly available from breeders',
    careNotes: 'Same as golden albino - requires protection from bright light and plenty of hiding spots.',
    imageUrl: '/images/morphs/albino-white.jpg',
    category: 'common',
    relatedMorphs: ['albino-golden', 'leucistic-pink', 'melanoid'],
  },
  {
    slug: 'melanoid',
    name: 'Melanoid',
    scientificName: 'Ambystoma mexicanum (melanoid)',
    description: 'Melanoid axolotls are dark brown to black due to increased melanin production. They lack the shiny iridophores found in wild-types, giving them a matte appearance.',
    characteristics: [
      'Dark brown to black skin',
      'Matte finish (no iridophores)',
      'Dark eyes',
      'Dark purple to black gills',
      'Uniform coloration without speckling',
    ],
    genetics: 'Melanoid is caused by a recessive mutation (m) that increases melanin production while eliminating iridophores (shiny pigment cells).',
    priceRange: { min: 35, max: 70 },
    rarity: 'common',
    availability: 'Commonly available from breeders',
    careNotes: 'Standard care. Their dark coloration makes them excellent display animals that show up well in photos.',
    imageUrl: '/images/morphs/melanoid.jpg',
    category: 'common',
    relatedMorphs: ['wild-type', 'black-melanoid', 'leucistic-pink'],
  },
  // Uncommon Varieties
  {
    slug: 'copper',
    name: 'Copper',
    scientificName: 'Ambystoma mexicanum (copper)',
    description: 'Copper axolotls have a distinctive metallic copper or bronze appearance. They are a variation of albino with a unique color expression that gives them their metallic sheen.',
    characteristics: [
      'Metallic copper or bronze color',
      'Red eyes (albino trait)',
      'Copper-colored gills',
      'Shiny, reflective skin',
      'May darken with age',
    ],
    genetics: 'Copper is an albino variant (a) with specific genetic modifiers that produce the copper coloration. The exact genetics are complex and involve multiple genes.',
    priceRange: { min: 60, max: 200 },
    rarity: 'uncommon',
    availability: 'Limited breeders, seasonal availability',
    careNotes: 'Standard albino care - protect from bright light. Color may intensify or darken with age and diet.',
    imageUrl: '/images/morphs/copper.jpg',
    category: 'uncommon',
    relatedMorphs: ['albino-golden', 'wild-type', 'lavender'],
  },
  {
    slug: 'axanthic',
    name: 'Axanthic',
    scientificName: 'Ambystoma mexicanum (axanthic)',
    description: 'Axanthic axolotls lack yellow pigment (xanthophores), resulting in a gray or silver appearance. They can be combined with other morphs for unique color combinations.',
    characteristics: [
      'Gray to silver base color',
      'No yellow pigment',
      'Dark eyes',
      'Gray or purple gills',
      'Cool-toned appearance',
    ],
    genetics: 'Axanthic is caused by a recessive mutation (ax) that eliminates xanthophores (yellow pigment cells). Can be combined with albino, melanoid, or other genes.',
    priceRange: { min: 80, max: 250 },
    rarity: 'uncommon',
    availability: 'Limited availability from specialty breeders',
    careNotes: 'Standard care. Their unique coloration makes them popular among collectors.',
    imageUrl: '/images/morphs/axanthic.jpg',
    category: 'uncommon',
    relatedMorphs: ['melanoid', 'silver-dalmatian', 'lavender'],
  },
  {
    slug: 'lavender',
    name: 'Lavender',
    scientificName: 'Ambystoma mexicanum (lavender)',
    description: 'Lavender axolotls have a distinctive pale purple or lavender coloration. They are a relatively new morph that has gained popularity for their unique appearance.',
    characteristics: [
      'Pale purple or lavender skin',
      'Dark eyes',
      'Pink or purple gills',
      'May have darker spots',
      'Color intensifies with age',
    ],
    genetics: 'Lavender is caused by a combination of genes that reduce both melanin and yellow pigment, resulting in the purple appearance. The exact genetic mechanism is still being studied.',
    priceRange: { min: 75, max: 200 },
    rarity: 'uncommon',
    availability: 'Seasonal availability from select breeders',
    careNotes: 'Standard care. Color may change slightly with age and environmental factors.',
    imageUrl: '/images/morphs/lavender.jpg',
    category: 'uncommon',
    relatedMorphs: ['leucistic-pink', 'copper', 'axanthic'],
  },
  {
    slug: 'high-iridophore',
    name: 'High Iridophore',
    scientificName: 'Ambystoma mexicanum (high iridophore)',
    description: 'High iridophore axolotls have an increased number of shiny, reflective cells that give them a sparkling or glittery appearance. This trait can be combined with any base morph.',
    characteristics: [
      'Highly reflective, shiny skin',
      'Sparkling or glittery appearance',
      'Iridescent patches across body',
      'More pronounced in certain lighting',
      'Can be combined with other morphs',
    ],
    genetics: 'High iridophore is a genetic trait that increases the number and distribution of iridophores (shiny pigment cells). It can be expressed in any color morph.',
    priceRange: { min: 100, max: 300 },
    rarity: 'uncommon',
    availability: 'Selective breeding required, limited availability',
    careNotes: 'Standard care. Their reflective quality makes them stunning display animals under proper lighting.',
    imageUrl: '/images/morphs/high-iridophore.jpg',
    category: 'uncommon',
    relatedMorphs: ['wild-type', 'leucistic-pink', 'golden-albino-high-iridophore'],
  },
  // Fluorescent/Scientific Varieties
  {
    slug: 'gfp-green',
    name: 'GFP Green',
    scientificName: 'Ambystoma mexicanum (GFP)',
    description: 'GFP (Green Fluorescent Protein) axolotls glow bright green under blue or UV light due to a jellyfish protein inserted into their genome. They are widely used in scientific research.',
    characteristics: [
      'Glows bright green under UV/blue light',
      'Normal appearance in regular light',
      'Green fluorescence in all tissues',
      'Used in regeneration research',
      'Can be combined with any morph',
    ],
    genetics: 'GFP is a transgene inserted into the axolotl genome. It produces green fluorescent protein from jellyfish. The trait is heritable and can be crossed with any color morph.',
    priceRange: { min: 50, max: 150 },
    rarity: 'uncommon',
    availability: 'Available from scientific suppliers and breeders',
    careNotes: 'Standard care. Requires UV or blue LED light to see fluorescence. No special care needs related to GFP.',
    imageUrl: '/images/morphs/gfp-green.jpg',
    category: 'fluorescent',
    relatedMorphs: ['gfp-leucistic', 'firefly', 'rfp-red'],
  },
  {
    slug: 'rfp-red',
    name: 'RFP Red',
    scientificName: 'Ambystoma mexicanum (RFP)',
    description: 'RFP (Red Fluorescent Protein) axolotls glow red or orange under appropriate lighting. They are less common than GFP but equally fascinating for display and research.',
    characteristics: [
      'Glows red or orange under UV light',
      'Normal appearance in white light',
      'Red fluorescence throughout body',
      'Different glow color than GFP',
      'Research applications',
    ],
    genetics: 'RFP is a transgene producing red fluorescent protein, often from coral or other marine organisms. Similar to GFP but with different fluorescence properties.',
    priceRange: { min: 75, max: 200 },
    rarity: 'rare',
    availability: 'Limited availability from specialty breeders',
    careNotes: 'Standard care. Requires specific lighting to view red fluorescence effectively.',
    imageUrl: '/images/morphs/rfp-red.jpg',
    category: 'fluorescent',
    relatedMorphs: ['gfp-green', 'cfp-cyan', 'yfp-yellow'],
  },
  {
    slug: 'cfp-cyan',
    name: 'CFP Cyan',
    scientificName: 'Ambystoma mexicanum (CFP)',
    description: 'CFP (Cyan Fluorescent Protein) axolotls emit cyan or blue-green light under UV illumination. They are among the rarest fluorescent varieties.',
    characteristics: [
      'Glows cyan/blue-green under UV',
      'Distinct from GFP green glow',
      'Normal appearance in daylight',
      'Very rare variety',
      'Research applications',
    ],
    genetics: 'CFP is a modified fluorescent protein that emits in the cyan/blue spectrum. Extremely rare in the pet trade.',
    priceRange: { min: 100, max: 300 },
    rarity: 'rare',
    availability: 'Very limited availability',
    careNotes: 'Standard care. Requires UV lighting to observe cyan fluorescence.',
    imageUrl: '/images/morphs/cfp-cyan.jpg',
    category: 'fluorescent',
    relatedMorphs: ['gfp-green', 'yfp-yellow', 'rfp-red'],
  },
  {
    slug: 'yfp-yellow',
    name: 'YFP Yellow',
    scientificName: 'Ambystoma mexicanum (YFP)',
    description: 'YFP (Yellow Fluorescent Protein) axolotls emit yellow light under UV illumination. They are rare and prized by collectors for their unique glow.',
    characteristics: [
      'Glows yellow under UV light',
      'Bright yellow fluorescence',
      'Normal color in white light',
      'Rare variety',
      'Research and display value',
    ],
    genetics: 'YFP is a modified fluorescent protein variant that emits yellow light. Very rare in axolotls.',
    priceRange: { min: 100, max: 350 },
    rarity: 'rare',
    availability: 'Extremely limited availability',
    careNotes: 'Standard care. UV lighting required to observe yellow fluorescence.',
    imageUrl: '/images/morphs/yfp-yellow.jpg',
    category: 'fluorescent',
    relatedMorphs: ['gfp-green', 'cfp-cyan', 'rfp-red'],
  },
  {
    slug: 'firefly',
    name: 'Firefly',
    scientificName: 'Ambystoma mexicanum (firefly)',
    description: 'Firefly axolotls are created by grafting GFP tissue onto albino hosts, resulting in localized green fluorescence. They are controversial due to ethical concerns about the surgical procedure.',
    characteristics: [
      'Patches of GFP tissue glow green',
      'Albino base with fluorescent patches',
      'Unique pattern each individual',
      'Created through surgical grafting',
      'Ethical controversy',
    ],
    genetics: 'Firefly axolotls are not genetically modified but surgically created by transplanting GFP tissue onto albino hosts. The GFP tissue continues to grow and fluoresce.',
    priceRange: { min: 200, max: 500 },
    rarity: 'rare',
    availability: 'Limited due to ethical concerns and creation difficulty',
    careNotes: 'Standard care. The grafted tissue requires no special care. Be aware of ethical considerations before purchasing.',
    imageUrl: '/images/morphs/firefly.jpg',
    category: 'fluorescent',
    relatedMorphs: ['gfp-green', 'albino-white', 'albino-golden'],
  },
  // Rare Varieties
  {
    slug: 'mosaic',
    name: 'Mosaic',
    scientificName: 'Ambystoma mexicanum (mosaic)',
    description: 'Mosaic axolotls have patches of different colors due to a genetic mutation that occurs during early development. Each mosaic is completely unique and cannot be intentionally bred.',
    characteristics: [
      'Patches of different colors',
      'Each individual is unique',
      'Cannot be intentionally bred',
      'Random color distribution',
      'Highly prized by collectors',
    ],
    genetics: 'Mosaicism occurs due to a mutation during early cell division, creating patches of cells with different genetic expression. Cannot be predicted or selectively bred for.',
    priceRange: { min: 500, max: 2000 },
    rarity: 'very-rare',
    availability: 'Extremely rare, 1-10 available per year globally',
    careNotes: 'Standard care. Authentic mosaics should come with documentation due to high value and rarity.',
    imageUrl: '/images/morphs/mosaic.jpg',
    category: 'rare',
    relatedMorphs: ['chimera-split', 'piebald', 'enigma'],
  },
  {
    slug: 'chimera-split',
    name: 'Chimera Split',
    scientificName: 'Ambystoma mexicanum (chimera)',
    description: 'Chimera axolotls are split perfectly down the middle with two different color halves. They are extremely rare and result from the fusion of two embryos early in development.',
    characteristics: [
      'Perfectly split coloration',
      'Two distinct halves',
      'Extremely rare occurrence',
      'Cannot be bred intentionally',
      'Each side may have different traits',
    ],
    genetics: 'Chimeras result from the fusion of two developing embryos with different genetics. This creates an organism with two distinct sets of DNA in different body regions.',
    priceRange: { min: 1000, max: 5000 },
    rarity: 'extremely-rare',
    availability: '1-5 available per year globally',
    careNotes: 'Standard care. Extremely high value requires documentation and careful handling.',
    imageUrl: '/images/morphs/chimera-split.jpg',
    category: 'rare',
    relatedMorphs: ['mosaic', 'piebald', 'enigma'],
  },
  {
    slug: 'piebald',
    name: 'Piebald',
    scientificName: 'Ambystoma mexicanum (piebald)',
    description: 'Piebald axolotls have large irregular patches of white skin mixed with their base color. They are distinct from mosaics as the pattern follows specific genetic inheritance.',
    characteristics: [
      'Large white patches on colored base',
      'Irregular pattern distribution',
      'Inheritable trait',
      'Distinct from mosaic',
      'High collector value',
    ],
    genetics: 'Piebaldism is caused by specific genetic factors affecting pigment cell migration during development. Unlike mosaics, it can be inherited and selectively bred.',
    priceRange: { min: 300, max: 800 },
    rarity: 'rare',
    availability: 'Limited breeders working with piebald genetics',
    careNotes: 'Standard care. Pattern may change slightly as the animal grows.',
    imageUrl: '/images/morphs/piebald.jpg',
    category: 'rare',
    relatedMorphs: ['mosaic', 'leucistic-pink', 'enigma'],
  },
  {
    slug: 'enigma',
    name: 'Enigma',
    scientificName: 'Ambystoma mexicanum (enigma)',
    description: 'Enigma axolotls are a newly emerging morph with unique and unpredictable color patterns. They are still being studied and defined by the axolotl breeding community.',
    characteristics: [
      'Unique unpredictable patterns',
      'Still being defined genetically',
      'Emerging variety',
      'Highly variable appearance',
      'Collector interest',
    ],
    genetics: 'The genetics of enigma axolotls are still being studied. They appear to involve complex interactions between multiple pigment genes.',
    priceRange: { min: 400, max: 1200 },
    rarity: 'very-rare',
    availability: 'Very limited, emerging variety',
    careNotes: 'Standard care. As a developing morph, documentation and breeding records are important.',
    imageUrl: '/images/morphs/enigma.jpg',
    category: 'rare',
    relatedMorphs: ['mosaic', 'piebald', 'starburst'],
  },
  {
    slug: 'starburst',
    name: 'Starburst',
    scientificName: 'Ambystoma mexicanum (starburst)',
    description: 'Starburst axolotls have a distinctive pattern of radiating color lines or spots from the center of their body, resembling a starburst pattern.',
    characteristics: [
      'Radiating pattern from center',
      'Star-like color distribution',
      'Unique to each individual',
      'Rare pattern expression',
      'High visual impact',
    ],
    genetics: 'Starburst patterning appears to involve specific arrangements of pigment cells during development. The exact genetic mechanism is still being studied.',
    priceRange: { min: 350, max: 900 },
    rarity: 'rare',
    availability: 'Very limited availability',
    careNotes: 'Standard care. Pattern may become more defined as the animal matures.',
    imageUrl: '/images/morphs/starburst.jpg',
    category: 'rare',
    relatedMorphs: ['enigma', 'high-iridophore', 'mosaic'],
  },
  {
    slug: 'harlequin',
    name: 'Harlequin',
    scientificName: 'Ambystoma mexicanum (harlequin)',
    description: 'Harlequin axolotls display a diamond or checkerboard pattern across their body. They are extremely rare and highly sought after by serious collectors.',
    characteristics: [
      'Diamond or checkerboard pattern',
      'Geometric color distribution',
      'Extremely rare',
      'High collector value',
      'Distinct from other patterns',
    ],
    genetics: 'Harlequin patterning involves complex genetic factors affecting pigment cell distribution in a geometric pattern. Very difficult to produce consistently.',
    priceRange: { min: 600, max: 1500 },
    rarity: 'very-rare',
    availability: 'Extremely limited, few breeders working with this trait',
    careNotes: 'Standard care. Documentation important due to rarity and value.',
    imageUrl: '/images/morphs/harlequin.jpg',
    category: 'rare',
    relatedMorphs: ['mosaic', 'piebald', 'enigma'],
  },
  {
    slug: 'blue-gill',
    name: 'Blue Gill',
    scientificName: 'Ambystoma mexicanum (blue gill)',
    description: 'Blue gill axolotls have distinctive blue or purple-tinted external gills. This is a rare trait that can occur in various base color morphs.',
    characteristics: [
      'Blue or purple gill filaments',
      'Can occur in any base color',
      'Distinctive gill coloration',
      'Rare trait expression',
      'High visual appeal',
    ],
    genetics: 'Blue gill coloration appears to be a genetic trait affecting gill pigmentation specifically. Can be combined with other morphs.',
    priceRange: { min: 200, max: 600 },
    rarity: 'rare',
    availability: 'Limited availability from select breeders',
    careNotes: 'Standard care. Gill color may intensify with optimal water quality and diet.',
    imageUrl: '/images/morphs/blue-gill.jpg',
    category: 'rare',
    relatedMorphs: ['wild-type', 'axanthic', 'lavender'],
  },
  {
    slug: 'black-melanoid',
    name: 'Black Melanoid',
    scientificName: 'Ambystoma mexicanum (black melanoid)',
    description: 'Black melanoids are an extreme expression of the melanoid trait, appearing almost completely black with minimal other pigment expression.',
    characteristics: [
      'Nearly pure black coloration',
      'Minimal other pigment',
      'Matte finish',
      'Extreme melanoid expression',
      'Striking appearance',
    ],
    genetics: 'Black melanoids represent the extreme expression of the melanoid gene (m) with minimal influence from other pigment genes.',
    priceRange: { min: 150, max: 400 },
    rarity: 'uncommon',
    availability: 'Selective breeding required, limited availability',
    careNotes: 'Standard care. Their dark color makes them excellent for photography and display.',
    imageUrl: '/images/morphs/black-melanoid.jpg',
    category: 'rare',
    relatedMorphs: ['melanoid', 'wild-type', 'axanthic'],
  },
  {
    slug: 'golden-albino-high-iridophore',
    name: 'Golden Albino High Iridophore',
    scientificName: 'Ambystoma mexicanum (golden albino high iridophore)',
    description: 'This stunning morph combines golden albino coloration with extremely high iridophore expression, creating a shimmering golden appearance.',
    characteristics: [
      'Golden base color',
      'Extreme iridescence',
      'Shimmering appearance',
      'Red eyes (albino)',
      'Premium display animal',
    ],
    genetics: 'Combination of albino (a) genes with high iridophore expression. Requires careful selective breeding to achieve.',
    priceRange: { min: 250, max: 600 },
    rarity: 'rare',
    availability: 'Limited from specialty breeders',
    careNotes: 'Standard albino care - protect from bright light. Iridescence shows best under proper lighting.',
    imageUrl: '/images/morphs/golden-albino-high-iridophore.jpg',
    category: 'rare',
    relatedMorphs: ['albino-golden', 'high-iridophore', 'copper'],
  },
];

export function getMorphBySlug(slug: string): Morph | undefined {
  return morphs.find((morph) => morph.slug === slug);
}

export function getMorphsByCategory(category: Morph['category']): Morph[] {
  return morphs.filter((morph) => morph.category === category);
}

export function getAllMorphSlugs(): string[] {
  return morphs.map((morph) => morph.slug);
}

export function getRelatedMorphs(slug: string): Morph[] {
  const morph = getMorphBySlug(slug);
  if (!morph) return [];
  return morph.relatedMorphs
    .map((relatedSlug) => getMorphBySlug(relatedSlug))
    .filter((m): m is Morph => m !== undefined);
}

export function getRarityLabel(rarity: Morph['rarity']): string {
  switch (rarity) {
    case 'common':
      return 'Common';
    case 'uncommon':
      return 'Uncommon';
    case 'rare':
      return 'Rare';
    case 'very-rare':
      return 'Very Rare';
    case 'extremely-rare':
      return 'Extremely Rare';
    default:
      return rarity;
  }
}

export function getRarityColor(rarity: Morph['rarity']): string {
  switch (rarity) {
    case 'common':
      return 'bg-emerald-500';
    case 'uncommon':
      return 'bg-sky-500';
    case 'rare':
      return 'bg-violet-600';
    case 'very-rare':
      return 'bg-fuchsia-600';
    case 'extremely-rare':
      return 'bg-rose-600';
    default:
      return 'bg-slate-600';
  }
}
