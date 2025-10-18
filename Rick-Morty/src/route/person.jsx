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
import { useContext } from "react"
import { Context } from "../App"
import BackToTopBlack from "../utils/blackArrowBlack"
import BackToTopRoute from "../components/BacktoTopRoute"
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
    const value=JSON.parse(localStorage.getItem('darkMode'));
    console.log(value)
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
                <PageForPerson eachPerson={eachPerson} value={value}/>
                <hr className="text-[#11B0C8]" />
                <PageForAllPersons allPerson={allPerson} value={value} />
            </main>
            <BackToTopRoute scrollToTop={scrollToTop} value={value}/>
            <footer className={value==false?"bg-[#1e1e20]":'bg-primary'}>
                <FooterComp/>
            </footer>
           
        </>
    )
}