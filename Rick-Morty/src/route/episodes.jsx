import { getAllEpisodes } from "../api/getAllEpisode";
import getEpisodById from "../api/getEpisodeById";
import HeaderForList from "../components/HeaderForList";
import PageForEpisode from "../components/pageForEpisode";
import PageForAllEpisodes from "../components/PageForAllEpisodes"
import { useLoaderData } from "react-router";
import BackTo from "../components/BackToTop";
import { useCallback } from "react"
import FooterComp from "../components/Footer";


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
   
     const scrollToTop = useCallback(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, []);
    
    return(
        <>
            <HeaderForList/>
            <main className="bg-[#1e1e20]">
                <PageForEpisode eachEpisode={eachEpisode} />
                 <hr className="text-[#11B0C8]" />
                <PageForAllEpisodes allEpisode={allEpisode}/>
            </main>
              <BackTo scrollToTop={scrollToTop} />
              <footer className="bg-[#1e1e20] ">
                    <FooterComp/>
              </footer>
        </>
    )
}