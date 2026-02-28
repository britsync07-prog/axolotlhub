import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact options for support, corrections, and partnership inquiries.',
};

export default function Page() {
  return (
    <InfoPage badge="Contact" title="Contact" description="For support and corrections, contact the AxolotlHub team.">
      <p>Email: support@axolotlhub.com</p>
      <p>For factual corrections, include the page URL and proposed correction text.</p>
    </InfoPage>
  );
}
