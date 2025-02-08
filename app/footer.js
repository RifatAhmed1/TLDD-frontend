import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const StyledRoot = (props) => {
  const { children, ...rest } = props;

  const boxStyle = {
    backgroundColor: "secondary.main",
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 100,
    padding: 4
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <Box {...rest} sx={boxStyle}>
      <Container sx={containerStyle}>
        { children }
      </Container>
    </Box>
  );
};

export default function Footer() {
  return (
    <StyledRoot>
        <Typography variant='body1' textAlign={"center"} sx={{color: 'white'}}>This is a portfolio project (MVP)<br/> Some features are currently in development</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color: 'white'}}>Tools and Technologies used:</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color: 'white'}}>TensorFlow, Keras, Next.js, MUI, FastAPI</Typography>
        <Typography variant={'body1'} textAlign={"center"} sx={{color: "white"}}><a href='https://www.github.com/rifatahmed1'>&copy; Developed by Rifat Ahmed</a></Typography>
    </StyledRoot>
  )
}
