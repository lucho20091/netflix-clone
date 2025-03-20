import { useState, useContext, useEffect } from "react"
import Profile from "./Profile"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loading from "../components/Loading"
import Card from "../components/Card"
import { FirebaseContext } from "../context/firebase"
import useContent from "../hooks/use-content"
import selectionMap from "../utils/selectionMap"
import Fuse from "fuse.js"
export default function Browse(){
    const { firebase } = useContext(FirebaseContext)
    const [profile, setProfile] = useState({})
    const [category, setCategory] = useState("series")
    const [loading, setLoading] = useState(false)
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ slideRows, setSlideRows ] = useState([])
    const { series } =  useContent('series')
    const { films }=  useContent('films')
    const slides = selectionMap({series, films})

    useEffect(()=>{
        setSlideRows(slides[category])
    }, [series, films, category])
    
    useEffect(() => {
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre']})
        const results = fuse.search(searchTerm).map(({ item}) => item) 
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0){
            setSlideRows(results)
        } else {
            setSlideRows(slides[category])
        }
    },[searchTerm])

    function changeCategory(category){
        setCategory(category)
    }

    async function signOut(){
        try{
            const auth = firebase.auth()
            await auth.signOut()
        } catch (err){
            console.log(err)
        }
    }

    const user = {
        displayName: "Karl",
        photoURL : "1"
    }

    function selectProfile(){
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
            setProfile(user)
        }, 1000)
    }

    
    return profile.displayName ? (
        <div className="bg-black flex flex-col">
            <Navbar profile={true} user={user} changeCategory={changeCategory} signOut={signOut} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
            {slideRows.map(item => <Card key={item.data.id} category={category} { ...item}/>)}
            <Footer/>
        </div>
    ) : (
        <div className="bg-black flex flex-col h-dvh">
            <Navbar/>
            {!loading && <Profile selectProfile={selectProfile}/>}
            {loading && <Loading/>}
            <Footer/>
        </div>
    )
}