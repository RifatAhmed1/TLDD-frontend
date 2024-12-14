import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import About from './about'

export default function Header() {
  return (
    <Box sx={{display: 'flex'}}>
        <AppBar position='static' sx={{backgroundColor: "#5CA904"}}>
            <Toolbar>
                <Button sx={{color: 'white'}}>Logo</Button>
                <Box flexGrow={1}/>
                <About/>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
