const express = require('express');
const router = express.Router();
const Booking = require('../model/book'); 
const Scan = require("../model/scan");


router.post('/bookscan', async (req, res) => {
  try {
    const { userId,userEmail, pname, page, scanId, scanName, scanType, totalAmount, selectedDate } = req.body;

    
    const newBooking = new Booking({
      userid: userId,
      useremail: userEmail,
      pname: pname,
      page: page,
      scanid: scanId,
      scanname: scanName,
      scantype: scanType,
      totalamount: totalAmount,
      selectedDate: selectedDate,
      status: 'pending'
    });


    const savedBooking = await newBooking.save();

    const scan = await Scan.findById(scanId);


    if (scan) {
     
      scan.currentbookings.push(savedBooking);
      await scan.save();

      savedBooking.status = 'booked';
      await savedBooking.save();
    } else {
      console.log('Scan not found');
    }

    res.status(201).json(savedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/allbookings', async (req, res) => {
    try {
      const allBookings = await Booking.find();
      
      res.status(200).json(allBookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/getallbookingsbyuserid', async (req, res) => {
    try {
      const { userId } = req.query;
  
      const userBookings = await Booking.find({ userid: userId });
  
      res.status(200).json(userBookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/cancelbooking', async (req, res) => {
    try {
        const { bookingid } = req.body;

        const booking = await Booking.findById(bookingid);

        if (booking) {
            booking.status = 'cancelled';
            await booking.save();

            const scan = await Scan.findById(booking.scanid);

            if (scan) {
                scan.currentbookings = scan.currentbookings.filter(
                    (currentBooking) => currentBooking.toString() !== bookingid
                );
                await scan.save();
            } else {
                console.log('Scan not found');
            }

            res.status(200).json({ message: 'Booking cancelled successfully' });
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  
  
  module.exports = router;


module.exports = router;
