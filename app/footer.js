import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <AppBar position='fixed' sx={{top: 'auto', bottom:0, minHeight: 36, backgroundColor: '#1E1E1E',}}>
        <Toolbar>
            <Box flexGrow={1}><Typography variant='body2' sx={{color: 'white', textAlign: 'center'}}>Developed by Rifat Ahmed</Typography>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
