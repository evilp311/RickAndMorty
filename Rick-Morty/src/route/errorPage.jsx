import FooterComp from "../components/Footer";
import HeaderForList from "../components/HeaderForList";
import { Link, useRouteError } from "react-router";
export default function ErrorPage(){
    const error=useRouteError();
    
    return(
        <>
            <HeaderForList/>
            <main className="bg-[#1e1e20]">
            <div className="bg-[url('/img/Background.svg')]  min-h-screen bg-cover bg-center bg-no-repeat" >
             <div className=" text-center "> 
                <div className="pt-10">
                    <img src="../img/error-img.jpg" className="inline-block rounded-3xl w-[600px] h-[420px]" alt="" />
                </div>
                <div className="mt-10 ">
                         <h5 className="text-5xl font-bold tracking-tight text-[#EBEEF5] ">
                           Lost your way?
                         </h5>
                         <p className="font-[Popins] text-[16px] text-[#8E95A9] mt-[18px] mb-6 ">
                            {error.message}                       
                         </p>
                         <Link to={'/'}>
                          <button className="w-[139px] h-[56px] text-[#FFFFFF] bg-[#11B0C8] cursor-pointer hover:bg-[#0f899c] rounded-xl border-2  py-4 px-8  ">
                            Go Home
                         </button>
                         </Link>
                </div>
             </div>
            </div>
            </main> 
            <footer className="bg-[#1e1e20]">
                <FooterComp/>
            </footer>
            
        </>
    )
}