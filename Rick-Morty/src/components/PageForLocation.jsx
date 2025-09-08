import Dimension from "../utils/deminison"
import Earth from "../utils/earth"
import Smily from "../utils/smily"
export default function PageForLocation ({eachLocation}){
    const lengthOfResident=eachLocation.residents.length
    return(
        <>
            <div className="text-white pt-[32px] pl-[310px] pb-[150px] flex flex-col gap-6 ">
                <img src="/img/earth.svg" className="w-[72px] h-[72px]" alt="" />
                <h1 className="text-5xl font-bold">{eachLocation.name}</h1>
                <div className="flex gap-4 text-2xl">
                    <h2 className="flex items-center gap-1.5"><Earth/>{eachLocation.type}</h2>
                    <h2 className="flex items-center gap-1.5"><Dimension/> {eachLocation.dimension}</h2>
                </div>
                <h2 className="flex gap-1.5 items-center mt-2 text-2xl"><Smily/>{lengthOfResident} Characters located here</h2>
            </div>
        </>
    )
}