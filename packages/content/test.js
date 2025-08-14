const { getBooks, getChapters, getChapter } = require('./index');

console.log('Books:', getBooks());
console.log('Wolves chapters:', getChapters('wolves'));
console.log('Chapter data:', getChapter('wolves', 'chapter-1'));
