const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  participant: { type: mongoose.Schema.Types.ObjectId, ref: "Participant" },
  date: Date,
  vitals: {
    heartRate: Number,
    bloodPressure: String,
  },
  labResults: String,
  adverseEvents: String,
});

module.exports = mongoose.model("Visit", visitSchema);
