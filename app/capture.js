"use client";

import React, {useEffect, useRef, useState} from 'react';
import Webcam from 'react-webcam';

export default function PhotoClicker() {
    const webcamRef = useRef(null);
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [hasCameraAccess, setHasCameraAccess] = useState(false);
    const [mediaStream, setMediaStream] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=>{
        if (mediaStream && webcamRef.current){
            webcamRef.current.stream = mediaStream;
        }
    },[mediaStream, webcamRef.current])

    const handleCameraAccess = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: true});
            setMediaStream(stream);
            setHasCameraAccess(true);
        } catch (error) {
            console.error("Error accessing camera: ", error);
            setHasCameraAccess(false);
        }
    };

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setSelectedImage(imageSrc);

        fetch(imageSrc).then((res)=>res.blob()).then((blob)=>{
            const file = new File([blob], "captured_image.jpg", {type: "image/jpeg"});
        
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInputRef.current.files = dataTransfer.files;
        })

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedImage){
            alert("Take a photo first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", fileInputRef.current.files[0]);

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
            setData(data);
        }catch (error){
            alert('Error')
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        };
    };

    return(
        <div>
            {hasCameraAccess ? 
            (
                <>
                    {!selectedImage ? 
                        (
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat='image/jpeg'/>
                        ):
                        (
                            <>
                                <img src={selectedImage} alt='captured image'/>
                                <button onClick={()=>setSelectedImage(false)}>retry</button>
                            </>
                        )
                    }

                    <button onClick={capture}>Capture Photo</button>

                    <input
                        type='file'
                        accept='image/*'
                        ref={fileInputRef}
                        readOnly    
                    />
                    <form onSubmit={handleSubmit}>
                        {selectedImage && (
                            <button type='submit'>
                                submit
                            </button>
                        )}
                    </form>
                    <div>
                        {data && <>{data.prediction} {data.probability}</>}
                    </div>
                    {selectedImage && (
                        <img src={selectedImage} alt="captured image"/>
                    )}
                </>
            ):    
            (
                <button onClick={handleCameraAccess}>Allow Camera Access</button>
            )
            }
        </div>
    )
}