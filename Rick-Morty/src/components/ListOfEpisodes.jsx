import Episode from "./Episode"

export default function ListOfEpisodes({episod}){
    return(
        <>
        <div className="relative">
            <h1 className="text-[#FFFFFF] text-4xl font-bold absolute top-8 left-55  ">Episodes</h1>
            <div className="grid grid-cols-4  w-[1500px] m-auto pt-[100px] pb-[70px] ">
                {episod &&(
                    episod.map((episod)=>{
                        return(
                            <Episode key={episod.id} id={episod.id} name={episod.name} episode={episod.episode} />
                        )
                    })
                )}
            </div>
        </div>
        </>
    )
}