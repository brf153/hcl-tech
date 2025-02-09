require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const participantRoutes = require("./routes/participants");
const visitRoutes = require("./routes/visits");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/participants", participantRoutes);
app.use("/api/visits", visitRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => console.log("Server running on port 5000"));
