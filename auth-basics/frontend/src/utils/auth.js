import {redirect} from "react-router-dom"

export  function getTokenExpiration(){
    const storedExpiration=localStorage.getItem('expiration');
    const expirationDate=new Date(storedExpiration);
    const now=new Date();
    const duration=expirationDate.getTime() - now.getTime();

    return duration;
}
export function getAuthToken(){
    const token =localStorage.getItem('token');
    const tokenExpired=getTokenExpiration();

    if(tokenExpired <0){
        return 'EXPIRED';
    }
    return token;
}

export function tokenLoader(){
    return getAuthToken();
    }



export function checkAuthToken(){
    const token=getAuthToken();

    if(!token){
        return redirect('/auth')
    }
}