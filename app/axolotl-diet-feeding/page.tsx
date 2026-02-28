import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Axolotl Diet and Feeding',
  description: 'Simple feeding guide by age, with portion control and staple foods for healthy growth.',
};

export default function Page() {
  return (
    <InfoPage badge="Care Guide" title="Diet and Feeding" description="Feed quality staples in age-appropriate portions and track body condition.">
      <h2>Feeding Basics</h2>
      <ul>
        <li>Primary staples: earthworms and high-quality pellets.</li>
        <li>Juveniles eat more frequently than adults.</li>
        <li>Remove leftovers quickly to protect water quality.</li>
      </ul>
    </InfoPage>
  );
}
