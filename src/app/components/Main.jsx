import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import main from "../../../public/main.png";

const Main = () => {
    return (
        <Box sx={{
            position: 'relative',
            height: 'auto',
            width: '96%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: '2%',
        }}>
            <Box sx={{
                height: 'auto',
                width: { xs: '90%', md: '45%' },
                padding: '2%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderRadius: '10px 100px / 120px',
                backgroundColor: 'rgba(46, 70, 96, 0.8)',
                marginTop: { xs: '2%', md: '1%' },
                marginY: { xs: 'auto', md: '0' }
            }}>
                <Box>
                    <Box sx={{ maxWidth: '600px' }}>
                        <Typography sx={{
                            fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
                            fontWeight: 700,
                            fontSize: "25px",
                            lineHeight: '35px',
                            color: 'white'
                        }}>
                            Free handson Cyber Security training.
                            <br />
                            <span style={{ color: '#00192d' }}>Learn and get hired with jobs Placement Assistance in USA.</span>
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: '500px' }}>
                        <Typography sx={{
                            fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
                            fontWeight: 500,
                            fontSize: '15px',
                            color: 'white',
                            paddingTop: '20px'
                        }}>
                            We help our students to get hired with Cyber Security Services Provider, Consultants and IT giants like CISCO, Google and many vendors across USA
                        </Typography>
                    </Box>
                    <Link href="/Courses" passHref>
                        <Button
                            endIcon={<ArrowForwardIcon />}
                            color="inherit"
                            sx={{
                                borderRadius: '12024.34px',
                                marginTop: '20px',
                                width: '190px',
                                height: '50px',
                                backgroundColor: '#04274c',
                                color: 'white',
                                fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
                                '&:hover': { backgroundColor: '#00192d', textDecoration: 'underline' },
                            }}
                        >
                            Visit Our Courses
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box sx={{
                height: 'auto',
                width: { xs: '90%', md: '40%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: { xs: '2%', md: '0%' },
                marginX: { xs: 'auto', md: '0' },
                overflow: 'hidden'
            }}>
                <Image src={main} alt="Main Image" layout="responsive" objectFit="cover" objectPosition="center" />
            </Box>
        </Box>
    );
}

export default Main;
