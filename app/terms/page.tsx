import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing usage of AxolotlHub content and tools.',
};

export default function Page() {
  return (
    <InfoPage badge="Legal" title="Terms of Service" description="Terms and conditions for using this website.">
      <p>By using this site, you agree to lawful use of content and acknowledge that informational content is provided as-is.</p>
    </InfoPage>
  );
}
