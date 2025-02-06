import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledRoot = (props) => {
  const { children, ...rest } = props;

  const boxStyle = {
    backgroundColor: "secondary.main",
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    maxHeight: 100
  }

  const containerStyle = {
    flexGrow: 1
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
        <Typography sx={{color: "primary.main"}}>Developed by Rifat</Typography>
    </StyledRoot>
  )
}
