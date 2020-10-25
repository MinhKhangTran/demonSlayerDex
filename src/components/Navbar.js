import React from 'react'
import Search from "./Search"
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
    const {
        isAuthenticated,
        loginWithRedirect,logout,user,isLoading
      } = useAuth0();
      const isUser = isAuthenticated && user;

    return (
        <nav>
        <div className="bg-blue-200">
<div className="w-11/12 md:w-4/5 mx-auto p-4 flex items-center justify-between flex-wrap">
<Search></Search>
<div className="flex items-center">

        {isUser && user.picture && <img className="mr-2 h-8 w-8 rounded-full" src={user.picture} alt={user.name}/>}
{isUser &&  user.name && <h1>Welcome, <span className="font-bold">{user.name}</span></h1>}
</div>
{isUser ? (<button onClick={()=>{logout({returnTo:window.location.origin})}} className="ml-2 bg-blue-700 text-blue-100 px-3 rounded font-mono hover:bg-blue-900">
    Logout
</button>):(<button onClick={loginWithRedirect} className="ml-2 bg-blue-700 text-blue-100 px-3 rounded font-mono hover:bg-blue-900">
    Login
</button>)}


</div>
        </div>
            
        </nav>
    )
}
