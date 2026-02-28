import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Feeding Calculator',
  description: 'Simple feeding cadence guidance by life stage and observed body condition.',
};

export default function Page() {
  return (
    <InfoPage badge="Tool" title="Feeding Calculator" description="Adjust feeding frequency based on age, appetite, and body condition.">
      <h2>Starter Guidance</h2>
      <ul>
        <li>Juveniles: frequent small feedings.</li>
        <li>Adults: less frequent, controlled portions.</li>
        <li>Re-check after growth or seasonal appetite changes.</li>
      </ul>
    </InfoPage>
  );
}
