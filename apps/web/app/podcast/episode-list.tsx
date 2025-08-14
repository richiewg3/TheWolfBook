'use client';

import { Card, Heading, Text, Button } from '@thewolfbook/ui';

export interface Episode {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
}

interface EpisodeListProps {
  episodes: Episode[];
  onSelect?: (episode: Episode) => void;
}

export default function EpisodeList({ episodes, onSelect }: EpisodeListProps) {
  return (
    <div>
      {episodes.map((ep) => (
        <Card key={ep.id} style={{ marginBottom: '1rem', padding: '1rem' }}>
          <Heading>{ep.title}</Heading>
          <Text>{ep.description}</Text>
          <Button onClick={() => onSelect?.(ep)}>Play</Button>
        </Card>
      ))}
    </div>
  );
}
