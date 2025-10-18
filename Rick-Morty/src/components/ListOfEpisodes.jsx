import Episode from "./Episode"
import { useContext } from "react"
import { Context } from "../App"
export default function ListOfEpisodes({episod}){
    const value=useContext(Context)
    return(
        <>
        <div className="relative">
            <h1 className={value==false?"text-[#FFFFFF] text-4xl font-bold absolute top-8 left-55  ":'text-[#313234] text-4xl font-bold absolute top-8 left-55 '}>Episodes</h1>
            <div className="grid grid-cols-4  w-[1500px] m-auto pt-[100px] pb-[70px] ">
                {episod &&(
                    episod.map((episod)=>{
                        return(
                            <Episode key={episod.id} id={episod.id} name={episod.name} episode={episod.episode} />
                        )
                    })
                )}
            </div>
        </div>
        </>
    )
}