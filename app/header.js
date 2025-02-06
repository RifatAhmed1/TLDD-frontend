import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import About from './about'

export default function Header() {
  return (
    <Box sx={{display: 'flex'}}>
        <AppBar position='sticky' sx={{backgroundColor: "white", boxShadow: 'none'}}>
          <Container>
            <Toolbar>
                <Button variant='text' sx={{color: 'primary.main'}}>
                  <Typography variant='h3'>
                    LeafLens
                  </Typography>
                </Button>
                <Box flexGrow={1}/>
                <Button variant='outlined'><Typography variant='h5'>Library</Typography></Button>
                <Button variant='outlined'><Typography variant='h5'>Sign In</Typography></Button>
                <Button variant='outlined'><Typography variant='h5'>Try Now</Typography></Button>
                <About/>
            </Toolbar>
          </Container>
        </AppBar>
    </Box>
  )
}
