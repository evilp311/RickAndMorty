import Episodeicon from "../utils/episodeicon"
import DateIcon from "../utils/dateIcon"
import DateIconBlack from "../utils/dateIconBlack"
import EpisodeiconBlack from "../utils/episodeIconBlack"
export default function PageForEpisode({eachEpisode,value}){
    
    return(
        <>
            <div className=" pt-[32px] pl-[310px] pb-[150px] ">
                <div className={value==false?" text-[#FFFFFF] ":'text-[#313234]'}>
                      {value==false?<img src="/img/MonitorPlay.svg" alt="" />:<img src="/img/MonitorPlayBlack.svg" alt="" />}
                      <h1 className=" font-bold text-5xl mt-6">{eachEpisode.name}</h1>
                      <div className="text-2xl flex gap-6 mt-6">
                            <p className="flex items-center gap-2">{value==false?<DateIcon/> :<DateIconBlack/> }{eachEpisode.air_date}</p>
                            <p className="flex items-center  gap-2"> {value==false?<Episodeicon/>:<EpisodeiconBlack/>} {eachEpisode.episode}</p>
                      </div>
                </div>
              
            </div>
        </>
    )
}