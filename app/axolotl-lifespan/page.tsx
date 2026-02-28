import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Axolotl Lifespan Guide',
  description: 'How water quality, diet, genetics, and stress management influence axolotl lifespan in captivity.',
};

export default function Page() {
  return (
    <InfoPage badge="Discover" title="Axolotl Lifespan" description="Healthy captive axolotls can live many years with stable care.">
      <h2>Lifespan Drivers</h2>
      <ul>
        <li>Stable cool water and low ammonia exposure.</li>
        <li>Consistent high-quality nutrition.</li>
        <li>Low-stress habitat and proper stocking density.</li>
      </ul>
    </InfoPage>
  );
}
