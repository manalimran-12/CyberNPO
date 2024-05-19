"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Logo from "../../../public/logo.png"
import { useRouter } from 'next/navigation'; // Import useRouter

const pages = ['Courses', 'Certification', 'About', 'Trainers'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const router = useRouter(); // Initialize useRouter

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="relative" elevation={0} sx={{ backgroundColor: 'transparent', }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => router.push('/')}> {/* Use useRouter to navigate */}
                        <Image src={Logo} width={120} height={120}/>
                    </IconButton>

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => router.push(`/${page}`)} // Use useRouter to navigate
                                sx={{ mx: 1, color: 'white', fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', '&:hover': { textDecoration: 'none', borderBottom: '2px solid #04274c' } }} // Text color and underline color
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Button
                        color="inherit"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            borderRadius: '12024.34px',
                            width: '140px',
                            height: '45px',
                            backgroundColor: '#04274c',
                            color: 'white',
                            fontFamily: 'aktiv-grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
                            '&:hover': { backgroundColor: '#00192d', textDecoration: 'underline' },
                        }}
                        onClick={() => router.push('/Contact')} // Use useRouter to navigate
                    >
                        Contact Us
                    </Button>

                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={() => {router.push(`/${page.toLowerCase()}`); handleCloseNavMenu();}}>
                                {page}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
