import React from 'react';
import Layout from '../components/Layout';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <div>
      <Layout>
      <Typography variant='h4' sx={{ textAlign: 'center',backgroundColor:'black',color:'green', fontFamily: 'cursive' }}>
            About Us
          </Typography>
        <Box sx={{ my: 15 }}>
          <Typography variant='body1' sx={{ textAlign: 'center', marginTop: 5,fontSize:'large',fontWeight:'bold' }}>
            Welcome to Private Scanning Centre – Your Trusted Partner in Diagnostic Imaging.
          </Typography>
          <Typography variant='h4' sx={{ textAlign: 'left', marginTop: 4 ,color:'green',fontFamily:'cursive'}}>
            Our Mission
          </Typography>

          <Typography variant='body1' sx={{ textAlign: 'justify', marginTop: 2 }}>
            At our Private Scanning Centre, our mission is to empower individuals with the knowledge they need to make informed decisions about their health. We understand the significance of accurate diagnostics in healthcare and are committed to providing state-of-the-art imaging services that contribute to better patient outcomes.
          </Typography>

          <Typography variant='h4' sx={{ textAlign: 'left', marginTop: 4 ,color:'green',fontFamily:'cursive'}}>
            Cutting-Edge Technology
          </Typography>

          <Typography variant='body1' sx={{ textAlign: 'justify', marginTop: 2 }}>
            We take pride in being at the forefront of diagnostic imaging technology. Our center is equipped with the latest in medical imaging equipment, including advanced MRI, CT, and other cutting-edge scanning machines. The integration of innovative technology ensures that our patients receive the highest quality scans, allowing our expert medical team to provide precise and reliable diagnoses.
          </Typography>

          <Typography variant='h4' sx={{ textAlign: 'left', marginTop: 4,color:'green',fontFamily:'cursive' }}>
            Expert Medical Professionals
          </Typography>

          <Typography variant='body1' sx={{ textAlign: 'justify', marginTop: 2 }}>
            Our team comprises highly skilled and experienced medical professionals who are dedicated to delivering exceptional care. Our radiologists, technicians, and support staff work collaboratively to ensure that each patient receives personalized attention. With a commitment to ongoing education and training, our team stays ahead of the curve in the rapidly evolving field of diagnostic imaging.
          </Typography>

          <Typography variant='h4' sx={{ textAlign: 'left', marginTop: 4 ,color:'green',fontFamily:'cursive'}}>
            Patient-Centric Approach
          </Typography>

          <Typography variant='body1' sx={{ textAlign: 'justify', marginTop: 2 }}>
            At our Private Scanning Centre, we understand that the patient experience is as crucial as the accuracy of the scans. We prioritize a patient-centric approach, aiming to create a comfortable and supportive environment for individuals undergoing diagnostic procedures. From the moment you enter our facility to the delivery of results, we strive to make your experience smooth, stress-free, and focused on your well-being.
          </Typography>

          <Typography variant='h4' sx={{ textAlign: 'left', marginTop: 4 ,color:'green',fontFamily:'cursive'}}>
            Comprehensive Services
          </Typography>

          <Typography variant='body1' sx={{ textAlign: 'justify', marginTop: 2 }}>
            We offer a comprehensive range of diagnostic imaging services to meet the diverse needs of our patients. Whether you require routine screenings, advanced imaging for specific medical conditions, or second opinions, our center is equipped to provide the answers you seek. Our services are tailored to support your healthcare journey with precision and care.
          </Typography>

          <Typography variant='h4' sx={{ textAlign: 'left', marginTop: 4 ,color:'green',fontFamily:'cursive'}}>
            Commitment to Excellence
          </Typography>

          <Typography variant='body1' sx={{ textAlign: 'justify', marginTop: 2, marginBottom: 4 }}>
            Excellence is not just a goal; it's our commitment. Private Scanning Centre adheres to the highest standards of quality, accuracy, and professionalism. We continuously invest in upgrading our facilities, technology, and personnel to ensure that our patients receive the best possible diagnostic services.
          </Typography>
        </Box>
      </Layout>
    </div>
  );
}

export default About;
