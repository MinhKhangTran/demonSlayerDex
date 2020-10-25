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
        if(text==="Beast"){
        return(<div className="bg-teal-500 text-teal-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Flower"){
        return(<div className="bg-pink-500 text-pink-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Insect"){
        return(<div className="bg-indigo-500 text-indigo-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Love"){
        return(<div className="bg-red-400 text-red-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Mist"){
        return(<div className="bg-blue-400 text-blue-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Snake"){
        return(<div className="bg-purple-400 text-purple-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Sound"){
        return(<div className="bg-orange-500 text-orange-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Stone"){
        return(<div className="bg-gray-600 text-gray-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Wind"){
        return(<div className="bg-green-500 text-green-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Demonic Transformation"){
        return(<div className="bg-purple-700 text-red-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Blood"){
        return(<div className="bg-red-700 text-red-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    if(text==="Medical"){
        return(<div className="bg-green-400 text-green-100 inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>)
    }
    return(
        <div className="bg-white text-black inline-block px-2 rounded-full capitalize mr-2 mt-2">
            {text}
        </div>
    )
    
}
