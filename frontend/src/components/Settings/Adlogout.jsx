import { Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Adlogout () {
    const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('currentadmin');
    navigate('/login');
  }
  return (
    <div>
        <Typography variant="h3" sx={{ color: 'black',fontFamily: 'cursive' }}>Do you want to logout?</Typography>
        <br/><br/>
        <Button onClick={logout} sx={{ backgroundColor: 'red', color: 'white', fontFamily:'cursive' }}>Logout</Button>
        
        </div>
  )
}

export default Adlogout