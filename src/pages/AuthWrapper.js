import React from 'react'
import {useAuth0} from "@auth0/auth0-react"

export default function AuthWrapper({children}) {
    const {
        isLoading,
        error,
      } = useAuth0();
      if(isLoading){
        return <div className="grid place-items-center text-blue-400 text-3xl h-screen">Loading...</div>;
    }
    if (error) {
      return <div className="grid place-items-center text-blue-400 text-3xl h-screen">Oops... {error.message}</div>;
    }
    return <>{children}</>;
    
}
