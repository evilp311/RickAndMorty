import getAllLocations from "../api/getAllLocations"
import getLoactions from "../api/getLoacations"
import getLocationByID from "../api/getLocationById"
import BackTo from "../components/BackToTop"
import FooterComp from "../components/Footer"
import HeaderForList from "../components/HeaderForList"
import PageForAllLocations from "../components/PageForAllLocations"
import PageForLocation from "../components/PageForLocation"
import { useCallback } from "react"
import { useLoaderData } from "react-router"

export async function LoderLocation({params}) {
    const[eachLocation,allLocation]=await Promise.all(
    [
        getLocationByID(params.id),
        getAllLocations(),
    ])
    return{
        eachLocation:eachLocation,
        allLocation:allLocation
    }
}

export default function Location(){
    const {eachLocation,allLocation}=useLoaderData();

         const scrollToTop = useCallback(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, []);
    return(
        <>
            <HeaderForList/>
            <main className="bg-[#1e1e20] ">
                <PageForLocation eachLocation={eachLocation}/>
                 <hr className="text-[#11B0C8]" />
                <PageForAllLocations allLocation={allLocation}/>
            </main>
            <BackTo scrollToTop={scrollToTop}/>
            <footer className="bg-[#1e1e20] ">
                <FooterComp/>
            </footer>
            
        </>
    )
}