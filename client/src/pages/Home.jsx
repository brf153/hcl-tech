import React from 'react';
import mainPic from '../assets/main.jpg';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import logo from "../assets/logo.png";

function Home() {
  return (
<Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
  {/* Background Image with Overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for better readability
      },
    }}
  >
    <img
      src={mainPic}
      alt="Main"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </Box>

  {/* Navbar */}
  <Box
    position="static"
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
      <img src={logo} alt="Logo" style={{ width: 100, height: 100 }} />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button sx={{ color: 'white' }} href="/schedule">
          Schedule
        </Button>
        <Button sx={{ color: 'white' }} href="/reports">
          View Reports
        </Button>
      </Box>
      <Button sx={{ color: 'white' }}>Logout</Button>
    </Toolbar>
  </Box>

  <Box>
    <Typography
      variant="h2"
      sx={{
        color: 'white',
        textAlign: 'center',
        marginTop: '20vh',
      }}
    >
      Welcome to the Dashboard
    </Typography>
    <Typography variant='subtitle1' sx={{ color: 'white', textAlign: 'center' }}>
      Manage your schedule and view reports
    </Typography>
  </Box>
</Box>

  );
}

export default Home;
