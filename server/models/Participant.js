const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  heartRate: Number,
  consentGiven: Boolean,
  visits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Visit" }],
});

module.exports = mongoose.model("Participant", participantSchema);
