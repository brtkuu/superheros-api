db = db.getSiblingDB('superheros');

db.createCollection('heros');

db.heros.insertMany([
 {
    name: 'Batman',
    realName: 'Bruce Wayne',
    height: `6' 2"`,
    weight: "210 lbs(95 kg)",
    city: "Gotham City"
  },
  {
    name: 'Iron Man',
    realName: "Tony Stark",
    height: `5' 9"`,
    weight: "185 lbs(84 kg)",
    city: 'Los Angeles, California'
  },
  {
    name: 'Spiderman',
    realName: 'Peter Parker',
    height: `5' 10"`,
    weight: '167 lbs(76 kg)',
    city: 'New Jork'
  }
]);