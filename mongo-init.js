db = db.getSiblingDB('superheros');

db.createCollection('heros');

db.heros.insertMany([
 {
    id: 1, 
    name: 'Batman',
    realName: 'Bruce Wayne',
    height: `6' 2"`,
    weight: "210 lbs(95 kg)",
    city: "Gotham City"
  },
  {
    id: 2,
    name: 'Ironman',
    realName: "Tony Stark",
    height: `5' 9"`,
    weight: "185 lbs(84 kg)",
    city: 'Los Angeles, California'
  },
  {
    id: 3,
    name: 'Spiderman',
    realName: 'Peter Parker',
    height: `5' 10"`,
    weight: '167 lbs(76 kg)',
    city: 'New Jork'
  }
]);