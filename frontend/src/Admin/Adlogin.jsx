import React, { useState } from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import MasksIcon from '@mui/icons-material/Masks';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

function Adlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);

const navigate= useNavigate(); 

async function Login() {
  const admin = {
    email,
    password,
  };

  try {
    setLoading(true);
    const response = await axios.post('http://localhost:3500/admin/login', admin);
    const result = response.data;
    setLoading(false);
    localStorage.setItem('currentadmin', JSON.stringify(result));

    
    navigate('/panel');
  } catch (err) {
    console.error(err);
    setLoading(false);
    setError(true);
    localStorage.removeItem('currentadmin');
  }
}

  const btstyle1 = { margin: '8px 0', backgroundColor: 'black', color: 'green', fontFamily: 'cursive' };

  const paperStyle = { padding: 20, height: '60vh', width: 400, margin: '20px auto' };
  const avatar1Style = { backgroundColor: 'green' };
  const linkStyle = { color: '#663399', textDecoration: 'underline', marginRight: '4px' };
  const headingStyle = { color: 'black', fontFamily: 'cursive' };

  return (
    <div className="login-container">
      {loading && <Loader />}
      {error && <Error  />}
      {success && <Success />} 
      <div>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatar1Style}><MasksIcon /></Avatar>
              <h2 style={headingStyle}>Log in</h2>
            </Grid>

            <TextField  label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth /><br /><br />
            <TextField  label="Password" type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} fullWidth /><br /><br />
            <Button type='Submit' fullWidth variant='contained' style={btstyle1} onClick={Login}>
              Login
            </Button>

            {error && (
              <Typography align='left' style={{ color: 'red' }}>
                Login failed. Invalid email or password.
              </Typography>
            )}

            <Typography align='left'>
              <Link href="#" style={linkStyle}>
                {'Forgot Password ?'}
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}

export default Adlogin;
