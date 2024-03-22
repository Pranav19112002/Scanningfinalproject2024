import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import React, { useState } from 'react';
import MasksIcon from '@mui/icons-material/Masks';
import axios from 'axios';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';
import Swal from 'sweetalert2';

function Adregister() {
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  
  async function register() {
    if (password === cpassword) {
      const admin = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        setLoading(true);
        console.log("Registering user:", admin); 
        await axios.post('http://localhost:3500/admin/register', admin);
        setLoading(false);
        setSuccess(true);
        Swal.fire('Admin registered');
  
        setName('');
        setEmail('');
        setPassword('');
        setCpassword('');
        console.log("Registration successful");
      } catch (error) {
        setLoading(false);
        setError(true);
        Swal.fire('Registration failed')
        console.error("Error during registration:", error); 
      }
    } else {
      alert('Passwords do not Match');
    }
  }
  
  const btstyle1 = { margin: '8px 0', backgroundColor: 'black', color: 'green' };
  const paperStyle = { padding: 20, height: '70vh', width: 400, margin: '20px auto' };
  const avatar1Style = { backgroundColor: 'green' };
  const linkStyle = { color: 'green', textDecoration: 'underline', marginRight: '4px' };
  const headingStyle = { color: 'black' };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {success && <Success/>}
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatar1Style}><MasksIcon /></Avatar>
            <h2 style={headingStyle}>Sign Up</h2>
          </Grid>
          <TextField  label="Name" variant="filled" name='name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          <TextField  label="Email" variant="filled" name='email' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
          <TextField  label="Password" variant="filled" name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
          <TextField  label="Confirm password" variant="filled" name='cpassword' type='password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} fullWidth /><br /><br />
          <Button type='Submit' fullWidth variant='contained' style={btstyle1} onClick={register}>
            Signup
          </Button>

          {error && (
            <Typography align='left' style={{ color: 'red' }}>
              Registration failed. Please try again.
            </Typography>
          )}

          <Typography align='left'>
            <Link href="#" style={linkStyle}>
              {'Forgot Password ?'}
            </Link>
          </Typography>
          <p align='left'>Do you have an account ?</p>
          <Typography align='left'>
            <Link href="/login" style={linkStyle}>
              {'Sign In'}
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default Adregister;
