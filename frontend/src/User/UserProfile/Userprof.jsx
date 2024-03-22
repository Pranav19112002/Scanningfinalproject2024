import { Box, Button, Container, Paper, Tab, Tabs, Typography } from "@mui/material";
import Mybookings from "./Mybookings";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Userprof() {
    const user = JSON.parse(localStorage.getItem('currentuser'));
    const [tabValue, setTabValue] = useState(0);

    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('currentuser');
        navigate('/userlog');
      }
    
    useEffect(() => {
        if (!user) {
            window.location.href = '/userlog';
        }
    }, [user]);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container>
            <Header />
            <Box mt={3}>
                <Typography variant="h4" mb={2} sx={{fontFamily:'cursive',color:'green',backgroundColor:'black'}}>
                 Profile
                </Typography>
            </Box>
            <Box mt={4}>
                <Paper
                    elevation={10}
                    sx={{
                        height: 'auto',
                        width: '900px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        overflowY: 'auto', 
                        maxHeight: '500px', 
                    }}
                >
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab label="Profile" />
                        <Tab label="Bookings" />
                    </Tabs>

                    {tabValue === 0 && (
                        <Box mt={3}>
                            <Typography variant="h5" sx={{backgroundColor:'black',color:'green'}}>Info</Typography>
                            <Typography variant="h6">User ID: {user._id}</Typography>
                            <Typography variant="h6">Email: {user.email}</Typography>
                            <Button onClick={logout} sx={{backgroundColor:'black',color:'white'}}>Logout</Button>
                        </Box>
                    )}
                    {tabValue === 1 && <Mybookings user={user} />}
                </Paper>
            </Box>
        </Container>
    );
}

export default Userprof;