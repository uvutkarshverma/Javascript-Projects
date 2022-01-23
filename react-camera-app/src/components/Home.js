import React from 'react'
import {useState} from 'react'
export default function Home(props) {
  const [Name, setName]= useState("");

    return (
        <>
        

<div class="lll text-center">

<main class="form-signin ">
  <form>
    
    <h1 class="h3 mb-3 fw-normal">Please Enter Your Name</h1>

    <div class="form-floating my-3">

      <input type="text" class="form-control" id="floatingInput" placeholder="Username" onChange={(e) => {setName(e.target.value); props.nameChange(e.target.value)}}/>
      <label for="floatingInput">Name</label>
    </div>
  

    <button class="w-100 btn btn-lg btn-primary"  disabled={Name.length===0} onClick={props.change}>Open Camera</button>
    <p>Having <a href="/">Troubleshoot here</a></p>
    <p class="mt-5 mb-3 text-muted">&copy; 2022 Camera App- Brought to you by Utkarsh</p>
  </form>
</main>
</div>


        
        
        </>




    );
}