import { LoginSignup } from "../components/LoginSignup"
import { Homescreen } from "../components/Home"
import { useState } from "react"
import { checkIsUserLoggedIn } from "./auth-model";


export  const AuthApp = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(checkIsUserLoggedIn);

    return (
        <div>
            {isLoggedIn ? <Homescreen/>: <LoginSignup setIsLoggedIn = {setIsLoggedIn}/> }
        </div>
    )
}