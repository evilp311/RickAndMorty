import Heart from "../utils/heart"
export default function HeaderForList(){
    return(
        <>
          <header className="bg-[#1e1e20] ">
                <div className="flex items-center justify-center gap-x-[862px] pt-[64px]">
                    <img src="/img/Group.svg" alt="" />
                    <button className="text-[#FFFFFF] bg-[#11B0C8] min-w-[157px] h-8 rounded-4xl  flex gap-x-1 items-center justify-center cursor-pointer"> <Heart/> Favorites list</button>
                </div>
            </header>
        </>
    )
}