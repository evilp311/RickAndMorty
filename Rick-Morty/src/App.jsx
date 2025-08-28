import FooterComp from "./components/Footer"
import Header from "./components/Header"


function App() {
  

  return (
    <>
      <Header/>
      
      <div className="bg-[#1e1e20] absolute right-0 left-0 bottom-0 ">
        <FooterComp/>
      </div>
      
    </>
  )
}

export default App
