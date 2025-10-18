import Heart from "../utils/heart"
export default function HeaderForList({value}){
    return(
        <>
          <header className={value==false?"bg-[#1e1e20] ":'bg-primary'}>
                <div className="flex items-center justify-start pl-[300px]  pt-[64px]">
                    <img src="/img/Group.svg" alt="" />
                </div>
            </header>
        </>
    )
}