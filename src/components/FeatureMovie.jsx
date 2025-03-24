export default function FeatureMovie(){
    return (
        <div className="flex flex-col items-start lg:ml-20 gap-10 pt-44 pb-20 p-4">
            <h1 className="text-3xl lg:text-5xl text-white font-bold drop-shadow-md">Watch Joker Now</h1>
            <p className="text-xl lg:text-2xl text-white max-w-screen-sm drop-shadow-md">Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.</p>
            <button className="px-8 py-2 bg-white font-bold rounded-sm cursor-pointer hover:bg-red-600 hover:text-white">Play</button>
        </div>
    )
}