import PageForAllPersons from "../components/PageForAllPersons"
import PageForPerson from "../components/PageForPerson"
import HeaderForList from "../components/HeaderForList"
import FooterComp from "../components/Footer"
import { useLoaderData } from "react-router"
import BackTo from "../components/BackToTop"
import { useCallback } from "react"
import getPersonById from "../api/getPerosnByid"
import getAllPerson from "../api/getAllPerson"
import { useEffect } from "react"

export async function LoaderPeesons({params}) {
    const[eachPerson,allPerson]=await Promise.all(
        [
            getPersonById(params.id),
            getAllPerson(),
        ])

    return{
        eachPerson:eachPerson,
        allPerson:allPerson,
    }
}


export default function Person(){
    const {eachPerson,allPerson}=useLoaderData();

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
            <HeaderForList/>
            <main className="bg-[#1e1e20]">
                <PageForPerson eachPerson={eachPerson}/>
                <hr className="text-[#11B0C8]" />
                <PageForAllPersons allPerson={allPerson} />
            </main>
            <BackTo scrollToTop={scrollToTop}/>
            <footer className="bg-[#1e1e20]">
                <FooterComp/>
            </footer>
           
        </>
    )
}