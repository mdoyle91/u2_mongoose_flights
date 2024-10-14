const db = require(`../db`);
const { Airport, Flight } = require(`../models`);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const oHare = await Airport.find({ name: "O'Hare" });
  const midway = await Airport.find({ name: "Midway" });
  const jfk = await Airport.find({ name: "JFK" });
  const laGuardia = await Airport.find({ name: "LaGuardia" });

  const flights = [
    {
      airline: "Delta",
      flight: 1234,
      price: 100,
      numberOfSeats: 99,
      departingAirport: oHare[0]._id,
    },
    {
      airline: "United",
      flight: 5678,
      price: 150,
      numberOfSeats: 85,
      departingAirport: midway[0]._id,
    },
    {
      airline: "American Airlines",
      flight: 9101,
      price: 120,
      numberOfSeats: 90,
      departingAirport: jfk[0]._id,
    },
    {
      airline: "Southwest",
      flight: 2345,
      price: 110,
      numberOfSeats: 80,
      departingAirport: laGuardia[0]._id,
    },
    {
      airline: "JetBlue",
      flight: 6789,
      price: 130,
      numberOfSeats: 95,
      departingAirport: oHare[0]._id,
    },
    {
      airline: "Spirit",
      flight: 3456,
      price: 90,
      numberOfSeats: 100,
      departingAirport: midway[0]._id,
    },
    {
      airline: "Alaska Airlines",
      flight: 7890,
      price: 140,
      numberOfSeats: 88,
      departingAirport: jfk[0]._id,
    },
  ];

  await Flight.insertMany(flights);
  console.log("Created flights with airports!");
};
const run = async () => {
  await main();
  db.close();
};

run();
