const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Participant", "Admin"], required: true },
  dateOfBirth: { type: Date, required: true },
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female", "Non-Binary", "Other"], required: true },
  maritalStatus: { 
    type: String, 
    enum: ["Single", "Married", "Divorced", "Widowed", "Other"], 
    required: true 
  },

  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String }
  },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  employmentStatus: { 
    type: String, 
    enum: ["Employed", "Unemployed", "Retired", "Student", "Other"] 
  },
  occupation: { type: String },
  educationLevel: { 
    type: String, 
    enum: ["No Formal Education", "High School", "Bachelor’s Degree", "Master’s Degree", "Doctorate", "Other"] 
  },

  raceEthnicity: { 
    type: String, 
    enum: ["White", "Black/African American", "Asian", "Hispanic/Latino", "Native American", "Pacific Islander", "Mixed", "Other"] 
  },
  nationality: { type: String },
  primaryLanguages: [{ type: String }],

  healthStatus: { type: String },
  chronicConditions: [{ type: String }],
  disabilities: [{ type: String }],
  smoking: { type: Boolean },
  alcoholUse: { type: Boolean },
  drugUse: { type: Boolean },
  physicalActivityLevel: { type: String },

  visits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Visit" }],
}, { timestamps: true });

module.exports = mongoose.model("Participant", participantSchema);
