import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Water Parameter Checker',
  description: 'Reference values and quick interpretation for common axolotl water test results.',
};

export default function Page() {
  return (
    <InfoPage badge="Tool" title="Water Parameter Checker" description="Use your test kit results to verify baseline water safety.">
      <h2>Target Ranges</h2>
      <ul>
        <li>Ammonia: 0 ppm</li>
        <li>Nitrite: 0 ppm</li>
        <li>Nitrate: as low as practical with regular maintenance</li>
      </ul>
    </InfoPage>
  );
}
