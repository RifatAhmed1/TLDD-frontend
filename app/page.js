import Image from "next/image";
import styles from "./page.module.css";
import ImageUpload from "./Predict";
import { Box, Container, Typography } from "@mui/material";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Box sx={{bgcolor: '#228B22', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', textAlign: 'center'}}>
        <Typography variant='h4'>Welcome to Tomato Leaf Disease Detector</Typography>
      </Box>
      <Container>
        <ImageUpload/>
        <footer>

        </footer>
      </Container>
    </>
  );
}
