db = db.getSiblingDB('superhero');

db.createCollection('superheros');

db.sample_collection.insertMany([
 {
    name: 'Batman'
  },
  {
    name: 'Iron Man'
  }
]);