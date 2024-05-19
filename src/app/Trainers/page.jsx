import { Box, Typography, Avatar } from '@mui/material';
import Navbar from "../components/Navbar";
import React from 'react';
import Image from 'next/image';
import Line from "../../../public/line.png";
import Aamir from '../../../public/amirImage.png';
import Trainer1 from '../../../public/trainer1.jpeg';
import Trainer2 from '../../../public/trainer2.jpeg';
import Trainer3 from '../../../public/trainer3.jpeg';
import Trainer4 from '../../../public/trainer4.jpeg';
import Footer from '../components/Footer';

const trainers = [
  { name: "Numan Khan", role: "Cisco Instructor Trainer", image: Trainer4 },
  { name: "Jehanzeb Shah", role: "Sr. Information Security Consultant", image: Trainer3 },
  { name: "Mohammad Altaf", role: "Manager Information Security Controls", image: Trainer2 },
  { name: "Liaqath Ali", role: "Cyber Security Specialist", image: Trainer1 },
];

const Page = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ height: 80, marginTop: 6, marginLeft: 6, maxWidth: 400 }}>
        <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "40px", lineHeight: '46px', color: 'white', textAlign: 'left' }}>Meet Our Professional Trainers</Typography>
      </Box>
      <Image src={Line} width={600} height={600} style={{ marginTop: -280, marginLeft: -155 }} />
      <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <Avatar sx={{ width: 200, height: 200, marginBottom: "1%", margin: -35 }}>
          <Image
            alt="Aamir Khan"
            src={Aamir}
            width={230}
            height={220}
            className="avatar-image"
          />
        </Avatar>
      </Box>
      <Box sx={{marginTop:'-4%'}}>
      <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "25px", color: 'white', textAlign: 'center' }}>Aamir Khan</Typography>
      <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "15px", color: 'white', textAlign: 'center' }}>Chief Trainer</Typography>
      </Box>
      <Box sx={{ height: '21%', width: '100%', display: 'flex', justifyContent: 'space-evenly', marginBottom: '5%' }}>
        {trainers.map((trainer, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 200, height: 200, marginBottom: 1 }}>
              <Image
                alt={trainer.name}
                src={trainer.image}
                width={230}
                height={220}
                className="avatar-image"
              />
            </Avatar>
            <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "25px", color: 'white', textAlign: 'center' }}>{trainer.name}</Typography>
            <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "15px", color: 'white', textAlign: 'center' }}>{trainer.role}</Typography>
          </Box>
        ))}
      </Box>
      <Footer/>
    </Box>
  );
}

export default Page;
