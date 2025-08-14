# Content Package

Utilities for loading book and chapter content stored as MDX files.

MDX files are expected under `content/books/<book>/<chapter>.mdx` at the repository root.

## API

- `getBooks()` – list all book ids
- `getChapters(bookId)` – list chapter ids for a book
- `getChapter(bookId, chapterId)` – return `{ meta, content }` for a chapter

Front matter in each MDX file is parsed as simple key/value pairs.

## Example

```js
const { getBooks, getChapters, getChapter } = require('./index');

console.log(getBooks());
// ['wolves', 'rabbits']

console.log(getChapters('wolves'));
// ['chapter-1', 'chapter-2']

console.log(getChapter('wolves', 'chapter-1'));
// { meta: { title: 'Wolves Chapter 1' }, content: '# Wolves Chapter 1\n\nThis is the first chapter...' }
```

A small sample dataset is included in `content/books` for testing.
