'use client';

import { useState } from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
  Ruler,
  Calculator,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Info,
} from 'lucide-react';
import Link from 'next/link';

export default function TankSizeCalculatorPage() {
  const [axolotlCount, setAxolotlCount] = useState(1);
  const [axolotlAge, setAxolotlAge] = useState<'juvenile' | 'adult'>('adult');
  const [showResults, setShowResults] = useState(false);

  // Calculate minimum tank size
  const baseSize = 20; // gallons for 1 adult
  const additionalSize = axolotlAge === 'juvenile' ? 5 : 10;
  const minTankSize = baseSize + (axolotlCount - 1) * additionalSize;

  // Calculate dimensions (standard 20 gallon = 30" x 12" x 12")
  const baseLength = 30;
  const baseWidth = 12;
  const baseHeight = 12;

  const scaleFactor = Math.pow(minTankSize / 20, 1 / 3);
  const length = Math.round(baseLength * scaleFactor);
  const width = Math.round(baseWidth * scaleFactor);
  const height = Math.round(baseHeight * scaleFactor);

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-water-surface">
        {/* Hero */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-bioluminescent/20 to-water-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-bioluminescent/10 text-bioluminescent">
                <Calculator className="w-3 h-3 mr-1" />
                Interactive Tool
              </Badge>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-abyss mb-4">
                Tank Size Calculator
              </h1>
              <p className="text-lg text-deep-abyss/70">
                Calculate the minimum tank size for your axolotl based on count and age.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-bioluminescent" />
                    Input Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Axolotl Count */}
                  <div className="space-y-3">
                    <Label className="text-base">
                      Number of Axolotls: <span className="font-bold text-bioluminescent">{axolotlCount}</span>
                    </Label>
                    <Slider
                      value={[axolotlCount]}
                      onValueChange={(value) => setAxolotlCount(value[0])}
                      min={1}
                      max={6}
                      step={1}
                    />
                    <div className="flex justify-between text-sm text-deep-abyss/60">
                      <span>1</span>
                      <span>6</span>
                    </div>
                  </div>

                  {/* Age Selection */}
                  <div className="space-y-3">
                    <Label className="text-base">Axolotl Age</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setAxolotlAge('juvenile')}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          axolotlAge === 'juvenile'
                            ? 'border-bioluminescent bg-bioluminescent/10'
                            : 'border-border hover:border-bioluminescent/50'
                        }`}
                      >
                        <div className="font-semibold text-deep-abyss">Juvenile</div>
                        <div className="text-sm text-deep-abyss/60">Under 6 inches</div>
                      </button>
                      <button
                        onClick={() => setAxolotlAge('adult')}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          axolotlAge === 'adult'
                            ? 'border-bioluminescent bg-bioluminescent/10'
                            : 'border-border hover:border-bioluminescent/50'
                        }`}
                      >
                        <div className="font-semibold text-deep-abyss">Adult</div>
                        <div className="text-sm text-deep-abyss/60">6+ inches</div>
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handleCalculate}
                    className="w-full bg-bioluminescent text-deep-abyss"
                    size="lg"
                  >
                    Calculate Tank Size
                  </Button>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className={showResults ? '' : 'opacity-50'}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-algae-green" />
                    Recommended Tank Size
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {showResults ? (
                    <>
                      <div className="text-center p-6 bg-bioluminescent/10 rounded-xl">
                        <div className="text-5xl font-bold text-bioluminescent mb-2">
                          {minTankSize}
                        </div>
                        <div className="text-deep-abyss/60">Gallons (minimum)</div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-water-surface rounded-lg">
                          <div className="text-2xl font-bold text-deep-abyss">{length}&quot;</div>
                          <div className="text-sm text-deep-abyss/60">Length</div>
                        </div>
                        <div className="text-center p-4 bg-water-surface rounded-lg">
                          <div className="text-2xl font-bold text-deep-abyss">{width}&quot;</div>
                          <div className="text-sm text-deep-abyss/60">Width</div>
                        </div>
                        <div className="text-center p-4 bg-water-surface rounded-lg">
                          <div className="text-2xl font-bold text-deep-abyss">{height}&quot;</div>
                          <div className="text-sm text-deep-abyss/60">Height</div>
                        </div>
                      </div>

                      <div className="p-4 bg-algae-green/10 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Info className="w-5 h-5 text-algae-green flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-deep-abyss/70">
                            <strong>Tip:</strong> Long tanks are better than tall tanks 
                            for axolotls. They spend most of their time on the bottom and 
                            need floor space more than height.
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12 text-deep-abyss/50">
                      Click &quot;Calculate Tank Size&quot; to see results
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="max-w-5xl mx-auto mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Important Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-algae-green flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-deep-abyss mb-1">
                          Floor Space Matters
                        </h4>
                        <p className="text-sm text-deep-abyss/60">
                          Axolotls need more floor space than height. A 20-gallon 
                          long tank is better than a 20-gallon high tank.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-algae-green flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-deep-abyss mb-1">
                          Bigger is Better
                        </h4>
                        <p className="text-sm text-deep-abyss/60">
                          These are minimum sizes. Larger tanks are easier to 
                          maintain stable water parameters.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-gill-red flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-deep-abyss mb-1">
                          Avoid Overcrowding
                        </h4>
                        <p className="text-sm text-deep-abyss/60">
                          Overcrowded tanks lead to stress, poor water quality, 
                          and potential aggression between axolotls.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-bioluminescent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-deep-abyss mb-1">
                          Filtration Required
                        </h4>
                        <p className="text-sm text-deep-abyss/60">
                          All tanks need proper filtration. Use gentle filters 
                          as axolotls prefer low water flow.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
