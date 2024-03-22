import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import axios from 'axios';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography, TextField, Paper, FormControl } from '@mui/material';
import Swal from 'sweetalert2';
import Layout from '../components/Layout';
import Success from '../../components/Success';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Bookingscreen = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [scan, setScan] = useState(null);
  const [totalamount, setTotalamount] = useState(null);
  const [pname, setPname] = useState('');
  const [page, setPage] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3500/scans/getscanbyid/${id}`);
        const updatedScan = {
          ...response.data,
          imageUrl: response.data.scanImageURL
            ? `data:${response.data.scanImageURL.contentType};base64,${response.data.scanImageURL.data}`
            : null,
        };
        setScan(updatedScan);
        setTotalamount(updatedScan.samount);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const onBookNow = async () => {
    try {
      setLoading(true);
      const formattedDate = selectedDate ? new Date(selectedDate.getTime() + (330 * 60000)) : null;
      
      const result = await axios.post('http://localhost:3500/book/bookscan', {
        userId: JSON.parse(localStorage.getItem('currentuser'))._id,
        userEmail: JSON.parse(localStorage.getItem('currentuser')).email,
        scanId: id,
        scanName: scan.sname,
        scanType: scan.stype,
        totalAmount: totalamount,
        selectedDate: formattedDate,
        pname: pname,
        page: page,
      });

      setLoading(false);
      Swal.fire("Booking Successful");
      setSuccess("Successfully booked");
      setError(false);
    } catch (error) {
      setSuccess(false);
      setError("Error occurred");
      setLoading(false);
    }
  }

  return (
    <div>
      {error && <Error message={"Error Occurred"} />}
      {success && <Success message={"Booking successful"} />}
      <Layout>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {loading && <Loader />}
          {error && <Error />}
          {scan && (
            <Card sx={{ width: "700px", margin: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ width: "100%", height: "300px" }}
                  component="img"
                  src={scan.imageUrl || ''}
                  alt={scan.sname}
                />
                <CardContent>
                  <Typography variant="h4" sx={{ fontFamily: "cursive", color: "green", fontWeight: "bold" }}>Booking Details</Typography>
                  <hr />
                  <TextField
                    label="Patient Name"
                    value={pname}
                    onChange={(e) => setPname(e.target.value)}
                    fullWidth
                    sx={{ marginTop: 2 }}
                  />
                  <TextField
                    type='number'
                    label="Patient Age"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                    fullWidth
                    sx={{ marginTop: 2 }}
                  />
                  <FormControl sx={{ marginTop: 2, width: '100%', height: '5vh' }}>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat='dd/MM/yyyy'
                      placeholderText='Select Date'
                      sx={{
                        width: '100%',
                        fontSize: '1rem',
                        '&::placeholder': { color: 'green' },
                        border: '1px solid green',
                      }}
                    />
                  </FormControl>
                  <hr />
                  <Typography sx={{ fontFamily: "cursive", fontWeight: "bold" }}>User: {JSON.parse(localStorage.getItem('currentuser')).email}</Typography>
                  <Typography sx={{ fontFamily: "cursive", fontWeight: "bold" }}>Scan Name: {scan.sname}</Typography>
                  <Typography sx={{ fontFamily: "cursive", fontWeight: "bold" }}> Scan Type: {scan.stype}</Typography>
                  <Typography sx={{ fontFamily: "cursive", fontWeight: "bold" }}>Amount: {scan.samount}</Typography>
                  <hr />
                  <Typography sx={{ fontFamily: "cursive", fontWeight: "bold" }}>Total Amount: {totalamount}</Typography>
                  <Button variant="contained" sx={{ backgroundColor: "black", color: "green", marginTop: 2 }} onClick={onBookNow}>Book Now</Button>
                </CardContent>
              </CardActionArea>
            </Card>
          )}
        </Box>
      </Layout>
    </div>
  );
};

export default Bookingscreen;
