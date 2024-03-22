import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

function Contact  ()  {

  const headingstyle = { margin: '8px 0', fontFamily: 'cursive',color:'green'};

  return (

    <div>
      <Layout>
      <Typography variant='h4' sx={{backgroundColor:"black",color:'green',fontFamily:'cursive'}}>Contact Us</Typography>
      <Box sx={{my :5 ,ml :10, "& h4":{fontWeight: "bold",mb : 2}}}>
        <p>Welcome to Private Scanning Centre, your trusted destination for cutting-edge
           diagnostic imaging services. We are dedicated to providing accurate and timely results through
            state-of-the-art scanning technology. If you have any questions, concerns,
           or if you would like to schedule an appointment, feel free to reach out to us.</p>
           <br/><br/>
           <h3 style={headingstyle}>Working Hours</h3>
        <p>
Monday to Friday:<br/><br/>
[9.00 AM] - [8.00 PM]<br/><br/>

Saturday:<br/><br/>
[9.00 AM] - [6.00 PM]<br/><br/>

Sunday:<br/><br/>
[SUNDAY HOLIDAY]<br/><br/>

How to Reach Us<br/><br/>
We are conveniently located in [IRINJALAKUDA],<br/><br/> easily accessible by [public transport/car].<br/><br/> If you're unsure about how to reach us, please use the interactive map below or contact our friendly staff for assistance.</p>
<br/><br/>
<Typography sx={{color:'red'}}>[https://maps.app.goo.gl/BTJy1JUqnLrbfbNF6]</Typography>
      </Box>
      <Box sx={{m: 3,ml :10,width: "600px"}}>
        <TableContainer component={Paper}>
          <Table area-label=" Contact Us">
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:"black",color:"white"}} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red",pt : 1}}/> +91 8208282678
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color:"blue",pt : 1}}/> pscentre@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </Layout>
      </div>
  )
}

export default Contact