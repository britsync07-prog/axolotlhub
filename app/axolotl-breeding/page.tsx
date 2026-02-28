import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Axolotl Breeding Guide',
  description: 'Responsible breeding basics, pairing considerations, and hatchling care fundamentals.',
};

export default function Page() {
  return (
    <InfoPage badge="Care Guide" title="Breeding Guide" description="Breed responsibly with planning for egg and juvenile care capacity.">
      <h2>Responsible Breeding</h2>
      <ul>
        <li>Confirm lineage and avoid unsafe pairings.</li>
        <li>Prepare grow-out space before breeding attempts.</li>
        <li>Plan feeding and separation logistics for hatchlings.</li>
      </ul>
    </InfoPage>
  );
}
