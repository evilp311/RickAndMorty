import { useLoaderData } from "react-router"
import ListOfPersons from "../components/ListOfPesons"
import ListOfEpisodes from "../components/ListOfEpisodes"
import ListOfLoactions from "../components/ListOfLoactions"
import getPerson from "../api/getPersons"
import getEpisods from "../api/getEpisods"
import getLoactions from "../api/getLoacations"
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
     const {episod,person,loacat}=useLoaderData()
    return(
        <>
        <div className="bg-[#1e1e20]">
          <ListOfPersons person={person}/>
          <ListOfEpisodes episod={episod}/>
          <ListOfLoactions loacat={loacat}/>
        </div>
        
        </>
    )
}