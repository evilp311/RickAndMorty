import View from "../utils/viewMore";
import { Link } from "react-router";
import TvShow from "../utils/tvShow";
import { useCallback } from "react";
export default function Episode({id,name,episode}){
     const scrollToTop = useCallback(() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }, []);
    return(
        <>
        <Link to={`/episodes/${id}`} className="flex  justify-center items-center m-2" onClick={()=>{
            scrollToTop();
        }}>
            <div  className="w-[300px] h-[165px] bg-[#1a1a1a] hover:bg-[#313234]   rounded-2xl  ">
                <div className="flex flex-wrap  items-center justify-start  text-[16px] gap-1 pt-4 pl-2  pb-3 pr-2  "> 
                    <TvShow/>
                     <h5 className="  text-white border-r-2 pr-2   ">
                         {name}
                      </h5>
                     <p className=" text-white ">
                        {episode}
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