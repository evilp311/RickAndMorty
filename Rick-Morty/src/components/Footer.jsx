import Arrow from "../utils/arrowUP";

export default function FooterComp(){
    return(
        <>
            <footer className="pt-10">
                <hr  className="text-[#D9D9D9] h-0.5"/>
                <div className="flex justify-around text-[14px] pb-[64px] mt-[24px] ">
                     <h2 className="text-[#FFFFFF]">©2023</h2>
                    <h2 className="text-[#FFFFFF]">Desenvolvido por <span className="text-[#11B0C8]">Henrique Sousa</span> </h2>
                </div>
            </footer>
        </>
    )
}