import Image from "next/image";
import styles from "./page.module.css";
import ImageUpload from "./predict";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";

const StyledRoot = (props) => {
  const {children, ...rest} = props;
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column', 
    flex: 1
  }
  return (
    <Box sx={boxStyle} {...rest}>
      {children}
    </Box>
  )
}

const StyledHeroSection = (props) => {
  const {children, ...rest} = props;
  const heroSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
  return (
    <Container sx={heroSectionStyle} {...rest}>
      <Grid2 container spacing={2} direction={"row"} flexGrow={1}>
        <Grid2 size={5}>

        </Grid2>
        <Grid2 size={7} direction={"column"}>  
          <Typography></Typography>
          <Typography>Is your garden child dying?<br/>Try the LeafLens app to identify the<br/>cause and get extensive disease and care info in a snap</Typography>
          <Button>Try Now</Button>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default function Home() {
  return (
    <StyledRoot>
      <StyledHeroSection/>
    </StyledRoot>
  );
}
