import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const page = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ backgroundColor: 'rgba(46, 70, 96, 0.8)', height: 80 }} >
        <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "40px", lineHeight: '25px', color: 'white', textAlign: 'center', paddingTop: 3 }}>Contact Us</Typography>
      </Box>
      <Box sx={{ justifyContent: 'center', alignItems: "center", display: 'flex', marginTop: 10 }}>
        <Box sx={{ backgroundColor: 'rgba(46, 70, 96, 0.8)', height: 200, borderRadius: 10, width: 600, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <EmailIcon sx={{ width: 80, height: 80, marginBottom: 2 }} />
          <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '20px', color: 'black', textAlign: 'center' }}>info@cybersecuritynpo</Typography>
        </Box>
      </Box>
      <Box sx={{ justifyContent: 'center', alignItems: "center", display: 'flex', marginTop: 3, marginBottom: 7 }}>
        <Box sx={{ backgroundColor: 'rgba(46, 70, 96, 0.8)', height: 200, borderRadius: 10, width: 600, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <HomeIcon sx={{ width: 80, height: 80, marginBottom: 2 }} />
          <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'black', textAlign: 'center' }}>New York, Street 7 Staten Island</Typography>
        </Box>
      </Box>
      <Footer/>
    </Box>
  )
}

export default page
