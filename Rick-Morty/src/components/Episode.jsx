import View from "../utils/viewMore";
import { Link } from "react-router";
import TvShow from "../utils/tvShow";
export default function Episode({id,name,episod}){
    return(
        <>
        <Link to={`/episodes/${id}`} className="flex justify-center items-center">
            <div  className="min-w-[300px] min-h-[96px] bg-[#313234]  rounded-2xl  ">
                <div className="flex items-center justify-start flex-wrap text-[16px] gap-1 pt-4 pl-2  pb-3 pr-2  "> 
                    <TvShow/>
                     <h5 className="  text-white border-r-2 pr-2   ">
                         {name}
                      </h5>
                     <p className=" text-white ">
                        {episod}
                     </p>
                </div>
               
                 <div className=" relative ">
                    <div className="absolute left-2  ">
                        <button className="flex items-center justify-center p-1 gap-2 hover:bg-[#11B0C8] rounded-4xl cursor-pointer" > <View/>  View More</button>
                    </div>
                 </div>
             </div>
        </Link>
        </>
    )
}