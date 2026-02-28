import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Morph Price Estimator',
  description: 'A planning reference for how rarity, lineage, and age can influence axolotl morph pricing.',
};

export default function Page() {
  return (
    <InfoPage badge="Tool" title="Morph Price Estimator" description="Use rarity and lineage as rough planning signals, not guarantees.">
      <h2>Price Factors</h2>
      <ul>
        <li>Morph rarity and current availability.</li>
        <li>Lineage documentation and breeder reputation.</li>
        <li>Age, size, and local demand.</li>
      </ul>
    </InfoPage>
  );
}
