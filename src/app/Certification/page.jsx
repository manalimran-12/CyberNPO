import { Box, Typography, Card, Button } from '@mui/material'
import React from 'react'
import PolicyIcon from '@mui/icons-material/Policy';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import LockResetIcon from '@mui/icons-material/LockReset';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import MailLockIcon from '@mui/icons-material/MailLock';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const page = () => {
  return (
    <Box>
      <Navbar/>
      <Box sx={{ height: 80, marginTop: 6 }}>
        <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "40px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Cyber Security Certification Preparation</Typography>
      </Box>
      <Box sx={{ height: 50, marginTop: -4 }}>
        <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: '#00192d', textAlign: 'center' }}>Unlock your potential with our professional cybersecurity certification and training programs.</Typography>
      </Box>
      <Box sx={{ width: '100%', height: '400px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '30px', marginTop: '-70px' }}>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: '17%', height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <SecurityIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CCNA</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cisco Certified Network Associate</Typography>
          </Box>
        </Card>
        <Card
          sx={{
            backgroundColor: 'transparent',
            width: '17%', height: '150px',
            textAlign: 'center',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: '#04274c',
            },
            borderRadius: '10%'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <PolicyIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CCNP Security</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cisco Certified Network Professional Security</Typography>
          </Box>
        </Card>


        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <LockIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CCIE Security</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cisco Certified Internetwork Expert Security</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <LockResetIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>PCNSE</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}> Palo Alto Networks Certified Network Security Engineer</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <PhonelinkLockIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CEH</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Certified Hacking Expert</Typography>
          </Box>
        </Card>
      </Box>
      <Box sx={{ width: '100%', height: '400px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '30px', marginTop: '-180px' }}>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: '17%', height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <VpnLockIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CISM</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Certified Information Security Manager</Typography>
          </Box>
        </Card>
        <Card
          sx={{
            backgroundColor: 'transparent',
            width: '17%', height: '150px',
            textAlign: 'center',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: '#04274c',
            },
            borderRadius: '10%'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <EnhancedEncryptionIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CISSP</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Certified Information Systems Security Professional</Typography>
          </Box>
        </Card>


        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <SyncLockIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CRISC</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Certified in Risk and Information Systems Control</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <AssuredWorkloadIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CCISO</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Certified Chief Information Security Officer</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <MailLockIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>IBM</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}> International Business Machines</Typography>
          </Box>
        </Card>
      </Box>
      <Footer/>
    </Box>
  )
}

export default page
