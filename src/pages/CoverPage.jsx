import { Box, Grid, Typography, Button, Avatar, Divider, Stack } from '@mui/material';
import React from 'react';
import myImg from '../assets/profile-img.jpeg'

const CoverPage = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={4}>
                    <Box sx={{ backgroundColor: '#F2D2BD', height: '100vh' }}></Box>
                </Grid>
                <Grid item lg={8}>
                    <Box sx={{ backgroundColor: '#FFFFFF', height: '100vh', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '400px', ml: 30 }}>
                            <Stack spacing={1} direction={'row'} sx={{ alignItems: 'center' }}>

                                <Typography variant="h5" component="div">
                                    Hey I'm
                                </Typography>
                                <Typography sx={{ fontSize: 35, fontWeight: 600 }}>
                                    Asmita Patil
                                </Typography>
                            </Stack>
                            <Typography sx={{ marginBottom: '30px', fontSize: 16 }}>
                                FRONTEND DEVELOPER & WEB DEVELOPER
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                <Button variant="contained" color="primary">RESUME</Button>
                                <Button variant="outlined">PROJECTS</Button>
                            </Box>
                            <Typography variant="body1" component="div" sx={{ marginBottom: '20px' }}>
                                Hello! I'm Asmita Patil, a passionate and detail-oriented frontend developer, I specialize in creating beautiful, responsive, and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, and expertise in modern frameworks like React, I strive to bring innovative and efficient solutions to life.
                            </Typography>
                            <Typography variant="body1" component="div">
                            My goal is to deliver seamless user experiences while maintaining clean and maintainable code.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '15%',
                    right: '15%',
                    width: '20%',
                    backgroundColor: '#FFFFFF',
                    padding: '40px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                    zIndex: 1
                }}
            >
                <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ borderRadius: 10, overflow: 'hidden' }}>
                        <img src={myImg} alt="Profile" style={{ height: 200, width: 200, borderRadius: '50%' }} />
                    </Box>
                    <Typography variant="h5" component="div">
                        Asmita Patil
                    </Typography>
                    <Divider sx={{ width: 70, bgcolor: 'red' }} />
                    <Typography variant="subtitle1" component="div" sx={{ marginBottom: '40px' }}>
                        FRONTEND DEVELOPER
                    </Typography>
                </Stack>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '30px' }}>
                    <Button href="https://facebook.com" target="_blank">FB</Button>
                    <Button href="https://twitter.com" target="_blank">TW</Button>
                    <Button href="https://linkedin.com" target="_blank">LI</Button>
                    <Button href="https://instagram.com" target="_blank">IG</Button>
                </Box>
            </Box>
            {/* <Box sx={{ position: 'absolute', top: '30%', left: '45%', transform: 'translateX(-50%)', zIndex: 0 }}>
                <Typography variant="h2" component="div">
                    Hello
                </Typography>
                <Typography variant="h5" component="div" sx={{ marginBottom: '30px' }}>
                    Here's who I am & what I do
                </Typography>
                <Box sx={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                    <Button variant="contained" color="primary">RESUME</Button>
                    <Button variant="outlined">PROJECTS</Button>
                </Box>
                <Typography variant="body1" component="div" sx={{ marginBottom: '20px' }}>
                    I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                </Typography>
                <Typography variant="body1" component="div">
                    I'm a great place for you to tell a story and let your users know a little more about you.
                </Typography>
            </Box> */}
        </>
    );
}

export default CoverPage;
