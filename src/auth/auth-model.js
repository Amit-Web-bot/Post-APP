import axios from "axios";

const baseUrl = ""

const endpoints = {
    login: `${baseUrl}/login`,
    signup: `${baseUrl}/signup`,
    details: `${baseUrl}/details`,
}

export class Auth{
    login = async (logininfo)=>{
        const httpConfig = {
            method: "POST",
            data: logininfo
        };
        try{
            const response = await axios(endpoints.login, httpConfig);
            const token = response.data.result;
            localStorage.setItem("token", token);
            return { success: true}

        }catch(error){
            console.log("API Call failed", error.message)
            return {
                success: false
            }

        }
        
    }

    signup = async (signupInfo)=>{
        const httpConfig = {
            method: "POST",
            data: signupInfo
        };
        try {
            const response = await axios(endpoints.signup, httpConfig);
            console.log(response)
        } catch (error) {
            console.log("API Call failed", error.message);
        }
    }
}

export async function getUserDetails(){
    const token = localStorage.getItem("token");
    const httpConfig = {
        method: "GET",
        headers: {
            Authorization : `Bearer: ${token}`
        }
    };

    try {
        await new Promise((resolve)=>setTimeout(resolve,3000))
        const response = await axios(endpoints.details, httpConfig);
        return{
            success: true,
            data: response.data[0]
        }
    } catch (error) {
        return { success: false, data: "Something went wrong"};
    }
}

export function checkIsUserLoggedIn(){
    return Boolean(localStorage.getItem("token"));
}