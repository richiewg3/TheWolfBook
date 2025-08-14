'use client';

import { useState } from 'react';
import { Container, Heading } from '@thewolfbook/ui';
import EpisodeList, { Episode } from './episode-list';
import AudioPlayer from './audio-player';

const mockEpisodes: Episode[] = [
  {
    id: 1,
    title: 'Episode 1',
    description: 'The first episode of our podcast.',
    audioUrl: '/audio/episode1.mp3',
  },
  {
    id: 2,
    title: 'Episode 2',
    description: 'Another thrilling episode.',
    audioUrl: '/audio/episode2.mp3',
  },
];

export default function PodcastPage() {
  const [current, setCurrent] = useState<Episode | null>(null);

  return (
    <Container style={{ display: 'grid', gap: '1rem' }}>
      <Heading>Podcast</Heading>
      <EpisodeList episodes={mockEpisodes} onSelect={setCurrent} />
      <AudioPlayer src={current?.audioUrl} title={current?.title} />
    </Container>
  );
}
