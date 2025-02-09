const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  participant: { type: mongoose.Schema.Types.ObjectId, ref: "Participant" },
  date: Date,
  sessionDate: Date,
  vitals: {
    heartRate: Number,
    bloodPressure: Number,
    respiratoryRate: Number,
    temperature: Number,
    oxygenSaturation: Number,
    weight: Number,
    height: Number,
    bloodGlucose: Number,
    electrocardiogram: String,
    urineOutput: Number,
  },
  labResults: String,
  adverseEvents: String,
});

module.exports = mongoose.model("Visit", visitSchema);
