import FooterComp from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router"
import BackTo from "./components/BackToTop"
import { useCallback, useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
export const Context=createContext('');
function App() {
       const scrollToTop = useCallback(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, []);
const[isDark,setDark]=useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });

  useEffect(()=>{
       localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark])
  

const lightTheme=()=>{
  setDark(true);
}
const darkTheme=()=>{
  setDark(false)
}

  return (
    <>
    <Context.Provider value={isDark} >
      <Header lightTheme={lightTheme} darkTheme={darkTheme} isDark={isDark} />
      <Outlet  />
      <BackTo scrollToTop={scrollToTop} isDark={isDark}  />
      <div className={isDark==false?'bg-[#1e1e20]':'bg-primary'}>
        <FooterComp  isDark={isDark} />
      </div>
    </Context.Provider>
    </>
  )
}

export default App
