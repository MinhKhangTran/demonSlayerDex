import React from 'react'
import {Link} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"

export default function Login() {
    const {loginWithRedirect} = useAuth0()
    return (
        <section className="h-screen w-screen grid place-items-center" style={{background:"url('https://cdnb.artstation.com/p/assets/images/images/025/747/269/large/carlos-gonzalez-demon-slayer-04.jpg?1586803202')"}}>
            <div className="text-blue-100 inline-block text-center">
<h1 className="text-5xl font-bold mb-4 p-2">Welcome to the <span className="text-blue-500 border-b-2 border-blue-500 italic border-dashed font-mono">Demon Slayer</span> <br/> Character Dex</h1>
            <button onClick={loginWithRedirect} className="bg-blue-500 text-xl px-3 text-blue-100 rounded py-1 hover:bg-blue-700 transition transition-all duration-300 ease-in-out">Login / Sign up</button>
            </div>
        </section>
    )
}
