const db = require(`../db`); //I'm not able to get the query.js file to run when I type in "node seed/server.js"--I'm not really sure what the issuse is as the error message said that ./db module couldn't be found. When I compared to the intro code, the ./db was only on the query page.--I used ChatGPT to figure this out. It had me add an extra dor to "../db," then I got that error again with "./mdoels" and just tried changing it to "..models" and it worked. I'm confused as to why, though.
const { Flight, Airport } = require("../models");

const findFlights = async () => {
  const flights = await Flight.find();
  console.log(flights);
};

const findInfoById = async () => {
  const airportIds = "670d930c2d853c48ebc3cbfc";
  const flightIds = "670d931ce8dcf97efb02cbfa";

  let findAirportById = await Airport.findById(airportIds);
  let findFlightById = await Flight.findById(flightIds);
  console.log(findAirportById);
  console.log(findFlightById);
};

const createFlight = async () => {
  const airport = await Airport.findOne({ name: "JFK" });

  let flight = await Flight.create({
    airline: "Etihad",
    flight: 9876,
    price: 50,
    numberOfSeats: 199,
    departingAirport: airport._id,
  });
  console.log(flight);
};

const updateFlight = async () => {
  const updated = await Flight.updateOne({ flight: 3456 }, { flight: 7891 });
  console.log(updated);
};

const updateAirport = async () => {
  const updated = await Airport.updateOne(
    { name: "LaGuardia" },
    { location: "Queens, NY" }
  );
  console.log(updated);
};

const deleteFlight = async () => {
  let deleted = await Flight.deleteOne({ airline: "Alaska Airlines" });
  console.log(deleted);
};

const deleteAirport = async () => {
  let deleted = await Airport.deleteOne({ name: "Midway" });
  console.log(deleted);
};

async function main() {
  try {
    await findFlights();
    await findInfoById();
    await createFlight();
    await updateFlight();
    await updateAirport();
    await deleteFlight();
    await deleteAirport();
  } catch (error) {
    console.log(error);
  } finally {
    await db.close();
  }
}

main();
