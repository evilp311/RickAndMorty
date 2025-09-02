import { Card } from "flowbite-react";
import { Link } from "react-router";
import Alive from "../utils/alive";
import Dead from "../utils/dead";
import Human from "../utils/human";
import Earth from "../utils/earth";
import View from "../utils/viewMore";
export default function Person({pr}){
    const{id,name,img, status,org ,species}=pr
    return(
        
        <>
        <Link to={`/character/${id}`} className="flex justify-center items-center">
            <Card
                className="min-w-[294px] h-[400px] rounded-[8px] bg-[#313234] mb-4 text-[16px] text-[#FFFFFF]" applyTheme={{root:{base:'replace'}}}
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
                        <Human/>
                        {species}
                    </h5>
                    <h5 className="flex gap-2 mt-1">
                        {org.includes('Earth')?<Earth/>:''}
                        {org}
                    </h5>
                 </div>
                 <div className=" relative">
                    <div className="absolute right-0 top-0">
                        <button className="flex items-center justify-center p-1 gap-2 hover:bg-[#11B0C8] rounded-4xl cursor-pointer" > <View/>  View More</button>
                    </div>
                 </div>

             </Card>
        </Link>
        </>
    )
}