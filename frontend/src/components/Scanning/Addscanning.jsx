import React, { useState, useEffect } from 'react';
import Adnavbar from '../Navbar/Adnavbar';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import Adsidebar from '../Navbar/Adsidebar';
import Loader from '../Loader';
import logcoverImage from '../Images/formcover.png';
import axios from 'axios';
import baseUrl from '../../Api';
import Error from '../Error';
import Success from '../Success';
import './Addscanning.css';
import Swal from 'sweetalert2';
function Addscanning() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sid, setSid] = useState('');
  const [sname, setSname] = useState('');
  const [sdescription, setSdescription] = useState('');
  const [stype, setStype] = useState('');
  const [stypes, setStypes] = useState([]);
  const [samount, setSamount] = useState('');
  const [display, setDisplay] = useState(true);
  const [scanImageFile, setScanImageFile] = useState(null);
  const [scanviewFile, setScanviewFile] = useState(null);

  useEffect(() => {
    const fetchScans = async () => {
      try {
        const response = await axios.get(baseUrl + '/stypes');
        setStypes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchScans();
  }, []);

  async function addScanning() {
    setLoading(true);
    setError(false);
    setSuccess(false);

    const newScan = {
      sid,
      sname,
      stype,
      sdescription,
      samount,
      display: true,
    };

    const formData = new FormData();
    formData.append('sid', sid);
    formData.append('sname', sname);
    formData.append('stype', stype);
    formData.append('sdescription', sdescription);
    formData.append('samount', samount);
    formData.append('display', display);

    if (scanImageFile) {
      formData.append('scanImageURL', scanImageFile);
    }
    if (scanviewFile) {
      formData.append('scanviewUrl', scanviewFile);
    }

    try {
      const response = await axios.post(baseUrl + '/scans/addscan', formData);
      console.log(response.data);
      setLoading(false);
      Swal.fire('Scan added successfully');
      setSuccess(true);
      
    } catch (error) {
      console.error(error);
      setLoading(false);
      Swal.fire('Scan update failed');
      setError(true);
      
    }
  }

  return (
    <div className="form-container">
      {loading && <Loader />}
      {error && <Error message="Error Occurred"/>}
      {success && <Success message="Success" /> }
      <Adnavbar />
      <Box height={20}>
        <Box sx={{ display: 'flex' }}>
          <Adsidebar />
          <Grid className='grid-container10'>
            <Paper elevation={10} className='paper-style' style={{ backgroundImage: `url(${logcoverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1 className="form-heading">ADD A SCANNING</h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label='ID'
                      className="form-field form-field-focused"
                      id="outlined-basic"
                      name="sid"
                      value={sid}
                      onChange={(e) => setSid(e.target.value)}
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
                      value={sname}
                      onChange={(e) => setSname(e.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'green' },
                      }}
                    />
                  </Grid> 
                  <Grid item xs={12} sm={6}>
                    <label className='label-class'>Scan Type:</label>
                    <select
                      className="input-field"
                      value={stype}
                      onChange={(e) => setStype(e.target.value)}
                    >
                      <option value="">Select Type</option>
                      {stypes.filter(t => t.display !== false).map((t) => (
                        <option key={t._id} value={t.stype}>
                          {t.stype}
                        </option>
                      ))}
                    </select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className="form-field form-field-focused"
                      type="text"
                      id="outlined-basic"
                      label='AMOUNT'
                      name="samount"
                      value={samount}
                      onChange={(e) => setSamount(e.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'green' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="outlined-basic" className="label">Description:</label>
                    <textarea
                      className="form-field"
                      id="outlined-basic"
                      name="sdescription"
                      value={sdescription}
                      onChange={(e) => setSdescription(e.target.value)}
                      variant="outlined"
                    />
                  </Grid>
                  <br />
                  <br/><br/>
                  <div>
                    &nbsp;&nbsp;<label className='label-class'>Scan Image:</label>
                    <input
                      type="file"
                      className="input-field"
                      onChange={(e) => setScanImageFile(e.target.files[0])}
                    />
                  </div>
                  <div>
                    &nbsp;&nbsp;<label className='label-class'>Scan Image 2:</label>
                    <input
                      type="file"
                      className="input-field"
                      onChange={(e) => setScanviewFile(e.target.files[0])}
                    />
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    variant="contained"
                    onClick={addScanning}
                    sx={{ backgroundColor: 'black', color: 'green', fontFamily: 'cursive' }}
                  >
                    DONE
                  </Button>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Addscanning;
