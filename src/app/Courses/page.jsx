import { Box, Typography, Card, Button } from '@mui/material'
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const page = () => {
  return (
    <Box>
      <Navbar/>
      <Box sx={{ height: 80, marginTop: 6 }}>
        <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "40px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Cyber Security Courses</Typography>
      </Box>
      <Box sx={{ height: 50, marginTop: -4 }}>
        <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: '#00192d', textAlign: 'center' }}>We offer these handson trainings. Get enroll in these Courses and get yourself trained.</Typography>
      </Box>
      <Box sx={{ width: '100%', height: '400px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '30px', marginTop: '-70px' }}>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: '17%', height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CISCO Firewall</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>CISCO Systems Firewall</Typography>
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
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>PAF</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Palo Alto Firewall</Typography>
          </Box>
        </Card>


        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CHF</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Check Point Firewall</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Data Security</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}> Safeguarding data from Unauthorized Access</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CSDI</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cyber Security Defence and Intellegence</Typography>
          </Box>
        </Card>
      </Box>
      <Box sx={{ width: '100%', height: '400px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '30px', marginTop: '-180px' }}>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: '17%', height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Application Security</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Securing Software from Unauthorized Access</Typography>
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
            
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>EndPoint Security</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Palo Alto and CISCO Systems Endpoint Security</Typography>
          </Box>
        </Card>


        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CRISC</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Certified in Risk and Information Systems Control</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CSDO</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cyber Security Design and Operation</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CSA</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cyber Security Architecture</Typography>
          </Box>
        </Card>
      </Box>
      <Box sx={{ width: '100%', height: '400px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '30px', marginTop: '-180px' }}>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: '17%', height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CSC</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cyber Security Controls</Typography>
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
            
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>IAM</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Identify Access Management</Typography>
          </Box>
        </Card>


        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Cloud Security</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>AWS and Azure Cloud Security</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>VM</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Vurnability Management</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>SIEM</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Security Information and Event Management- SPLUNK</Typography>
          </Box>
        </Card>
      </Box>
      <Box sx={{ width: '100%', height: '400px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '30px', marginTop: '-180px' }}>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: '17%', height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>GRC</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cyber Security Governance Risk and Complaince</Typography>
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
            
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>IVM</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cyber Security Incident and Vulnerability Management</Typography>
          </Box>
        </Card>


        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>FISMA, NIST</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Federal Information Security Management Act and about National Institute of Standards and Technology</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>PCI DSS </Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Payment Card Industry Data Security Standard</Typography>
          </Box>
        </Card>
        <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: "17%", height: '150px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>CS Audit</Typography>
          </Box>
          <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
            <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "13px", lineHeight: '20px', color: 'white', textAlign: 'center' }}>Cyber Security Audit</Typography>
          </Box>
        </Card>
      </Box>
      <Footer/>
    </Box>
  )
}

export default page
