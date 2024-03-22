const express = require("express");
const router = express.Router();
const User = require("../model/user"); 
const usermodel = require("../model/user");

router.post("/register", async (req, res) => {
  const newUser = new User(req.body); 
  try {
    const savedUser = await newUser.save();
    res.send("User registered successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email: email, password: password }); // Fix typo in 'findOne'
    if (foundUser) {

        const temp=
        {
            name:foundUser.name,
            email:foundUser.email,
            _id:foundUser._id
        }
      res.send(temp);
    } else {
      return res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});


router.get('/getallusers', async (req, res) => {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  module.exports = router;