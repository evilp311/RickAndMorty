import Heart from "../utils/heart"
import Moon from "../utils/moon"
import Sun from "../utils/sun"
export default function Header(){
    return(
        <>
            <header className="bg-[#000000] ">
                <div className="flex items-center justify-center gap-x-[862px] pt-[64px]">
                    <img src="/img/Group.svg" alt="" />
                    <button className="text-[#FFFFFF] bg-[#11B0C8] min-w-[157px] h-8 rounded-4xl  flex gap-x-1 items-center justify-center cursor-pointer"> <Heart/> Favorites list</button>
                </div>
                <div className="flex items-center justify-center">
                    <div className=" pr-23">
                        <h1 className="text-[#FFFFFF] text-5xl font-bold">Find out everything <br /> in one <span className="text-[#11B0C8]"> place.</span>  </h1>
                        <p className="text-[#FFFFFF] mt-7 mb-16">Characters. locations, episodes and more.</p>
                        <div className="text-[#FFFFFF] flex gap-4 cursor-pointer mb-6 ">
                            <button className="bg-[#11B0C8] p-1.5 flex gap-x-1 items-center justify-center rounded-4xl cursor-pointer"> <Moon/> Dark</button>
                            <button className="flex gap-x-1 items-center justify-center p-1.5 bg-[#313234]  rounded-4xl cursor-pointer "> <Sun/> Light</button>
                        </div>
                        <h6 className="text-[#11B0C8]">Ai sim, Porr#@%&*</h6>
                    </div>
                    <div>
                        <img src="/img/evilRick.svg" alt="" className="min-w-[774px]" />
                    </div>
                </div>
            </header>
        </>
        
    )
} 