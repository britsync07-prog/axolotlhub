import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Axolotl Health and Common Issues',
  description: 'Warning signs, early intervention basics, and environment checks for common axolotl health problems.',
};

export default function Page() {
  return (
    <InfoPage badge="Care Guide" title="Health and Disease" description="Most problems start with husbandry. Diagnose water and stress first.">
      <h2>What to Monitor</h2>
      <ul>
        <li>Appetite changes and weight loss.</li>
        <li>Gills curling forward from stress.</li>
        <li>Skin lesions or fungal patches.</li>
      </ul>
    </InfoPage>
  );
}
