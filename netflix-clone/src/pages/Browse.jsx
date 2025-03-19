import { useState } from "react"
import Profile from "./Profile"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function Browse(){
    const [profile, setProfile] = useState({})
    const [category, setCategory] = useState("series")
    const [loading, setLoading] = useState(true)

    const user = {
        displayName: "Karl",
        photoURL : "1"
    }

    function selectProfile(){
        setProfile(user)
    }
    return profile.displayName ? (
        <div className="bg-black flex flex-col h-dvh">
            <Navbar profile={true}/>
            <Footer/>
        </div>
    ) : (
        <div className="bg-black flex flex-col h-dvh">
            <Navbar/>
            <Profile selectProfile={selectProfile}/>
            <Footer/>
        </div>
    )
}