import BlackEarth from "../utils/blackEarth"
import Earth from "../utils/earth"
import TvShow from "../utils/tvShow"
import View from "../utils/viewMore"
import ViewBlack from "../utils/viewMoreBlack"
export default function CardForOriginPerson({orgigin,value}){
    return(
        <>
        <div  className={value==false?"w-[147px] h-[180px]  bg-[#313234] rounded-2xl":"w-[147px] h-[180px] bg-[#F9F9F9]  rounded-2xl"}>
                <div className="relative ">
                     <div className="absolute left-[34%] top-[-20px]">{value==false?<Earth className="w-[46px] h-[36px]"/>:<BlackEarth className="w-[46px] h-[36px]"/>}</div>
                </div>
                <div className="flex flex-col items-center text-[16px] mt-10   "> 
                    <p className={value==false?"text-white":"text-[#313234]"}>Planet</p>
                     <h5 className="  text-[#11B0C8]  ">
                         {orgigin}
                      </h5>
                </div>
               <div className="relative">
                    <div className="absolute left-[10%] top-[20px] ">
                        <button className="flex items-center  justify-center p-1 gap-2 hover:bg-[#11B0C8] rounded-4xl cursor-pointer" > {value==false?<View/> :<ViewBlack/> }  View More</button>
                    </div>
                </div>
                 
        </div>
        </>
    )
}