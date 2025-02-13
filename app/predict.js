"use client";

import { Box, Button, Input, TextField, Typography } from "@mui/material";
import {useState} from "react"

export default function ImageUpload(){
    const [file, setFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [probability, setProbability] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileClick = () => {
        document.getElementById('fileInput').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        if (file)
            {setPreviewUrl(URL.createObjectURL(file));}
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please select an image first.");
            return;
        }

        setIsLoading(true);
        
        const formData = new FormData();
        formData.append('image', file);

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`,
                {
                    method: 'POST',
                    body: formData,
                }
            );
            if (!response.ok){
                const errorData = await response.text();
                throw new Error(`Server Error: ${errorData}`);
            }

            const data = await response.json();
            setPrediction(data.prediction);
            setProbability(data.probability);
        } catch (error){
            console.log(error);
            alert("Something went wrong! Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    const rootStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }

    return(
        <Box sx={rootStyle}>
            <Box 
                component={"form"} 
                sx={{display: 'flex', flexDirection: {xs:'column'}, justifyContent: 'center', alignItems:'center'}} 
                onSubmit={handleSubmit}
            >
                {file && <div>{file.name}</div>}
                <Button 
                    onClick={handleFileClick}
                >
                    {previewUrl ? <div><img src={previewUrl} style={{borderRadius: 12}} height={224} width={224} /></div>:<div><img src={"no-image.jpg"} style={{borderRadius: 12}} height={224} width={224}/></div>}
                </Button>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    id="fileInput" 
                    style={{display: 'none'}}
                />
                <Button 
                    variant="contained" 
                    sx={{borderRadius: 8, '&:hover': {bgcolor: 'primary.main'}}} 
                    type="submit" 
                    disabled={isLoading}
                >  
                    <Typography variant="h5" color="white">
                        {isLoading? "Submitting..." : "Submit"}
                    </Typography>
                </Button>
            </Box>
            <Box sx={{marginTop: 4}}>
                {prediction && 
                    <Box 
                        sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
                    >
                        <Typography variant="body1"><b>Prediction:</b> {prediction}</Typography>
                        <Typography variant="body1"><b>Probability:</b> {probability}</Typography>
                    </Box>
                }
            </Box>
        </Box>
    );
}
