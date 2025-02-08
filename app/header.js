import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MobileMenu from './mobileMenu'

export default function Header() {
  return (
    <Box sx={{display: 'flex', borderBottom: '2px solid', borderColor: 'primary.main'}}>
        <AppBar position='sticky' sx={{backgroundColor: "white", boxShadow: 'none'}}>
          <Container>
            <Toolbar>
                <Button variant='text' sx={{color: 'primary.main'}}>
                  <Typography variant='h3' fontWeight={'bold'}>
                    LeafLens
                  </Typography>
                </Button>
                <Box flexGrow={1}/>
                <Button variant='text' sx={{marginLeft: 2, display: {xs: 'none', md: 'block'}}}><Typography variant='h5'>Library</Typography></Button>
                <Button variant='text' sx={{marginLeft: 2, display: {xs: 'none', md: 'block'}}}><Typography variant='h5'>Sign In</Typography></Button>
                <Button variant='text' href='#diagnose' sx={{marginLeft: 2, display: {xs: 'none', md: 'block'}}}><Typography variant='h5'>Try Now</Typography></Button>
                <MobileMenu/>
            </Toolbar>
          </Container>
        </AppBar>
    </Box>
  )
}
