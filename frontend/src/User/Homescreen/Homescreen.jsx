import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import HomeWallpaper from '../../components/Images/homescreenwallpaper.jpg';
import HomeWallpaper2 from '../../components/Images/homescreenwallpaper2.jpg';
import HomeWallpaper3 from '../../components/Images/homescreenwallpaper3.jpg';
import AdditionalImage1 from '../../components/Images/ctscan2.jpeg';
import AdditionalImage2 from '../../components/Images/mri1.jpeg';
import AdditionalImage3 from '../../components/Images/dandp1.jpg'; 
import AdditionalImage4 from '../../components/Images/dandp2.jpg';
import AdditionalImage5 from '../../components/Images/scanroom1.jpg';// Import your additional image
import './Homescreen.css';
import { Link } from 'react-router-dom';
import { Box,  Paper } from '@mui/material';

function Homescreen() {
  const wallpapers = [HomeWallpaper, HomeWallpaper2, HomeWallpaper3];
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallpaperIndex((prevIndex) =>
        prevIndex === wallpapers.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [wallpapers.length]);

  return (
    <Layout>
      <div className="homescreen" style={{ backgroundImage: `url(${wallpapers[currentWallpaperIndex]})` }}>
        <div className="headerContainer2">
          <p className='para1'>
            Beyond the Image,<br />
            Beneath the Surface. Your Scan,<br />
            Your Choice.
          </p>
          <Link to={"/scans"}>
            <button className='button1'>
              BOOK NOW
            </button>
          </Link>
        </div>
        </div>
        <br/><br/>
        <div className="best-scans-bar">
        <h2 className="best-scans-heading">Our Best Scans</h2>
      </div>
        <Box sx={{ display: 'flex' }}>
          <Paper elevation={10} className='paperstyle10'>
        <div className="additional-image-container">
          <div className="box">
            <img src={AdditionalImage1} alt="" className="additional-image" />
          </div>
          <div className="additional-image-description">
            <h3>CT SCAN</h3>
            <p>CT scans play a crucial role in modern medicine,
               aiding in the accurate diagnosis and treatment planning for a wide range of medical conditions.
                The technology continues to advance, providing even clearer images
                 while minimizing radiation exposure to patients.
</p><br/>
<Link to={"/scans"}>
            <button >
              More Scans
            </button>
          </Link>
          </div>
        </div>
        </Paper>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Paper elevation={10} className='paperstyle10'>
        <div className="additional-image-container">
          <div className="box">
            <img src={AdditionalImage2} alt="" className="additional-image" />
          </div>
          <div className="additional-image-description">
            <h3>MRI SCAN</h3>
            <p>MRI is a powerful imaging tool that provides detailed information for 
              diagnosis and treatment planning. It is commonly used in conjunction with other imaging
               modalities to offer a comprehensive understanding of a patient's condition.
</p><br/>
<Link to={"/scans"}>
            <button className='button1'>
              More Scans
            </button>
          </Link>
          </div>
        </div>
        </Paper>
        </Box>
        <div className="best-scans-bar">
        <h2 className="best-scans-heading">Facilities</h2>
      </div>
      <Box sx={{ display: 'flex' }}>
          <Paper elevation={10} className='paperstyle11'>
          <h2 className="best-scans-heading2">We Offer the Best Services and We have the best equipments</h2>
          <div className="additional-image-container2">
          <div className="box2">
            <img src={AdditionalImage3} alt="" className="additional-image3" />
          </div>
          <div className="additional-image-description2">
          <h3>Best Diagnostic Scanning Equipment:</h3>
            <p className='para3'>For our diagnostic scanning services, we invest in state-of-the-art
             imaging equipment that sets the industry standard. Our cutting-edge diagnostic scanning machines 
             deliver unparalleled precision and clarity, ensuring that every scan provides detailed insights into 
             your health. We prioritize the latest advancements in medical technology to offer 
            our clients the most accurate and comprehensive diagnostic information.ndition.
</p><br/>
          </div>
        </div>
        <div className="additional-image-container2">
          <div className="box2">
            <img src={AdditionalImage4} alt="" className="additional-image3" />
          </div>
          <div className="additional-image-description2">
          <h3>Best Doctors::</h3>
            <p className='para3'>At our scanning center, we pride ourselves on having a team of highly
             skilled and experienced doctors who are experts in their respective fields. Our medical
              professionals are dedicated to providing personalized care and accurate diagnoses.
               They stay abreast of the latest medical developments, ensuring 
            that you receive the best possible guidance and treatment based on the results of your scans.
</p><br/>
          </div>
        </div>
        <div className="additional-image-container2">
          <div className="box2">
            <img src={AdditionalImage5} alt="" className="additional-image3" />
          </div>
          <div className="additional-image-description2">
          <h3>Best Computerized Technology:</h3>
            <p className='para3'>By combining the best diagnostic scanning equipment, top-notch medical
             professionals, advanced scanning technology, and state-of-the-art computerized systems, our
              scanning website strives to offer an unparalleled
             experience for individuals seeking accurate and comprehensive diagnostic services.
</p><br/>
          </div>
        </div>
          </Paper>
          </Box>
    </Layout>
  );
}

export default Homescreen;
