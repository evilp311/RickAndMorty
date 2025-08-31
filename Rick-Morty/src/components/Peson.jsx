import { Card } from "flowbite-react";
import { Link } from "react-router";
import Alive from "../utils/alive";
import Dead from "../utils/dead";
export default function Person({pr}){
    const{id,name,img, status,org ,species}=pr
    return(
        
        <>
        <Link to={`/character/${id}`} className="flex justify-center items-center">
            <Card
                className="min-w-[294px] h-[400px] rounded-[8px] bg-[#313234] mb-4 text-[16px] text-[#FFFFFF]" applyTheme={{root:{base:'replace'}}}
                renderImage={() => <img src={img} className="min-w-[262px] h-[200px] rounded-4xl px-4 pt-3"/>}
              >
                 <h5 className=" font-bold mb-12   " >
                    {name}
                 </h5>
                 <div className=" ">
                       <h5 className="flex gap-2">
                        {status==`Alive`?<Alive/>:<Dead/>}
                          {status}
                      </h5>
                    <h5>
                        {species}
                    </h5>
                    <h5>
                        {org}
                    </h5>
                 </div>

             </Card>
        </Link>
        </>
    )
}