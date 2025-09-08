import Earth from "../utils/earth"
import TvShow from "../utils/tvShow"
import View from "../utils/viewMore"
export default function CardForOriginPerson({orgigin}){
    return(
        <>
        <div  className="w-[147px] h-[180px] bg-[#313234]   rounded-2xl  ">
                <div className="relative ">
                     <div className="absolute left-[34%] top-[-20px]"><Earth className="w-[46px] h-[36px]"/></div>
                </div>
                <div className="flex flex-col items-center text-[16px] mt-10   "> 
                    <p className="text-white">Planet</p>
                     <h5 className="  text-[#11B0C8]  ">
                         {orgigin}
                      </h5>
                </div>
               <div className="relative">
                    <div className="absolute left-[10%] top-[20px] ">
                        <button className="flex items-center  justify-center p-1 gap-2 hover:bg-[#11B0C8] rounded-4xl cursor-pointer" > <View/>  View More</button>
                    </div>
                </div>
                 
        </div>
        </>
    )
}