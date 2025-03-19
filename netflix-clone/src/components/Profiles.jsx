import { useState } from "react"
export default function Profiles({username, selectProfile}){
    const [hovered, setHovered] = useState(false)
    return (
        <div className="flex flex-col items-center mt-5 gap-7 grow">
           <p className="text-white text-3xl md:text-5xl">Who's watching?</p>
           <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="flex flex-col items-center" onClick={() => selectProfile()}>
            <img src="/images/users/1.png" alt="user" className={`cursor-pointer w-3/5 md:w-56 border-4 ${hovered ? "border-white" : "border-transparent"}`}/>
            <p className={`text-white text-xl md:text-3xl text-center mt-6 ${hovered && "font-bold"}`}>{username}</p>
           </div>
        </div>
    )
}