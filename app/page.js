import Image from "next/image";
import styles from "./page.module.css";
import ImageUpload from "./predict";
import { Box, Container, Typography } from "@mui/material";
import Header from './header';
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Box sx={{bgcolor: '#228B22', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', textAlign: 'center', paddingTop: 4, paddingBottom: 4}}>
        <Typography variant='h4'>Welcome to Tomato Leaf Disease Detector</Typography>
      </Box>
      <Container>
        <ImageUpload/>
      </Container>
      <Footer/>
    </>
  );
}
