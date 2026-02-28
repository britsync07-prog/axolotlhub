import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy overview for AxolotlHub website usage.',
};

export default function Page() {
  return (
    <InfoPage badge="Legal" title="Privacy Policy" description="Summary of data handling practices for this site.">
      <p>We minimize personal data collection and use analytics only for site quality and performance improvements.</p>
    </InfoPage>
  );
}
