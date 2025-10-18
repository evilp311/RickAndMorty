import { getAllEpisodes } from "../api/getAllEpisode";
import getEpisodById from "../api/getEpisodeById";
import HeaderForList from "../components/HeaderForList";
import PageForEpisode from "../components/pageForEpisode";
import PageForAllEpisodes from "../components/PageForAllEpisodes"
import { useLoaderData } from "react-router";
import BackTo from "../components/BackToTop";
import { useCallback } from "react"
import FooterComp from "../components/Footer";
import { useEffect } from "react";
import BackToTopBlack from "../utils/blackArrowBlack";
import BackToTopRoute from "../components/BacktoTopRoute";

export async function LoderEpisodePage({params}){
    const[eachEpisode,allEpisode]=await Promise.all([
        getEpisodById(params.id),
        getAllEpisodes(),
    ])

    return{
        eachEpisode:eachEpisode,
        allEpisode:allEpisode,
    }
}


export default function Episodes(){
    const{eachEpisode,allEpisode}=useLoaderData()
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
                <PageForEpisode eachEpisode={eachEpisode} value={value} />
                 <hr className="text-[#11B0C8]" />
                <PageForAllEpisodes allEpisode={allEpisode} value={value}/>
            </main>
              <BackToTopRoute scrollToTop={scrollToTop} value={value} />
              <footer className={value==false?"bg-[#1e1e20]":'bg-primary'}>
                    <FooterComp/>
              </footer>
        </>
    )
}