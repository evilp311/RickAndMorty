import { Link } from "react-router";
import Earth from "../utils/earth";
import View from "../utils/viewMore";
export default function Location({id,name,type}){
    return(
        <>
        <Link to={`/locations/${id}`} className="relative mt-6 ">
            <Earth className="w-12 h-12 absolute bottom-57 left-18 "/>
            <div  className="w-[200px] h-[252px] bg-[#1a1a1a] hover:bg-[#313234]   rounded-2xl   ">
                <div className=" flex flex-col items-center text-[16px] text-center  p-2  pt-15 "> 
                     <p className="  text-[#11B0C8] ">
                         {name}
                      </p>
                     <p className=" text-white mt-2  ">
                        {type?type:'Uknown' }
                     </p>
                </div>
                <div className="">
                    <div className=" absolute bottom-9 left-10 ">
                        <button className="flex items-center justify-center p-1 gap-2 hover:bg-[#11B0C8] rounded-4xl cursor-pointer" > <View/>  View More</button>
                    </div>
                </div>
             </div>
        </Link>
        </>
    )
}