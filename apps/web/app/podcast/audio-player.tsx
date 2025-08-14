'use client';

import { Card, Text } from '@thewolfbook/ui';

interface AudioPlayerProps {
  src?: string;
  title?: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  if (!src) {
    return (
      <Card style={{ padding: '1rem' }}>
        <Text>Select an episode to play</Text>
      </Card>
    );
  }

  return (
    <Card style={{ padding: '1rem' }}>
      {title && <Text style={{ marginBottom: '0.5rem' }}>{title}</Text>}
      <audio controls src={src} style={{ width: '100%' }} />
    </Card>
  );
}
