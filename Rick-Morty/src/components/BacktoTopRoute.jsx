import BackToTop from "../utils/backtoArrow"
import BackToTopBlack from "../utils/blackArrowBlack";
export default function BackToTopRoute({scrollToTop,value}){
    return(
        <>
            <div className={value==false?'bg-[#1e1e20]':'bg-primary'}>
                    <div className="flex  w-[1500px] m-auto  items-center justify-between">
                        <img src="/img/LogoA.svg" alt="" />
                        <div className="flex items-center gap-1">
                          <p>Back To Top</p>
                          <button onClick={()=>{
                            scrollToTop();
                          }}>{value==false?<BackToTop />:<BackToTopBlack/>}</button>
                        </div>
                    </div>
            </div>
        </>
    )
}