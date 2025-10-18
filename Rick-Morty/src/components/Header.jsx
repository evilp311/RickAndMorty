import Heart from "../utils/heart"
import Moon from "../utils/moon"
import Sun from "../utils/sun"
export default function Header(props){
    const{lightTheme,darkTheme,isDark}=props
    return(
        <>
            <header className={isDark==false?'bg-primary-dark':'bg-primary'}>
                <div className="flex items-center ml-65 gap-x-[862px] pt-[64px]">
                    <img src="/img/Group.svg" alt="" />
                </div>
                <div className={ isDark==false?"text-[#FFFFFF] flex items-center justify-center":'text-[#313234] flex items-center justify-center'}>
                    <div className=" pr-23">
                        <h1 className=" text-5xl font-bold">Find out everything <br /> in one <span className="text-[#11B0C8]"> place.</span>  </h1>
                        <p className="] mt-7 mb-16">Characters. locations, episodes and more.</p>
                        <div className=" flex gap-4 cursor-pointer mb-6 " >
                            <button className={isDark==false?"bg-[#11B0C8] p-1.5 flex gap-x-1 items-center justify-center rounded-4xl cursor-pointer":"bg-gray-400 text-[] p-1.5 flex gap-x-1 items-center justify-center rounded-4xl cursor-pointer"} onClick={darkTheme}> <Moon/> Dark</button>
                            <button className={isDark==false?"flex gap-x-1 items-center justify-center p-1.5 bg-[#313234]  rounded-4xl cursor-pointer ":"bg-[#11B0C8] text-[] p-1.5 flex gap-x-1 items-center justify-center rounded-4xl cursor-pointer"} onClick={lightTheme}> <Sun/> Light</button>
                        </div>
                        <h6 className="text-[#11B0C8]">Ai sim, Porr#@%&*</h6>
                    </div>
                    <div>
                        {
                        isDark==false?
                             <img src="/img/evilRick.svg" alt="" className="min-w-[774px]" />
                             :
                             <img src="/img/HighLightImage.svg" alt="" className="w-[774px] h-[435px]" />
                        
                        }
                       
                    </div>
                   
                </div>
                 <div className={isDark==false?'hidden':''}>
                        <hr className="text-[#11B0C8] w-[100%] h-0.5 " />
                    </div>
            </header>
        </>
        
    )
} 