import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Box sx={{display: 'flex'}}>
        <AppBar position='static' sx={{backgroundColor: "#5CA904"}}>
            <Toolbar>
                <Button sx={{color: 'white'}}>Logo</Button>
                <Box flexGrow={1}/>
                <Button sx={{color: 'white'}}>About</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
