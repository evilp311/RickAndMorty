
import View from "../utils/viewMore"
import Location from "../utils/location"
export default function CardForLocationPerson({location}){
    return(
        <>
      <div  className="w-[147px] h-[180px] bg-[#313234]   rounded-2xl  ">
                <div className="relative ">
                     <div className="absolute left-[34%] top-[-20px]"><Location className="w-[46px] h-[36px]"/></div>
                </div>
                <div className="flex flex-col items-center text-[16px] mt-10   "> 
                     <h5 className="  text-[#11B0C8]  ">
                         {location}
                      </h5>
                </div>
                <div className="relative">
                    <div className="absolute left-[10%] top-[45px] ">
                        <button className="flex items-center justify-center p-1 gap-2 hover:bg-[#11B0C8] rounded-4xl cursor-pointer" > <View/>  View More</button>
                    </div>
                </div>
                 
        </div>
        </>
    )
}