import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Get job by ID
router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

// Post a new job
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

export default router;
