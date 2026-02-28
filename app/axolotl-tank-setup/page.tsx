import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Axolotl Tank Setup Guide',
  description: 'Practical checklist for building a healthy axolotl tank with safe filtration, substrate, hides, and cycling steps.',
};

export default function Page() {
  return (
    <InfoPage badge="Care Guide" title="Axolotl Tank Setup" description="Set up a stable, low-stress habitat before adding your axolotl.">
      <h2>Tank Setup Checklist</h2>
      <ul>
        <li>Use a long tank with enough floor space.</li>
        <li>Cycle the aquarium fully before stocking.</li>
        <li>Keep water cool and stable.</li>
        <li>Use low-flow filtration and provide hides.</li>
      </ul>
    </InfoPage>
  );
}
