import { openDB } from "idb";

const initdb = async () => {
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });
};

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  const text = jateDb.transaction('jate', 'readwrite');
  const store = text.objectStore('jate');
  const request = store.put({ value: content });
  const contents = await request;

  if (contents) {
    console.log("The data has been saved to the IndexedDB", contents);
  } else {
    console.error("putDb not implemented");
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const text = jateDb.transaction('jate', 'readonly');
  const store = text.objectStore('jate');
  const request = store.getAll();
  const contents = await request;
  
  if (contents) {
    console.log('Retrieving all of the content from the IndexedDB', contents);
  } else {
    console.error("getDb not implemented");
  }
}

initdb();