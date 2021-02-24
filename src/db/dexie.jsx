import Dexie from 'dexie';

const db = new Dexie('myDb');

db.version(1).stores({
    card: `++key,title,content`
});

// Open the database
db.open().catch(function (e) {
    console.error("Open failed: " + e);
});

// db.card.add({title: "Test Card", content: "Let's have the content here"});

export default db;