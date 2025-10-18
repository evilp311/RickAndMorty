import BlackEarth from "../utils/blackEarth"
import DimensionBlack from "../utils/deminisionBlack"
import Dimension from "../utils/deminison"
import Earth from "../utils/earth"
import SmilyBlack from "../utils/smile"
import Smily from "../utils/smily"
export default function PageForLocation ({eachLocation,value}){
    const lengthOfResident=eachLocation.residents.length
    return(
        <>
            <div className={value==false?"text-[#FFFFFF] pt-[32px] pl-[310px] pb-[150px] flex flex-col gap-6 ":"text-[#313234] pt-[32px] pl-[310px] pb-[150px] flex flex-col gap-6 "}>
                {value==false?  <img src="/img/earth.svg" className="w-[72px] h-[72px]" alt="" />:  <img src="/img/earthBlack.svg" className="w-[72px] h-[72px]" alt="" />}
                <h1 className="text-5xl font-bold">{eachLocation.name}</h1>
                <div className="flex gap-4 text-2xl">
                    <h2 className="flex items-center gap-1.5">{value==false?<Earth/>:<BlackEarth/>}{eachLocation.type}</h2>
                    <h2 className="flex items-center gap-1.5">{value==false?<Dimension/>:<DimensionBlack/>} {eachLocation.dimension}</h2>
                </div>
                <h2 className="flex gap-1.5 items-center mt-2 text-2xl">{value==false?<Smily/>:<SmilyBlack/>}{lengthOfResident} Characters located here</h2>
            </div>
        </>
    )
}