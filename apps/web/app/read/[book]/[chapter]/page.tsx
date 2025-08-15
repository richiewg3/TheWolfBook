import React from 'react';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [
    { book: 'book-1', chapter: '1' },
  ];
}

interface ChapterPageProps {
  params: { book: string; chapter: string };
}

export default function Page({ params }: ChapterPageProps) {
  const { book, chapter } = params;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book {book} - Chapter {chapter}</h1>
      <p>Content coming soon.</p>
    </div>
  );
}
