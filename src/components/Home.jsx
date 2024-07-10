import { useEffect, useState } from "react"
import {  getUserDetails} from "../auth/auth-model"

export const Homescreen = ()=>{
    const [userInfo, setUserInfo] = useState(null)
    const [apistatus, setApiStatus] = useState("init")

    useEffect(()=>{
        (async function(){
            setApiStatus("pending");
            const {success, data} = await getUserDetails();
            if(success){
                setApiStatus("Success");
                setUserInfo(data);
            }
            else{
                setApiStatus("error")
            }
        })();
    },[]);

    if(apistatus === "error") return <b>Something went wrong</b>

    if(apistatus === "init" || apistatus === "pending") return <p>Loading .....</p> 

    return (
        <div>
            {`Welcome Back ${userInfo.firstName} ${userInfo.lastname}`}
        </div>
    );
}