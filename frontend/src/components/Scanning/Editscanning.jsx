import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Input, Paper, TextField } from '@mui/material';
import Adsidebar from '../Navbar/Adsidebar';
import Adnavbar from '../Navbar/Adnavbar';
import Loader from '../Loader';
import logcoverImage from '../Images/formcover.png';
import baseUrl from '../../Api';
import axios from 'axios';
import './Editscanning.css';
import Error from '../Error';
import Success from '../Success';
import Swal from 'sweetalert2';
function Editscanning({ scanId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [scanDetails, setScanDetails] = useState({
    sid: '',
    sname: '',
    stype: '',
    sdescription: '',
    samount: '',
    scanImageURL: '',
    scanviewUrl: '',
    scanImageFile: null,
    scanviewFile: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl + `/scans/getscanbyid/${scanId}`);
        setScanDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [scanId]);

  const handleUpdateScan = async () => {
    try {
      setLoading(true); 
  
      const formData = new FormData();
      formData.append('sid', scanDetails.sid);
      formData.append('sname', scanDetails.sname);
      formData.append('stype', scanDetails.stype);
      formData.append('sdescription', scanDetails.sdescription);
      formData.append('samount', scanDetails.samount);
  
      
      let newImageUploaded = false;
  
      if (scanDetails.scanImageFile) {
        formData.append('scanImageURL', scanDetails.scanImageFile);
        newImageUploaded = true; 
      }
  
      if (scanDetails.scanviewFile) {
        formData.append('scanviewUrl', scanDetails.scanviewFile);
        newImageUploaded = true; 
      }
  
      console.log("New image uploaded:", newImageUploaded); 
  
      const response = await axios.put(baseUrl + `/scans/updatescan/${scanId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data);
      Swal.fire('Scan updated successfully');
      setSuccess(true);
      
      setLoading(false);
    
    } catch (error) {
      console.error(error);
      Swal.fire('Scan update failed');
      setError(true);
      
      setLoading(false);
    }
  };
  
  const handleFileChange = (file, index) => {
    if (index === 1) {
      setScanDetails({
        ...scanDetails,
        scanImageFile: file,
      });
    } else if (index === 2) {
      setScanDetails({
        ...scanDetails,
        scanviewFile: file,
      });
    }
  };
  

  const handleInputChange = (e, key) => {
    setScanDetails({
      ...scanDetails,
      [key]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      {loading && <Loader />}
      {error && <Error />}
      {success && <Success /> }
      <Adnavbar />
      <Box height={20}>
        <Box sx={{ display: 'flex' }}>
          <Adsidebar />
          <Grid container spacing={2} className='grid-containerr'>
            <Paper elevation={10} className='paperstylee' style={{ backgroundImage: `url(${logcoverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1 className="form-heading">EDIT SCANNING</h1>

                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                      className="form-field form-field-focused"
                      id="outlined-basic"
                      label='ID'
                      name="sid"
                      value={scanDetails.sid}
                      onChange={(e) => handleInputChange(e, 'sid')}
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'green' },
                      }}
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className="form-field form-field-focused"
                      id="outlined-basic"
                      label='NAME'
                      name="sname"
                      value={scanDetails.sname}
                      onChange={(e) => handleInputChange(e, 'sname')}
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'green' },
                      }}
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className="form-field form-field-focused"
                      id="outlined-basic"
                      label='SCANTYPE'
                      name="stype"
                      value={scanDetails.stype}
                      onChange={(e) => handleInputChange(e, 'stype')}
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'green' },
                      }}
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className="form-field form-field-focused"
                      type='text'
                      id='outlined-basic'
                      label='AMOUNT'
                      name='samount'
                      value={scanDetails.samount}
                      onChange={(e) => handleInputChange(e, 'samount')}
                      variant='outlined'
                      InputLabelProps={{
                        style: { color: 'green' },
                      }}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <label htmlFor="outlined-basic" className="label">Description:</label>
                    <textarea
                      className="form-field form-field-focused"
                      id="outlined-basic"
                      name="sdescription"
                      value={scanDetails.sdescription}
                      onChange={(e) => handleInputChange(e, 'sdescription')}
                      variant="outlined"
                      
                    />

                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                  {[1, 2, ].map((index) => (
                    <div key={index} className="smaller-input">
                      <label className='label-class'>{`Image File ${index}:`}</label>
                      <Input
                        type='file'
                        onChange={(e) => handleFileChange(e.target.files[0], index)}
                      />
                    </div>
                     ))}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Button variant="contained" className='form-button1 form-button1-left' onClick={handleUpdateScan} sx={{ backgroundColor: 'black', color: 'green', fontFamily: 'cursive' }}>
                      SAVE
                    </Button>
                  </Grid>
                </Grid>

              </Box>
            </Paper>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Editscanning;
