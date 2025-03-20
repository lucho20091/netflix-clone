import { useState } from "react"
export default function CardItem({...props}){
    return (
        <div className="cursor-pointer" onClick={() => props.selectMovie(props.docId)}>
            <img src={`/images/${props.category}/${props.genre}/${props.slug}/small.jpg`}/>
            <div>
                {/* <h4 className="text-white">{props.title}</h4> */}
                {/* <p className="text-white">{props.description}</p> */}
            </div>
        </div>
    )
}