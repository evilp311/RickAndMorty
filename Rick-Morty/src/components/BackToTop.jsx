import BackToTop from "../utils/backtoArrow"
export default function BackTo(){
    return(
        <>
            <div className="bg-[#1e1e20]  ">
                    <div className="flex  w-[1500px] m-auto  items-center justify-between">
                        <img src="./img/LogoA.svg" alt="" />
                        <div className="flex items-center gap-1">
                          <p>Back To Top</p>
                          <button><BackToTop className="text-[#1e1e20] w-12 cursor-pointer"/></button>
                        </div>
                    </div>
            </div>
        </>
    )
}