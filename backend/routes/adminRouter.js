const express = require("express");
const router = express.Router();
const adminmodel = require("../model/admin");
const Admin = require("../model/admin"); 



router.post("/register", async (req, res) => {
    const newAdmin = new Admin(req.body); 
    try {
      const savedAdmin = await newAdmin.save();
      res.send("User registered successfully");
    } catch (error) {
      return res.status(400).json({ error });
    }
  });
  
  
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const foundAdmin = await Admin.findOne({ email: email, password: password });
  
      if (foundAdmin) {  // Fix: Change foundUser to foundAdmin
        const temp = {
          name: foundAdmin.name,
          email: foundAdmin.email,
          _id: foundAdmin._id
        };
        res.send(temp);
      } else {
        return res.status(400).json({ message: "Login Failed" });
      }
    } catch (error) {
      return res.status(400).json({ error });
    }
  });
  module.exports = router;