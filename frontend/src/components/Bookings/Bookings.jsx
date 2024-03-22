import React, { useState, useEffect } from 'react';
import Adnavbar from '../Navbar/Adnavbar';
import { Box, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Typography } from '@mui/material';
import Adsidebar from '../Navbar/Adsidebar';
import './Bookings.css';

function Bookings() {
  const [bookingsData, setBookingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3500/book/allbookings');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBookingsData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Adnavbar />
      <Box height={20}>
        <Box sx={{ display: 'flex' }}>
          <Adsidebar />
          <Grid className='grid-container'>
           
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                overflowY: 'auto', 
                maxHeight: 'calc(100vh - 64px)', 
              }}
            >
              <Paper elevation={10} className='paperstyle'>
                <Typography variant="h4" sx={{ fontFamily: 'cursive', color: 'black' }}> Bookings</Typography>
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>Error: {error}</p>
                ) : (
                  <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ color: 'green' }}>BookingID</TableCell>
                          <TableCell style={{ color: 'green' }}>User</TableCell>
                          <TableCell style={{ color: 'green' }}>pName</TableCell>
                          <TableCell style={{ color: 'green' }}>pAge</TableCell>
                          <TableCell style={{ color: 'green' }}>Scan</TableCell>
                          <TableCell style={{ color: 'green' }}>Date</TableCell>
                          <TableCell style={{ color: 'green' }}>STATUS</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bookingsData.map((booking) => (
                          <TableRow key={booking._id}>
                            <TableCell>{booking._id}</TableCell>
                            <TableCell>{booking.useremail}</TableCell>
                            <TableCell>{booking.pname}</TableCell>
                            <TableCell>{booking.page}</TableCell>
                            <TableCell>{booking.scanname}</TableCell>
                            <TableCell>{booking.selectedDate}</TableCell>
                            <TableCell>{booking.status}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Paper>
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Bookings;
