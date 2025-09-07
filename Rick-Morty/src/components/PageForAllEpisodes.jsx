import Episode from "./Episode"
import ReactPaginat from 'react-paginate'
import { useState } from "react";

export default function PageForAllEpisodes({allEpisode}){

    const[pageNumber,setPageNumber]=useState(0)
      const usersPErPage=15
        const pageVisited= pageNumber*usersPErPage
        const displayUseres= allEpisode.slice(pageVisited,pageVisited+usersPErPage).map((ep)=>{
            
                            return(
                                
                                <Episode key={ep.id} id={ep.id} name={ep.name} episode={ep.episode}  />
                            )
                       
                    
        })
        const pageCount=Math.ceil(allEpisode.length/usersPErPage)

        const changePage=({selected})=>{
            setPageNumber(selected)
        }
    return(
        <>
            <div className="pt-12 pb-12">
                <div className="flex items-center gap-4 pl-[130px] ">
                     <img src="/img/MonitorPlay.svg" alt="" />
                     <h1 className="text-white text-2xl ">More <br /> Episodes</h1>
                </div>

                <div className="flex justify-center items-center flex-wrap  m-auto py-[80px] px-[100px]   ">
                 {displayUseres}
                  
                </div>
                <div className=" text-[#ffff]   ">
                          <ReactPaginat 
                          previousLabel={'<'}
                          nextLabel={'>'}
                          pageCount={pageCount}
                          onPageChange={changePage}
                          containerClassName={'paginationContainer'}
                          previousClassName={'previousBtn'}
                          nextClassName={'nextBtn'}
                          disabledClassName={'paginationDisabled'}
                         activeClassName={"paginationActive"}
                        />
                </div>
            </div>
          
        </>
    )
} 