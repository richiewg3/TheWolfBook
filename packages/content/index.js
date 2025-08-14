const fs = require('fs');
const path = require('path');

const CONTENT_ROOT = path.join(__dirname, '..', '..', 'content', 'books');

function getBooks() {
  if (!fs.existsSync(CONTENT_ROOT)) return [];
  return fs.readdirSync(CONTENT_ROOT, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function getChapters(bookId) {
  const bookPath = path.join(CONTENT_ROOT, bookId);
  if (!fs.existsSync(bookPath)) return [];
  return fs.readdirSync(bookPath, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.mdx'))
    .map((dirent) => dirent.name.replace(/\.mdx$/, ''));
}

function parseFrontMatter(source) {
  if (source.startsWith('---')) {
    const end = source.indexOf('\n---', 3);
    if (end !== -1) {
      const raw = source.slice(3, end).trim();
      const content = source.slice(end + 4).trim();
      const meta = {};
      raw.split('\n').forEach((line) => {
        const idx = line.indexOf(':');
        if (idx !== -1) {
          const key = line.slice(0, idx).trim();
          const value = line.slice(idx + 1).trim();
          meta[key] = value;
        }
      });
      return { meta, content };
    }
  }
  return { meta: {}, content: source };
}

function getChapter(bookId, chapterId) {
  const filePath = path.join(CONTENT_ROOT, bookId, `${chapterId}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const source = fs.readFileSync(filePath, 'utf8');
  const { meta, content } = parseFrontMatter(source);
  return { meta, content };
}

module.exports = {
  getBooks,
  getChapters,
  getChapter,
};
