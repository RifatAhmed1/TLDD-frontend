"use client";

import { Box, Button, Drawer, Typography } from '@mui/material';
import React, { useState } from 'react'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import { Menu } from '@mui/icons-material';

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Box sx={{display: {xs: 'block', md: "none"}}}>
            <Button sx={{color: 'primary.dark'}} onClick={toggleDrawer(true)}><Menu fontSize='large'/></Button>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                <Box sx={{minWidth: 'max-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Button sx={{height: "100vh", bgcolor: 'primary.main', color: 'white', borderRadius: 0}} onClick={toggleDrawer(false)}><ChevronRightSharpIcon sx={{ fontSize: 48}}/></Button>                   
                    <Box sx={{ backgroundColor: "white", display: 'flex', maxWidth: 360, paddingTop: 8, height: "100vh", flexDirection: 'column', textAlign: 'center', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Button fullWidth variant='text' onClick={toggleDrawer(false)} sx={{marginBottom: 2, marginLeft: 4, marginRight: 4}}><Typography variant='h5'>Library</Typography></Button>
                        <Button fullWidth variant='text' onClick={toggleDrawer(false)} sx={{marginBottom: 2, marginLeft: 4, marginRight: 4}}><Typography variant='h5'>Sign In</Typography></Button>
                        <Button fullWidth variant='text' onClick={toggleDrawer(false)} href='#diagnose' sx={{marginBottom: 2, marginLeft: 4, marginRight: 4}}><Typography variant='h5'>Try Now</Typography></Button>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    )
}
