import Profiles from "../components/Profiles"
export default function Profile({ selectProfile }){
    return (
        <div>
            <Profiles username={"karl"} selectProfile={selectProfile}/>
        </div>
    )
}