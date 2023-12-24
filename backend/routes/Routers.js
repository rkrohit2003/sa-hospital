const express = require("express");
const Hospital = require("../models/hospital");
const router = new express.Router();
const multer = require('multer');
const upload = multer();

router.post('/api/login', async (req, res) => {
  try {
    const hospitalCount = await Hospital.find({ hospitalName: req.body.hospitalName, emailId: req.body.emailId, password: req.body.password }).count();
    res.status(201).json(hospitalCount);
  }
  catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ error: 'Failed to find hospital' });
  }
})

router.get('/api/hospitals', async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  }
  catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ error: 'Failed to fetch hospitals' });
  }
})

router.post('/api/hospital', upload.none(), async (req, res) => {
//   console.log(req.body);
  try {
    const newHospital = new Hospital(req.body);
    const savedHospital = await newHospital.save();
    res.status(201).json(savedHospital);
  }
  catch (error) {
    console.error('Error creating hospital:', error);
    res.status(500).json({ error: 'Failed to create hospital' });
  }
})

module.exports = router;