import CardItem from "./CardItem"
import { useState } from "react"
export default function Card({ ...props}){

    const [ open, setOpen] = useState(false)
    const [ movieFeature, setMovieFeature ] = useState(null)

    function selectMovie(id){
        if (id === movieFeature){
            setOpen(false)
            setMovieFeature(null)
        } else{
            setOpen(true)
            setMovieFeature(id)
        }
    }

    const movie = props.data.find(item => item.docId === movieFeature) || null
    return (
        <div className="max-w-screen-xl mx-auto">
            <h3 className="text-white text-3xl my-4">{props.title}</h3>
            <div className="flex gap-4">
                {props?.data?.map(item => <CardItem key={item.docId} selectMovie={selectMovie} category={props.category} {...item}/>)}
            </div>
            {open && movieFeature && movie && <div className="flex h-[20rem]">
                <div className="flex flex-col justify-between py-5 w-2/5">
                    <h2 className="text-white text-3xl font-bold">{movie?.title}</h2>
                    <p className="text-white text-xl">{movie?.description}</p>
                    <div className="flex items-center">
                        <span className="bg-red-600 text-white rounded-full  w-8 h-8 flex items-center justify-center font-bold">{movie?.maturity}</span>
                        <p className="text-white ml-2 uppercase font-bold">{movie?.genre}</p>
                    </div>
                </div>
                <div className="flex grow">
                    <img src={`/images/${props.category}/${movie.genre}/${movie?.slug}/large.jpg`} alt={`${movie?.title} movie`} 
                        className="h-full object-cover"
                    />
                </div>
                </div>}
        </div>
    )
}