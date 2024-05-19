"use client"
import React from 'react';
import { Box, Typography, Grid, ListItem, List, Divider, useMediaQuery, createTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const currentYear = new Date().getFullYear();

  return (
    <Box >
      <Box sx={{ height: isSmScreen ? '55vh' : '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center', left: -10, backgroundColor: '#00192d', bottom: -10 }}>
        < Grid container sx={{ justifyContent: 'space-evenly' }}>
          <Grid item>
            <Typography variant="subtitle1" color="white" align="center" sx={{ justifyContent: 'center', fontFamily: 'inter,serif' }}>
              Company
            </Typography>
            <List>
              <ListItem sx={{ fontFamily: 'inter,serif', cursor: 'pointer', color: 'grey', '&:hover': { color: '#456a85' } }}>
                About
              </ListItem>
              <ListItem sx={{ fontFamily: 'inter,serif', cursor: 'pointer', color: 'grey', '&:hover': { color: '#456a85' } }}>
                Contact Us
              </ListItem>
              <ListItem sx={{ fontFamily: 'inter,serif', cursor: 'pointer', color: 'grey', '&:hover': { color: '#456a85' } }}>
                Trainers
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="white" align="center" sx={{ justifyContent: 'center', fontFamily: 'inter,serif' }}>
              Resourses
            </Typography>
            <List>
              <ListItem sx={{ fontFamily: 'inter,serif', cursor: 'pointer', color: 'grey', '&:hover': { color: '#456a85' } }}>
                Certification
              </ListItem>
              <ListItem sx={{ fontFamily: 'inter,serif', cursor: 'pointer', color: 'grey', '&:hover': { color: '#456a85' } }}>
                Courses
              </ListItem>
              <ListItem sx={{ fontFamily: 'inter,serif', cursor: 'pointer', color: 'grey', '&:hover': { color: '#456a85' } }}>
                Job Placement
              </ListItem>
            </List>
          </Grid>
          <Grid item spacing={2}>
            <Typography variant="subtitle1" color="white" align="center" sx={{ fontFamily: 'inter,serif' }}>
              Social Media
            </Typography>

            <List sx={{ display: 'flex', flexDirection: 'row' }}>
              <ListItem>
                <FacebookIcon sx={{
                  color: '#61DAFB', fontFamily: 'inter,serif', '&:hover': {
                    color: '#456a85'
                  }
                }} />
              </ListItem>
              <ListItem>
                <XIcon sx={{
                  color: '#61DAFB', fontFamily: 'inter,serif', '&:hover': {
                    color: '#456a85'
                  }
                }} />
              </ListItem>
              <ListItem>
                <LinkedInIcon sx={{
                  color: '#61DAFB', fontFamily: 'inter,serif', '&:hover': {
                    color: '#456a85'
                  }
                }} />
              </ListItem>
              <ListItem>
                <InstagramIcon sx={{
                  color: '#61DAFB', fontFamily: 'inter,serif', '&:hover': {
                    color: '#456a85'
                  }
                }} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: '10vh', backgroundColor: '#00192d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Divider light>
          <Typography variant={isSmScreen ? 'caption' : 'subtitle1'} color="white" align="center" sx={{ fontFamily: 'inter,serif' }}>
            All Rights Reserved Cyber Security Trainer NPO |  Copyright © {currentYear}
          </Typography>
        </Divider>
      </Box>
    </Box>
  );
}

export default Footer;
