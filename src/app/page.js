"use client"
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Services from './components/Services';
import { Typography, IconButton } from '@mui/material';
import Trainers from './components/Trainers';
import Footer from './components/Footer';
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 1000); 
    return () => clearTimeout(timeout);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.page}>
      <Navbar /> 
      <div className={`${styles.banner} ${animate ? styles.animate : ''}`}>
        <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, textAlign: 'center', fontSize: '30px',color:'white' }}>NON-PROFIT ORGANIZATION</Typography>
      </div>
      {showPopup && (
        <div className={`${styles.popup} ${animate ? styles.animate : ''}`} style={{ backgroundColor: '#00192d', borderRadius: 10}}>
          <IconButton
            className={styles.closeButton}
            onClick={handleClosePopup}
          >
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>
          <Typography 
            sx={{ 
              fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', 
              fontWeight: 700, 
              textAlign: 'center', 
              fontSize: '20px',
              color:'white',
              paddingBottom: 8,
            }}
          >
            NIW National Interest Waiver Green Card Petition
          </Typography>
        </div>
      )}
      <Main />
      <Services/>
      <Trainers/>
      <Footer/>
    </div>
  );
}
