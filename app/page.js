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

const StyledHeroSection = () => {

  const heroSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '100vh',
  }

  return (
    <Container sx={heroSectionStyle}>
      <Grid2 container spacing={2} direction={"row"} flexGrow={1}>
        <Grid2 size={5} sx={{paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 8}}>
          <Box sx={{height: "100%", width: "100%", bgcolor: 'primary.main', textAlign: 'center', borderRadius: 12}}>Image placeholder</Box>
        </Grid2>
        <Grid2 size={7} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 8, paddingBottom: 8}}>  
          <Box sx={{marginBottom: 4}}><Typography variant="h2" color="primary.main" textAlign={'center'} fontWeight={"bold"}>Identify and cure plant diseases with <Box component={'span'} sx={{color: 'primary.dark'}}>LeafLens</Box></Typography></Box>
          <Box sx={{marginBottom: 4}}><Typography variant="h5" textAlign={"center"}>Is your garden child dying?<br/>Try the LeafLens app to identify the cause<br/>and get extensive disease and care<br/>info in a snap</Typography></Box>
          <Button variant="outlined" sx={{borderRadius: 8, border: "2px solid", '&:hover':{color: 'white', bgcolor: 'primary.main', border: '2px solid', borderColor: 'primary.main'}}}><Typography variant="h5" fontWeight={"bold"}>Try Now</Typography></Button>
        </Grid2>
      </Grid2>
    </Container>
  )
}

const StyledDiagnose = () => {

  const DiagnoseSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '100vh',
  }

  return (
    <Container sx={DiagnoseSectionStyle}>
      <Grid2 container spacing={2} direction={'row'} flexGrow={1}>
        <Grid2 size={7} sx={{paddingTop: 8, paddingBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Box>
            <Typography variant="h3" sx={{fontWeight: 'bold', marginBottom: 4}}>How to identify a disease</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: 1}}>
              <Box sx={{width: 40, height: 40, bgcolor: 'primary.main', marginRight: 2, borderRadius: 999}}>
                <Typography variant="h5" textAlign={'center'} fontWeight={'bold'}>1</Typography>
              </Box>
              <Typography variant="h5">Keep the diseased parts of your sick plants at the center</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: 1}}>
              <Box sx={{width: 40, height: 40, bgcolor: 'primary.main', marginRight: 2, borderRadius: 999}}>
                <Typography variant="h5" textAlign={'center'} fontWeight={'bold'}>2</Typography>
              </Box>
              <Typography variant="h5">Crop your photo by 224x224 px</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: 1}}>
              <Box sx={{width: 40, height: 40, bgcolor: 'primary.main', marginRight: 2, borderRadius: 999}}>
                <Typography variant="h5" textAlign={'center'} fontWeight={'bold'}>3</Typography>
              </Box>
              <Typography variant="h5">Upload photo by clicking on the "Submit" button</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: 1}}>
              <Box sx={{width: 40, height: 40, bgcolor: 'primary.main', marginRight: 2, borderRadius: 999}}>
                <Typography variant="h5" textAlign={'center'} fontWeight={'bold'}>4</Typography>
              </Box>
              <Typography variant="h5">That'it! Now you know the issue and how to cure it</Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={5} sx={{paddingTop: 8, paddingBottom: 8}}>
          <ImageUpload/>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default function Home() {
  return (
    <StyledRoot>
      <StyledHeroSection/>
      <StyledDiagnose/>
    </StyledRoot>
  );
}
