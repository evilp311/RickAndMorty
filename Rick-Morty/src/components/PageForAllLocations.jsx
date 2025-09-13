import { useState } from "react"
import Location from "./Loacation"
import ReactPaginat from 'react-paginate'
export default function PageForAllLocations({allLocation}){
    
        const[pageNumber,setPageNumber]=useState(0)
              const usersPErPage=14
                const pageVisited= pageNumber*usersPErPage
                const displayUseres= allLocation.slice(pageVisited,pageVisited+usersPErPage).map((lo)=>{
                    
                                    return(
                                        
                                        <Location key={lo.id} id={lo.id} name={lo.name} type={lo.type}/>
                                    )
                               
                            
                })
                const pageCount=Math.ceil(allLocation.length/usersPErPage)
        
                const changePage=({selected})=>{
                    setPageNumber(selected)
                }
    return(
        <>
                <div className="pt-12 pb-12">
                <div className="flex items-center gap-4 pl-[200px] ">
                     <img src="/img/location.svg" alt="" />
                     <h1 className="text-white text-2xl ">More <br /> Locations</h1>
                </div>

                <div className="grid grid-cols-7 m-auto py-[80px] px-[100px]   ">
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