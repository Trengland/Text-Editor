import { openDB } from 'idb';

const dbPromise = openDB('jate', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('jate')) {
      const store = db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      store.createIndex('content', 'content', { unique: false });
      console.log('jate database created');
    }
  },
});
// TODO: Add logic to a method that accepts some content and adds it to the database - complete
export const putDb = async (content) => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put({ content });
  await tx.complete;
  console.log('Content added to the database');
};
// TODO: Add logic for a method that gets all the content from the database - complete
export const getDb = async () => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const content = await store.getAll();
  await tx.complete;
  return content;
};

export default dbPromise;
