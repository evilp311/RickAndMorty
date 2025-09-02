import Location from "./Loacation"
export default function ListOfLoactions({loacat}){
    return(
        <>
           <div className="relative">
                    <h1 className="text-[#FFFFFF] text-4xl font-bold absolute top-8 left-55  ">Locations</h1>
                    <div className="grid grid-cols-7  w-[1500px] m-auto pt-[100px] pb-[70px]  ">
                        {loacat&& (
                            loacat.map((loacat)=>{
                                return(
                                    <Location key={loacat.id} id={loacat.id} name={loacat.name} type={loacat.type}/>
                                )
                            })
                        )}
                    </div>  
                </div>
        </>
    )
}