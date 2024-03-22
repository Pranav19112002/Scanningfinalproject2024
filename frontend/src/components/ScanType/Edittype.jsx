import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Edittype.css'
import Adnavbar from '../Navbar/Adnavbar';
import Adsidebar from '../Navbar/Adsidebar';
import logcoverImage from '../Images/formcover.png';
import Error from '../Error';
import Success from '../Success';
import Loader from '../Loader';
import Swal from 'sweetalert2';

function Edittype ({stypeId}){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
    const [stypeDetails, setStypeDetails] = useState({
        stype: '',
       
      });
    
      useEffect(() => {
        const fetchStypeDetails = async () => {
          try {
            const response = await axios.post('http://localhost:3500/stypes/getstypebyid', {
                stypeId,
              });
    
            setStypeDetails(response.data);
          } catch (error) {
            console.error(error);
            
          }
        };
    
        fetchStypeDetails();
      }, [stypeId]); 
    
      const handleInputChange = (e) => {
        setStypeDetails({
          ...stypeDetails,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleUpdateStype = async () => {
        try {
          setLoading(true);

          await axios.put('http://localhost:3500/stypes/updatestype', {
            stypeId,
            ...stypeDetails,
          });
          Swal.fire('Scan type updated successfully');
          setSuccess(true);
          
          setLoading(false);
        } catch (error) {
          console.error(error);
          Swal.fire('Scantype not updated,Error');
          setError(true);
          
          setLoading(false);
          
        }
      };
    
  return (
     <div className="form-container1">
       {loading && <Loader />}
      {error && <Error />}
      {success && <Success />}
        <Adnavbar/>
      <Box height={20}>
        <Box sx={{ display: 'flex' }}>
            <Adsidebar/>
          <Grid className="grid-container">
            <Paper elevation={10} className="paperstyleee" style={{ backgroundImage: `url(${logcoverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography variant="h4" sx={{ fontFamily: 'cursive', color: 'black' }}>EDITTYPES</Typography>
                <br />
                <div className="input-button-container">
                  <TextField
                    type="text"
                    className="input-field input-field-focused"
                    label='ScanType'
                    name="stype"
                    value={stypeDetails.stype}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      style: { color: 'green' },
                    }}
                  />
                  <Button className="button" onClick={handleUpdateStype} sx={{ backgroundColor: 'black', color: 'green', fontFamily:'cursive' }}>
                    EditType
                  </Button>
                </div>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default Edittype;
