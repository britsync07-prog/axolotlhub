import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Breeders Directory',
  description: 'Directory landing page for breeder resources and evaluation criteria.',
};

export default function Page() {
  return (
    <InfoPage badge="Directory" title="Breeders Directory" description="Use breeder screening criteria before purchasing.">
      <ul>
        <li>Ask for lineage and health history.</li>
        <li>Request recent photos and current setup details.</li>
        <li>Confirm transport and weather-safe shipping policy.</li>
      </ul>
    </InfoPage>
  );
}
