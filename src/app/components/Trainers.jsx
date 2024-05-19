import { Box, Typography, Button, Avatar } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Aamir from '../../../public/Avatar main.png'
import Trainer1 from '../../../public/trainer1.jpeg'
import Trainer2 from '../../../public/trainer2.jpeg'
import Trainer3 from '../../../public/trainer3.jpeg'
import Trainer4 from '../../../public/trainer4.jpeg'

const Trainers = () => {
    return (
        <Box sx={{ position: 'relative', height: '500px', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
            <Box sx={{ width: '30%', height: '200px', marginLeft: '40px', marginTop: '10%' }}>
                <Typography sx={{ textAlign: 'left', paddingTop: '10px', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: "30px", lineHeight: '25px', color: 'white', textAlign: 'center' }}>
                    Train with the IT elite.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link href="/Trainers" passHref>
                        <Button
                            endIcon={<ArrowForwardIcon />}
                            color="inherit"
                            sx={{
                                borderRadius: '12024.34px',
                                marginTop: '40px',
                                width: '200px',
                                height: '50px',
                                backgroundColor: '#04274c',
                                color: 'white',
                                fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
                                '&:hover': { backgroundColor: '#00192d', textDecoration: 'underline' },
                            }}
                        >
                            Meet Our Trainers
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box sx={{ height: '80%', width: '60%', borderRadius: '10px 100px / 120px', marginTop: '2.5%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ height: '21%', width: '20%', display: 'flex', justifyContent: 'center', marginBottom: '8%' }}>
                    <Avatar sx={{ width: 100, height: 100 }}>
                        <Image
                            alt="Aamir Khan"
                            src={Aamir}
                            width={100}
                            height={100}
                            className="avatar-image"
                        />
                    </Avatar>
                </Box>
                <Box sx={{ height: '21%', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                    <Avatar sx={{ width: 80, height: 80 }}>
                        <Image
                            alt="Avatar 1"
                            src={Trainer1}
                            width={100}
                            height={90}
                            className="avatar-image"
                        />
                    </Avatar>
                    <Avatar sx={{ width: 80, height: 80 }}>
                        <Image
                            alt="Avatar 2"
                            src={Trainer2}
                            width={100}
                            height={90}
                            className="avatar-image"
                        />
                    </Avatar>
                    <Avatar sx={{ width: 80, height: 80 }}>
                        <Image
                            alt="Avatar 3"
                            src={Trainer3}
                            width={100}
                            height={90}
                            className="avatar-image"
                        />
                    </Avatar>
                    <Avatar sx={{ width: 80, height: 80 }}>
                        <Image
                            alt="Avatar 4"
                            src={Trainer4}
                            width={100}
                            height={90}
                            className="avatar-image"
                        />
                    </Avatar>
                </Box>
            </Box>


        </Box>
    )
}

export default Trainers
