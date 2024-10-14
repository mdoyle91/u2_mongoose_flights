const db = require(`../db`);
const { Airport } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  const airports = [
    {
      name: "LaGuardia",
      location: "East Elmhurst, NY",
      code: "LGA",
    },
    {
      name: "JFK",
      location: "Queens, NY",
      code: "JFK",
    },
    {
      name: "Midway",
      location: "Chicago, IL",
      code: "MDW",
    },
    {
      name: "O'Hare",
      location: "Chicago, IL",
      code: "ORD",
    },
  ];

  await Airport.insertMany(airports);

  console.log(`Created airports!`);
};

const run = async () => {
  await main();

  db.close();
};

run();
