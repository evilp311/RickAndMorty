import Location from "./Loacation"
import { useContext } from "react"
import { Context } from "../App"
export default function ListOfLoactions({loacat}){
    const value=useContext(Context)

    return(
        <>
           <div className="relative">
                    <h1 className={value==false?"text-[#FFFFFF] text-4xl font-bold absolute top-8 left-55  ":'text-[#313234] text-4xl font-bold absolute top-8 left-55 '}>Locations</h1>
                    <div className="grid grid-cols-7  w-[1500px] m-auto pt-[100px] pb-[70px]  ">
                        {loacat&& (
                            loacat.map((loacat)=>{
                                return(
                                    <Location key={loacat.id} id={loacat.id} name={loacat.name} type={loacat.type}/>
                                )
                            })
                        )}
                    </div>  
                </div>
        </>
    )
}