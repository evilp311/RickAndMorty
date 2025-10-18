import ReactPaginat from 'react-paginate'
import { useState } from "react";
import Person from "./Peson"
import Smily from '../utils/smily';
import SmilyBlack from '../utils/smile';
import PersonForRoute from './PersonForRoute';
export default function PageForAllPersons({allPerson,value}){
    const valueDark=JSON.parse(localStorage.getItem('darkMode'));
    const[pageNumber,setPageNumber]=useState(0)
          const usersPErPage=12
            const pageVisited= pageNumber*usersPErPage
            const displayUseres= allPerson.slice(pageVisited,pageVisited+usersPErPage).map((pe)=>{
                
                                return(
                                    
                                    <PersonForRoute key={pe.id} pr={pe}  />
                                )
                           
                        
            })
            const pageCount=Math.ceil(allPerson.length/usersPErPage)
    
            const changePage=({selected})=>{
                setPageNumber(selected)
            }
    return(
        <>
               <div className="pt-12 pb-12">
                <div className="flex items-center gap-4 pl-[200px]  ">
                     {value==false?<Smily/>:<SmilyBlack/>}
                     <h1 className={value==false?"text-white text-2xl ":"text-[#313234] text-2xl "}>More <br /> Persons</h1>
                </div>

                <div className="flex flex-wrap gap-x-20 justify-center  m-auto py-[80px] px-[100px]   ">
                 {displayUseres}
                  
                </div>
                <div className=" text-[#ffff]   ">
                          <ReactPaginat 
                          previousLabel={'<'}
                          nextLabel={'>'}
                          pageCount={pageCount}
                          onPageChange={changePage}
                          containerClassName={valueDark==false?'paginationContainer':'paginationContainerBlack'}
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