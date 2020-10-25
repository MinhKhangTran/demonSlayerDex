import React from 'react'

export default function Tag({text}) {
    if(text==="Human"){
        return(<div className="bg-gray-500 text-gray-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Demon"){
        return(<div className="bg-purple-500 text-purple-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Water"){
        return(<div className="bg-blue-500 text-blue-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Flame"){
        return(<div className="bg-red-500 text-red-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Thunder"){
        return(<div className="bg-yellow-500 text-yellow-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    return(
        <div className="bg-white text-black inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>
    )
    
}
