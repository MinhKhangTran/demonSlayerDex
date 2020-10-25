import React from 'react'
import {person} from "./mockPerson"
import axios from 'axios';
const url = "https://react-demonslayer-api.herokuapp.com/people"


export const AppContext = React.createContext()

export const AppProvider =({children})=>{
    const [people,setPeople] = React.useState(person)
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState(false)

    // fetching
    const fetchPerson = async(id)=>{
        setError(false)
        setLoading(true)
        
            const response = await axios(`${url}/${id}`).catch((err)=> console.log(err));
console.log(response);
        if(response){
            setLoading(true)
            setPeople(response.data)
            setLoading(false)
        }else{
            setError(true)
        }
        setLoading(false)
   
        
        
        
    }
    React.useEffect(()=>{
        fetchPerson(1)
    },[])

    return(<AppContext.Provider
    value={{loading,people,error,fetchPerson}}
    >{children}</AppContext.Provider>)
}

export const useGlobalContext=()=>{
    return React.useContext(AppContext)
}