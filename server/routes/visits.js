const express = require("express");
const Visit = require("../models/Visit");
const router = express.Router();

// Schedule a visit
router.post("/schedule", async (req, res) => {
  try {
    const visit = new Visit(req.body);
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

module.exports = router;
