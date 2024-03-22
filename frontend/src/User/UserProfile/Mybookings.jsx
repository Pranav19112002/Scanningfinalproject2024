import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Container, Typography, Divider } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import Chip from '@mui/material/Chip';

function Mybookings({ user }) {
    const [bookings, setBookings] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);
                const response = await axios.get(`http://localhost:3500/book/getallbookingsbyuserid?userId=${user._id}`);
                const scans = response.data;
                setBookings(scans);
                setLoader(false);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setLoader(false);
                setError(true);
            }
        };
        fetchData();
    }, [user]);

    async function cancelBooking(bookingid, scanid) {
        try {
            setLoader(true);
            const response = await axios.post("http://localhost:3500/book/cancelbooking", { bookingid, scanid });
            setLoader(false);
            Swal.fire("Congrats", "Your Booking has been Cancelled", 'success').then(result => {
                window.location.reload();
            });
        } catch (error) {
            console.error(error);
            setLoader(false);
            setError(true);
            if (error.response) {
                console.log('Response data:', error.response.data);
                console.log('Response status:', error.response.status);
                console.log('Response headers:', error.response.headers);
            }
            Swal.fire("Oops", "Something Went Wrong", "error");
        }
    }

    return (
        <Container>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        {loader && (<CircularProgress />)}
                        {bookings.map((booking, index) => (
                            <div key={booking._id} className='bs' style={{ textAlign: 'left' }}>
                                <Typography variant="h9"><b>{index + 1}. {booking.scanname}</b></Typography>
                                <Typography><b>BookingID:</b> {booking._id}</Typography>
                                <Typography><b>PatientName:</b> {booking.pname}</Typography>
                                <Typography><b>PatientAge:</b> {booking.page}</Typography>
                                <Typography><b>Date&Time:</b> {booking.selectedDate}</Typography>
                                <Typography><b>Amount:</b>{booking.totalamount}</Typography>
                                <Typography>
                                    <b>Status:</b> {booking.status === 'booked' ? (
                                        <Chip label="CONFIRMED" color="success" />
                                    ) : (
                                        <Chip label="CANCELLED" color="warning" />
                                    )}
                                </Typography>

                                {booking.status !== "Cancelled" && (
                                    <div className='text-right'>
                                        <Button variant="contained" color="primary" onClick={() => {
                                            cancelBooking(booking._id, user._id);
                                        }}>CANCEL BOOKING</Button>
                                    </div>
                                )}

                                {index !== bookings.length - 1 && <Divider />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Mybookings;
