import React, {useRef, useState, useEffect} from "react"
import axios from "axios";

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
  const [user, setUser] = useState([]);
  useEffect(()=>{
    axios.get('/api/backend').then((response)=>{
      console.log(response)
      setUser(response.data.users)
    })
  },[])
  console.log(user)
  return (
    <div>
      {user.map((item, index)=>{
        return (<h4 key={index}>{item.firstName}</h4>)
      })}
    </div>
  )
}

export default App