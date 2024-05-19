import { Box, Card, Typography, Button } from '@mui/material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShieldIcon from '@mui/icons-material/Shield';
import Image from 'next/image';
import Cisco from '../../../public/cisco.svg'
import Microsoft from '../../../public/microsoft.png'
import Google from "../../../public/google.png"
import IBM from "../../../public/ibm.png"
import BlueCoat from "../../../public/blueCoat.png"
import AWS from "../../../public/AWs.png"
import Splunk from "../../../public/splunk.png"
import Nist from "../../../public/nist.svg"
import paloatlo from "../../../public/paloalto.svg"
import mitre from "../../../public/MITRE_ATTACK.png"
import React from 'react';

const Services = () => {
    return (
        <Box sx={{ position: 'relative',  height: '700px', width: '100%', backgroundColor: 'rgba(46, 70, 96, 0.8)' }}>
            <Typography sx={{ textAlign: 'center', paddingTop: '50px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "30px", lineHeight: '35px', color: 'white' }}>
                <span style={{ color: '#00192d' }}>Stay competitive and get the job done.</span>
            </Typography >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '8%' }}>
                <Box sx={{ maxWidth: '500px' }}>
                    <Typography sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white' }}>
                        Expert Cyber Sequrity Training with highly Qualified and Experienced Trainers
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: '400px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '30px', marginTop: '-70px' }}>
                <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: '30%', height: '200px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <ShieldIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
                        <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Professional Certification</Typography>
                    </Box>
                    <Box sx={{ maxWidth: '300px', margin: '0 auto' }}>
                        <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "15px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Get Cyber Security Professional Certificates with free handson training.</Typography>
                        <Button
                            endIcon={<ArrowForwardIcon />}
                            variant="outlined"
                            href="/Certification"
                            sx={{ marginTop: '30px', border: 'solid black', color: 'white', backgroundColor: 'black', '&:hover': { borderColor: 'black', color: 'white', backgroundColor: 'black' } }}
                        >
                            Visit Certifications
                        </Button>
                    </Box>
                </Card>
                <Card
                    sx={{
                        backgroundColor: 'transparent',
                        width: '30%',
                        height: '200px',
                        textAlign: 'center',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            backgroundColor: '#04274c',
                        },
                        borderRadius: '10%'
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <OndemandVideoIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
                        <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Videos</Typography>
                    </Box>
                    <Box sx={{ maxWidth: '300px', margin: '0 auto' }}>
                        <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "15px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Watch on-demand training from industry experts with focused, engaging videos available anytime.</Typography>
                        <Button
                            endIcon={<ArrowForwardIcon />}
                            variant="outlined"
                            href="/Courses"
                            sx={{ marginTop: '10px', border: 'solid black', color: 'white', backgroundColor: 'black', '&:hover': { borderColor: 'black', color: 'white', backgroundColor: 'black' } }}
                        >
                            Visit Course
                        </Button>
                    </Box>
                </Card>


                <Card sx={{ textAlign: 'center', backgroundColor: 'transparent', width: '30%', height: '200px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)', backgroundColor: '#04274c' }, borderRadius: '10%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <ShieldIcon sx={{ fontSize: 30, paddingTop: '20px', color: 'white' }} />
                        <Typography sx={{ paddingTop: '20px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "20px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Job Placement Assistance</Typography>
                    </Box>
                    <Box sx={{ maxWidth: '300px', margin: '0 auto' }}>
                        <Typography sx={{ paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "15px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Get hired with Cyber Security Counsultants and IT giants like CISCO, Google and many vendors across USA</Typography>
                        <Button
                            endIcon={<ArrowForwardIcon />}
                            variant="outlined"
                            href="/Contact"
                            sx={{ marginTop: '10px', border: 'solid black', color: 'white', backgroundColor: 'black', '&:hover': { borderColor: 'black', color: 'white', backgroundColor: 'black' } }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Card>
            </Box>
            <Box>
                <Box>
                    <Typography sx={{ fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "30px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>Train and certify on top technologies from popular vendors.</Typography>
                </Box>
                <Box sx={{width:'80%', height:'100px',  justifyContent:'center', alignItems:'center', display:'flex', gap:6, marginLeft: 20}}>
                    <Image src={Cisco} width={80} height={50} alt='cisco' />
                    <Image src={Microsoft} width={130} height={100} alt='cisco' />
                    <Image src={Google} width={130} height={100} alt='cisco' />
                    <Image src={IBM} width={130} height={100} alt='cisco' />
                    <Image src={BlueCoat} width={130} height={100} alt='cisco' />
                </Box>
                <Box sx={{width:'80%', height:'100px',  justifyContent:'center', alignItems:'center', display:'flex', gap:6, marginLeft: 20}}>
                    <Image src={AWS} width={80} height={50} alt='cisco' />
                    <Image src={Splunk} width={100} height={70} alt='cisco' />
                    <Image src={Nist} width={130} height={100} alt='cisco' />
                    <Image src={paloatlo} width={120} height={50} alt='cisco' />
                    <Image src={mitre} width={130} height={100} alt='cisco' />
                </Box>
            </Box>
        </Box>
    );
};

export default Services;
