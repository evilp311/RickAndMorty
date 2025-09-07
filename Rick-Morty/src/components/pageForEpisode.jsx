import Episodeicon from "../utils/episodeicon"
import DateIcon from "../utils/dateIcon"
export default function PageForEpisode({eachEpisode}){
    
    return(
        <>
            <div className=" pt-[32px] pl-[310px] pb-[150px] ">
                <div className=" text-[#FFFFFF]">
                    <img src="/img/MonitorPlay.svg" alt="" />
                      <h1 className=" font-bold text-5xl mt-6">{eachEpisode.name}</h1>
                      <div className="text-2xl flex gap-6 mt-6">
                            <p className="flex items-center gap-2"><DateIcon/> {eachEpisode.air_date}</p>
                            <p className="flex items-center  gap-2"> <Episodeicon/> {eachEpisode.episode}</p>
                      </div>
                </div>
              
            </div>
        </>
    )
}