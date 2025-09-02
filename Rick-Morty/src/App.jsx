import FooterComp from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router"
import BackTo from "./components/BackToTop"
function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <BackTo/>
      <div className="bg-[#1e1e20]  ">
        <FooterComp/>
      </div>
      
    </>
  )
}

export default App
