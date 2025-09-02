import FooterComp from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router"
import BackTo from "./components/BackToTop"
import { useCallback } from "react"
function App() {
       const scrollToTop = useCallback(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, []);

  return (
    <>
      <Header/>
      <Outlet/>
      <BackTo scrollToTop={scrollToTop}/>
      <div className="bg-[#1e1e20]  ">
        <FooterComp/>
      </div>
      
    </>
  )
}

export default App
