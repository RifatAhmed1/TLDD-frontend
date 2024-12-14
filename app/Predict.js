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
        formData.append('file', file);

        try{
            const response = await fetch('http://localhost:8000/predict',
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

    return(
        <Box 
            sx={{marginTop: 8}}
        >
            <Box 
                component={"form"} 
                sx={{display: 'flex', flexDirection: {xs:'column'}, justifyContent: 'center', alignItems:'center'}} 
                onSubmit={handleSubmit}
            >
                {file ? <div>{file.name}</div> : <div>Upload your tomato leaf image</div>}
                <Button 
                    onClick={handleFileClick}
                >
                    {previewUrl ? <div><img src={previewUrl} height={200} width={200}/></div>:<div><img src={"./no-image.jpg"} height={200} width={200}/></div>}
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
                    sx={{display: 'flex', flexGrow: 0}} 
                    type="submit" 
                    disabled={isLoading}
                >
                    {isLoading? "Submitting..." : "Submit"}
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