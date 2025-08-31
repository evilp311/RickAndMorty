import Person from "./Peson"
export default function ListOfPersons({person}){
    return(
        
        <>
        <div className="grid grid-cols-4  w-[1500px] m-auto pt-[100px] pb-[70px]">
            {person&& (
                person.map((pr,prindex)=>{
                    return(
                        <Person key={prindex} pr={pr} />
                    )
                })
            )}
        </div>

        </>
    )
}