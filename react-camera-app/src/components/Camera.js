
import React, { useState } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export default function Camera(props) {

    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);

    var imageSrc = "";
    const capture = React.useCallback(
        () => {
            imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);


        });
  function downloadimg(){
    var a = document.getElementById("downloadBtn"); //Create <a>
    a.href = imageSrc; //Image Base64 Goes here
    a.download = "image.jpg"; //File name Here
    a.innerText= "Download";
    a.classList.add("btn-success");
  }

    return (
        <div className="container my-2 ">
            <h1 className="text-center cap">Hello {props.Name}</h1>


            <div className="webcam-img m-auto">

                {image == '' ? <Webcam
                    audio={false}

                    ref={webcamRef}
                    screenshotFormat="image/jpeg"

                    videoConstraints={videoConstraints}
                /> : <img src={image} />}

            </div>
            <div className='mybtn'>

                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="btn btn-primary px-3 my-2">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                        downloadimg();


                    }}
                        className="btn btn-primary px-3  text-center">Capture</button>
                }
   
                <a id="downloadBtn" className="btn mx-3 "></a>
            </div>
        </div>
    );
}