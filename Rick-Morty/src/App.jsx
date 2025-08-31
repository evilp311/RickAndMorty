import FooterComp from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router"

function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <div className="bg-[#1e1e20]  ">
        <FooterComp/>
      </div>
      
    </>
  )
}

export default App
