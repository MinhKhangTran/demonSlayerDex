import React from 'react'
import Tag from "./Tag"
import pic from "../images/Giyuu_anime_design.png"
import Loading from "./Loading"
import {useGlobalContext} from "../context"

export default function Info() {
    const [toggle,setToggle]=React.useState(false)
    const {loading,people,error} = useGlobalContext()
    const {id,name,desc,age,race,gender,status,style}=people
    const {name:img}= people.image[0]
    if(loading){
        return(<Loading></Loading>)
    }
    if(error){
        return(<div className="grid place-items-center h-screen">
        <h1 className="text-blue-700 text-2xl font-mono font-bold mt-4 mb-6">
        No Character founded! Please try other Characters
        </h1>
            
        </div>)
    }
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto my-8 gap-x-4 gap-y-4">
<div className="left bg-blue-300 rounded-md p-4" style={{height:"600px",width:"400px"}}>
    <img src={img} alt={name} className="w-full h-full object-cover"/>
</div>
<div className="right">
<h1 className="text-blue-700 text-xl font-semibold">Name: <span className="text-xl font-normal text-blue-600">{name}</span></h1>
<h1 className="text-blue-700 text-xl font-semibold">Age: <span className="text-xl font-normal text-blue-600">{age}</span></h1>
<h1 className="text-blue-700 text-xl font-semibold">Gender: <span className="text-xl font-normal text-blue-600">{gender}</span></h1>
<h1 className="text-blue-700 text-xl font-semibold">Status: <span className="text-xl font-normal text-blue-600">{status}</span></h1>
<h1 className="text-blue-700 text-xl font-semibold border-b-2 border-blue-700 inline-block">Info:</h1>
<p className="text-lg font-normal text-blue-600">{toggle ? desc : `${desc.substring(0,500)}...`}<button className="ml-3 italic" onClick={()=>setToggle(!toggle)}>{toggle ? "show less":"show more"}</button></p>
<Tag text={race}></Tag>
<Tag text={style}></Tag>

</div>
        </section>
    )
}
