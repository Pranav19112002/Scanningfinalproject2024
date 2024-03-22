import { Typography } from '@mui/material';
import React from 'react';

function Adminprofile() {
  const admin = JSON.parse(localStorage.getItem('currentadmin'));

  if (!admin) {
    return (
      <div>
        <Typography variant="h3" sx={{ color: 'black', fontFamily: 'cursive' }}>
          Admin not found
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h3" sx={{ color: 'black', fontFamily: 'cursive' }}>
        Current Admin
      </Typography>
      <h3>Email: {admin.email}</h3>
      <h3>User-Id: {admin._id}</h3>
    </div>
  );
}

export default Adminprofile;