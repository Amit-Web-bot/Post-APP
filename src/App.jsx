import React, {useRef, useState, useEffect} from "react"
import { LoginSignup } from "./components/Home"

/**
 * useState => Manages the state of the component 
 * useEffect  => Execute  the side effect, Something out of the React  
 * useRef => 
 * 
 * 
 * 
 */
let users = []
function App (){
  return (
    <div>
      <LoginSignup/>
    </div>
  )
}

export default App