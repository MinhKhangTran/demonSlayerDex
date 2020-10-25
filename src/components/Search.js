import React from 'react'
import {useGlobalContext} from "../context"
export default function Search() {
const {error,loading,fetchPerson,people} = useGlobalContext()
const [character,setCharacter] = React.useState("")
const handleSubmit =(e)=>{
    e.preventDefault()
    // console.log(character)
    console.log(people.name);
if(character){
    fetchPerson(character)
    setCharacter("")
    
}
}
    return (
        <form className="flex-1 mb-4 sm:mb-0 flex items-center" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a number ..." className={error?"rounded-l bg-red-200 pl-2 text-blue-500 text-xl border-red-700 border":"rounded-l bg-gray-200 pl-2 text-blue-500 text-xl" } value={character} onChange={(e)=>(setCharacter(e.target.value))}/>
            <button type="submit" className="bg-blue-500 text-xl px-3 text-blue-100 rounded-r hover:bg-blue-700 transition transition-all duration-300 ease-in-out">Search</button>
        </form>
    )
}
