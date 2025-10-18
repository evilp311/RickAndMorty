import { Card } from "flowbite-react";
import { Link } from "react-router";
import Alive from "../utils/alive";
import Dead from "../utils/dead";
import Human from "../utils/human";
import Earth from "../utils/earth";
import View from "../utils/viewMore";
import { useCallback, useEffect } from "react";
import ViewBlack from "../utils/viewMoreBlack";
import BlackEarth from "../utils/blackEarth";
import HumanBlack from "../utils/humanBlack";
import { useContext } from "react";
import { Context } from "../App";
import { useState } from "react";
export default function PersonForRoute({pr }){
    const{id,name,img, status,org ,species}=pr
 
     const value=JSON.parse(localStorage.getItem('darkMode'));
    
        
     const scrollToTop = useCallback(() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }, []);
    return(
        
        <>
        <Link to={`/character/${id}`} className="flex justify-center items-center">
            <Card
                className={value==false?"min-w-[294px] h-[450px] rounded-[8px] bg-[#1a1a1a] hover:bg-[#313234]  mb-4 text-[16px] border-0 text-[#FFFFFF]" :'min-w-[294px] h-[450px] rounded-[8px] bg-[#F9F9F9] hover:bg-[#F1F1F1]  mb-4 text-[16px] border-0 text-[#313234]'} applyTheme={{root:{base:'replace'}}}
                onClick={()=>{
                    scrollToTop();
                }}
               
                renderImage={() => <img src={img} className="min-w-[262px] h-[200px] rounded-4xl px-3 pt-3"/>}
              >
                 <h5 className=" font-bold mb-3 " >
                    {name}
                 </h5>
                 <div className=" mb-1">
                       <h5 className="flex gap-2">
                        {status==`Alive`?<Alive/>:<Dead/>}
                          {status}
                      </h5>
                    <h5 className="flex gap-2 mt-1">
                         {value==false?<Human/>:<HumanBlack/>}
                        {species}
                    </h5>
                    <h5 className="flex gap-2 mt-1">
                        {value==false?<Earth/>:<BlackEarth/>}
                        {org}
                    </h5>
                 </div>
                 <div className=" relative">
                    <div className="absolute right-0 top-0">
                        <button className="flex items-center justify-center p-1 gap-2 hover:bg-[#11B0C8] rounded-4xl cursor-pointer" > {value==false?<View/>:<ViewBlack/>}  View More</button>
                    </div>
                 </div>

             </Card>
        </Link>
        </>
    )
}