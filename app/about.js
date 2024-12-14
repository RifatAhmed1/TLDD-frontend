"use client";

import { Box, Button, Drawer, Typography } from '@mui/material';
import React, { useState } from 'react'
import Link from 'next/link';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

export default function About() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Button sx={{color: 'white'}} onClick={toggleDrawer(true)}>About</Button>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                <Box sx={{minWidth: 360, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Box sx={{ backgroundColor: "#5CA904", display: 'flex', maxWidth: 360, height: "100vh", flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant='h4'>Tomato Leaf Disease Detector</Typography>
                        <Typography variant='body1'><b>Model</b><br/> VGG16</Typography>
                        <Typography variant='body1'><b>Accuracy</b><br/> 87%</Typography>
                        <Typography variant='body1'><b>Dataset</b><br/> tomato leaf disease images from<br/> <Link style={{color: 'blue'}} href='https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset'>New Plant Diseases Dataset</Link></Typography>
                        <Typography variant='body1'><b>Technologies Used</b><br/> Nextjs, FastAPI, TensorFlow 2.x, Keras, Docker, Vercel, Google Cloud Platform</Typography>
                        
                    </Box>
                    <Button sx={{height: "100vh"}} onClick={toggleDrawer(false)}><ChevronRightSharpIcon sx={{color:'#228B22', fontSize: 48}}/></Button>                   
                </Box>
            </Drawer>
        </>
    )
}
