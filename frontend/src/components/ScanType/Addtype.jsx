import React, { useState } from 'react';
import baseUrl from '../../Api';
import Adnavbar from '../Navbar/Adnavbar';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Adsidebar from '../Navbar/Adsidebar';
import axios from 'axios';
import './Addtype.css';
import logcoverImage from '../Images/formcover.png';
import Error from '../Error';
import Success from '../Success';
import Loader from '../Loader';
import Swal from 'sweetalert2';

function Addtype() {
  const [stype, setStype] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function addType() {
    try {
      setLoading(true);

      if (!stype.trim()) {
        setError('Please enter a valid type.');
        setLoading(false);
        return;
      }

      const newType = {
        stype: stype.trim(),
        display: true,
      };

      const response = await axios.post(baseUrl + '/stypes/add', newType);
      console.log(response.data);
      Swal.fire('Scan type added successfully');
      setSuccess(true);
      
      setStype('');
      setLoading(false);
    } catch (error) {
      console.error(error);
      Swal.fire('Cannot Add scantype');
      setError('true');
      setLoading(false);
    }
  }

  return (
    <div className="form-container1">
      {loading && <Loader />}
      {error && <Error />}
      {success && <Success />}
      <Adnavbar />
      <Box height={20}>
        <Box sx={{ display: 'flex' }}>
          <Adsidebar />
          <Grid className="grid-container">
            <Paper elevation={10} className="type-paper-style" style={{ backgroundImage: `url(${logcoverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h4" sx={{ fontFamily: 'cursive', color: 'black' }}>SCANTYPES</Typography>
                <br />
                {error && <Error />}
                {success && <Success />}
                <div className="input-button-container">
                  <TextField
                    type="text"
                    className="input-field input-field-focused"
                    label='ScanType'
                    name="stype"
                    value={stype}
                    onChange={(e) => setStype(e.target.value)}
                    InputLabelProps={{
                      style: { color: 'green' },
                    }}
                  />
                  <Button className="button" onClick={addType} sx={{ backgroundColor: 'black', color: 'green', fontFamily: 'cursive' }}>
                    Add Type
                  </Button>
                </div>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Addtype;
