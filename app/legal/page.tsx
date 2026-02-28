import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Legal Information',
  description: 'General legal and compliance information for AxolotlHub content and tool usage.',
};

export default function Page() {
  return (
    <InfoPage badge="Legal" title="Legal Information" description="General legal information related to this website and content usage.">
      <p>Content is educational and not veterinary or legal advice. Local regulations on keeping and trading axolotls vary by region.</p>
    </InfoPage>
  );
}
