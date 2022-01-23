import React from "react";
import Navabr from "./components/Navabr.js" 
import Home from "./components/Home.js" 
import Camera from "./components/Camera.js" 
import {useState} from 'react'
function App() {
 const [comp, setComp]= useState("Home");
 const [Name, setName]= useState("dd");
const Name1 = (e)=>{
  setName(e);
}
const change = ()=>{
  setComp("cameraPage")
}
  return (
    <>

<Navabr title= {"Camera App"}/>

{comp === "Home" && <Home nameChange= {Name1}  change={change}/> }

{comp === "cameraPage" && <Camera Name={Name}/> }
{comp === "" && <Home nameChange= {Name1}/> }

</>

  );
}



export default App;

