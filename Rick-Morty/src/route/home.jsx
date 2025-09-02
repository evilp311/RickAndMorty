import { useLoaderData } from "react-router"
import ListOfPersons from "../components/ListOfPesons"
import ListOfEpisodes from "../components/ListOfEpisodes"
import ListOfLoactions from "../components/ListOfLoactions"
import getPerson from "../api/getPersons"
import getEpisods from "../api/getEpisods"

export async function LoaderData(){
    const[person,episod]=await Promise.all([
        getPerson(),
        getEpisods(),
    ])
    return{
        person:person,
        episod:episod
    }
   // const person= await getPerson();
   // const episod=await getEpisods();
   // return{person,episod}
}
export default function Home(){
     const {episod,person}=useLoaderData()
     console.log(episod)
     console.log(person)
    return(
        <>
        <div className="bg-[#1e1e20]">
          <ListOfPersons person={person}/>
          <ListOfEpisodes episod={episod}/>
          <ListOfLoactions/>
        </div>
        
        </>
    )
}