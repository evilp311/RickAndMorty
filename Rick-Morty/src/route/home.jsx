import { useLoaderData } from "react-router"
import ListOfPersons from "../components/ListOfPesons"
import ListOfEpisodes from "../components/ListOfEpisodes"
import ListOfLoactions from "../components/ListOfLoactions"
import getPerson from "../api/getPersons"

export async function LoaderData(){
    const person= await getPerson();
    return{person}
}
export default function Home(){
    const {person}=useLoaderData()
    return(
        <>
        <div className="bg-[#1e1e20]">
          <ListOfPersons person={person}/>
          <ListOfEpisodes/>
          <ListOfLoactions/>
        </div>
        
        </>
    )
}