const express = require("express");
const router = express.Router();
const Stype = require('../model/stype');



router.post('/add', async (req, res) => {
    try {
      const newStype = new Stype({ stype: req.body.stype });
      const savedStype = await newStype.save();
      res.status(201).json(savedStype);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/', async (req, res) => {
      try {
        const stypes = await Stype.find();
        res.json(stypes);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  
    router.post('/getstypebyid', async (req, res) => {
      const stypeId = req.body.stypeId;
    
      try {
        const stype = await Stype.findById(stypeId);
    
        if (!stype) {
          return res.status(404).send('Type not found');
        }
    
        res.json(stype);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });
    
    // Route to update a type
    router.put('/updatestype', async (req, res) => {
      const stypeId = req.body.stypeId;
      const updatedStypeDetails = req.body;
    
      try {
        const updatedStype = await Stype.findByIdAndUpdate(
          stypeId,
          { $set: updatedStypeDetails },
          { new: true } // Return the updated document
        );
    
        if (!updatedStype) {
          return res.status(404).send('Stype not found');
        }
    
        res.json(updatedStype);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });
  
    router.put('/activate/:id', async (req, res) => {
      try {
        const stype = await Stype.findById(req.params.id);
        if (!stype) {
          return res.status(404).json({ message: "Type not found" });
        }
        stype.display = true; // Assuming 'display' is the property to control book activation
        await stype.save();
        res.json(stype);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
    
    // Deactivate type
    router.put('/deactivate/:id', async (req, res) => {
      try {
        const stype = await Stype.findById(req.params.id);
        if (!stype) {
          return res.status(404).json({ message: "Stype not found" });
        }
        stype.display = false;
        await stype.save();
        res.json(stype);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    module.exports = router;

    // http://localhost:3500/stypes/add