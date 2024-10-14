const { Schema } = require("mongoose");

const Flight = new Schema(
  {
    airline: { type: String, required: true },
    flight: { type: Number, required: true },
    price: { type: Number, required: true },
    numberOfSeats: { type: Number, required: true },
    departingAirport: { type: Schema.Types.ObjectId, ref: "airport_id" },
  },
  { timestamps: true }
);

module.exports = Flight;
