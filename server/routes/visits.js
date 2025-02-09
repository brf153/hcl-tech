const express = require("express");
const Visit = require("../models/Visit");
const router = express.Router();
const Participant = require("../models/Participant");
const { getRandomDateAndTime } = require("../utils/time");

// Schedule a visit
router.post("/new", async (req, res) => {
  try {
    const email = req.body.email;
    const participant = await Participant.findOne({ email });
    if (!participant) {
      return res.status(404).json({ error: "Participant not found" });
    }

    const visitData = {participant: participant._id, date: new Date(), sessionDate: getRandomDateAndTime(), status:"Ongoing"};
    const visit = new Visit(visitData);
    await visit.save();
    res.status(201).json(visit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all visits
router.get("/", async (req, res) => {
  const visits = await Visit.find().populate("participant");
  res.json(visits);
});

router.get("/:userId", async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.userId);

    if (!participant) {
      return res.status(404).json({ error: "Participant not found" });
    }

    const visit = await Visit.find({ participant: participant._id }); // Use find instead of findMany

    res.json(visit);

  } catch (error) {
    console.error("Error fetching visits:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
