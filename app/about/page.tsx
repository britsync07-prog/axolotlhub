import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'About AxolotlHub',
  description: 'About the mission and editorial direction of AxolotlHub.',
};

export default function Page() {
  return (
    <InfoPage badge="About" title="About AxolotlHub" description="A focused knowledge hub for axolotl keepers.">
      <p>AxolotlHub organizes practical care guidance, morph references, and tools into one searchable site for hobbyists and breeders.</p>
    </InfoPage>
  );
}
