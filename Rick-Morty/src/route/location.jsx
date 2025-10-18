import getAllLocations from "../api/getAllLocations"
import getLocationByID from "../api/getLocationById"
import BackTo from "../components/BackToTop"
import FooterComp from "../components/Footer"
import HeaderForList from "../components/HeaderForList"
import PageForAllLocations from "../components/PageForAllLocations"
import PageForLocation from "../components/PageForLocation"
import { useCallback } from "react"
import { useLoaderData } from "react-router"
import { useEffect } from "react"
import BackToTopRoute from "../components/BacktoTopRoute"
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
    const value=JSON.parse(localStorage.getItem('darkMode'));
         const scrollToTop = useCallback(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, []);
        useEffect(()=>{
            window.scrollTo(0,0);
        },[])
    return(
        <>
            <HeaderForList value={value}/>
            <main className={value==false?"bg-[#1e1e20]":'bg-primary'}>
                <PageForLocation eachLocation={eachLocation} value={value}/>
                 <hr className="text-[#11B0C8]" />
                <PageForAllLocations allLocation={allLocation} value={value}/>
            </main>
            <BackToTopRoute scrollToTop={scrollToTop} value={value}/>
            <footer className={value==false?"bg-[#1e1e20]":'bg-primary'}>
                <FooterComp/>
            </footer>
            
        </>
    )
}