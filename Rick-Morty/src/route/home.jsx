import { useLoaderData } from "react-router"
import ListOfPersons from "../components/ListOfPesons"
import ListOfEpisodes from "../components/ListOfEpisodes"
import ListOfLoactions from "../components/ListOfLoactions"
import getPerson from "../api/getPersons"
import getEpisods from "../api/getEpisods"
import getLoactions from "../api/getLoacations"
import { useEffect } from "react"
import { useContext } from "react"
import { Context } from "../App"
export async function LoaderData(){
    const[person,episod,loacat]=await Promise.all([
        getPerson(),
        getEpisods(),
        getLoactions(),
        
    ])
    return{
        person:person,
        episod:episod,
        loacat:loacat
    }
   // const person= await getPerson();
   // const episod=await getEpisods();
   // return{person,episod}
}
export default function Home(){
    const value=useContext(Context);
   
     const {episod,person,loacat}=useLoaderData()
      useEffect(()=>{
                 window.scrollTo(0,0);
             },[])
    return(
        <>
        <div className={value==false?'bg-[#1e1e20]':'bg-primary'}>
          <ListOfPersons person={person}/>
          <ListOfEpisodes episod={episod}/>
          <ListOfLoactions loacat={loacat}/>
        </div>
        
        </>
    )
}