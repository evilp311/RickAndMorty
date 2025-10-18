import Alive from "../utils/alive"
import Dead from "../utils/dead"
import Gender from "../utils/gender"
import Human from "../utils/human"
import TvShow from "../utils/tvShow"
import CardForOriginPerson from "./CardForOriginPerson"
import CardForLocationPerson from "./CardForLocationPerson"
import GenderBlack from "../utils/genderBlack"
import HumanBlack from "../utils/humanBlack"
import TvShowBlack from "../utils/tvShowBlack"
export default function PageForPerson({eachPerson,value}){
    const lengthOfEpisode=eachPerson.episode.length
   
    return(
        <>
            <div className="flex justify-center pt-8 pb-16 ">
                <div>
                    <img src={eachPerson.image} className="w-[369px] h-[461px] rounded-2xl" alt="" />
                </div>
                <div className={value==false?"text-primary mr-30 ml-16 flex flex-col gap-8 ":"text-[#313234] mr-30 ml-16 flex flex-col gap-8 "}>
                    <h1 className="font-bold text-5xl">{eachPerson.name}</h1>
                    <h1 className="flex items-center gap-2 text-2xl">{value==false?<TvShow/>:<TvShowBlack/>} Participated in {lengthOfEpisode} episodes</h1>
                    <div className="flex gap-6 ">
                        <h2 className="flex items-center gap-2 text-2xl">{eachPerson.status=='Alive'? <Alive/>:<Dead/>}{eachPerson.status}</h2>
                        <h2 className="flex items-center gap-2 text-2xl">{value==false?<Human/>:<HumanBlack/>}{eachPerson.species}</h2>
                        <h2 className="flex items-center gap-2 text-2xl">{value==false?<Gender/>:<GenderBlack/>}{eachPerson.gender}</h2>
                    </div>
                </div>
                <div className="flex items-end gap-8">
                   <CardForOriginPerson orgigin={eachPerson.origin.name} value={value}/>
                   <CardForLocationPerson location={eachPerson.location.name} value={value}/>
                </div>
            </div>
        </>
    )
}