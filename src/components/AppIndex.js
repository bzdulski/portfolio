import { useState, useEffect } from "react"
import { useNavigate, useLocation, Outlet } from "react-router-dom"
import { HashLoader } from "react-spinners"

import { useStore } from "../zustand.config"
import { Item } from "./Item"

export const AppIndex = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    const store = useStore()

    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if(store.error !== "") { store.clean() }
        if(store.isSend === true) { store.cleanIsSend() }

        function wheelEvent(evt) {
          let delta = evt.deltaY

          if (delta < 0) {
            if(pathname === "/oferta") { navigate("/") }
            else if(pathname === "/portfolio") { navigate("/oferta") }
            else if(pathname === "/kontakt") { navigate("/portfolio") }
            // scroll up
          } else if (delta > 0) {
            if (pathname === "/") { navigate("/oferta") } 
            else if (pathname === "/oferta") { navigate("/portfolio") }
            else if (pathname === "/portfolio") { navigate("/kontakt") }
            // scroll down
          }
        }
    
        window.addEventListener("wheel", wheelEvent, false);
        return () => { window.removeEventListener("wheel", wheelEvent, false) }
        
      }, [navigate, pathname])

      useEffect(() => {
        let timer = null

        function resizeEvent() {
          setIsMobile(window.innerWidth <= 1680)
          if(window.innerWidth > 1680) setIsOpen(false)
          if(timer) { clearInterval(timer)}

          let canvas = document.getElementById("matrix")
          let context = canvas.getContext("2d")
      
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
      
          let marks = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
          let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          let numbers = "0123456789"
      
          let alphabet = marks + letters + numbers
          let size = 16
          let columns = canvas.width / size
          let rains = []
      
          for(let x=0; x<columns; x++) {
            rains[x] = 1
          }
      
          function matrixEvent() {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)'
            context.fillRect(0, 0, canvas.width, canvas.height)
            
            context.fillStyle = "#6366f199"
            // context.fillStyle = "#ed143d99"
            context.fontSize = size + 'px monospace'
            context.position = "fixed"
          
            for(let i = 0; i < rains.length; i++)
            {
              const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
              context.fillText(text, i*size, rains[i]*size)
              
              if(rains[i]*size > canvas.height && Math.random() > 0.975) {
                rains[i] = 0
              }
              rains[i]++
            }
          }
          
          timer = setInterval(matrixEvent, 60)
        }
    
        window.addEventListener("resize", resizeEvent, false);
        resizeEvent()
        return () => { window.removeEventListener("resize", resizeEvent, false) }
      }, [])
  
    return (
        <>
            <Item render="matrix"/>
            <Item render="logo" isOpen={isOpen} isMobile={isMobile}/>
            <Item render="logoBeamOne"/>
            <Item render="logoBeamTwo"/>

            {isMobile ? 
              <>
                <Item render="menu" isOpen={isOpen} setIsOpen={setIsOpen}/>
                
                <header className={isMobile ? `animate-[appear_1s_linear] ${isOpen ? `min-h-[100vh] flex flex-col justify-center items-center p-[2rem] gap-[1rem]` : `hidden`}` : `fixed top-0 right-0 bottom-0 animate-[appear_1s_linear]`}>
                  <nav className={isMobile ? `flex flex-col gap-[1rem]` : `flex flex-col justify-center h-full p-[5rem] gap-[1rem]`}>
                    <Item render="linkAbout" isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <Item render="linkOffer" isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <Item render="linkPortfolio" isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <Item render="linkContact" isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <footer className={`flex justify-center items-center h-[48px] gap-[1rem]`}>
                      <Item render="textCopyright"/>
                    </footer>
                  </nav>
                </header>
              </>
            :
              <header className={isMobile ? `animate-[appear_1s_linear] ${isOpen ? `min-h-[100vh] flex flex-col justify-center items-center p-[2rem] gap-[1rem]` : `hidden`}` : `fixed top-0 right-0 bottom-0 animate-[appear_1s_linear]`}>
                  <nav className={isMobile ? `flex flex-col gap-[1rem]` : `flex flex-col justify-center h-full p-[5rem] gap-[1rem]`}>
                    <Item render="linkAbout"/>
                    <Item render="linkOffer"/>
                    <Item render="linkPortfolio"/>
                    <Item render="linkContact"/>
                    <footer className={`flex justify-center items-center h-[48px] gap-[1rem]`}>
                      <Item render="textCopyright"/>
                    </footer>
                  </nav>
              </header>
            }

            {store.loading ?
              <main className={isOpen ? `hidden` : `min-h-[100vh] max-w-[30rem] flex flex-col items-center justify-center text-center p-[2rem] m-auto gap-[3rem] animate-[appear_1s_linear]`}>
                <HashLoader color={"#ffffff"} size={163.3} speedMultiplier={1.0}/>
              </main>
            :
              <>
                {(pathname === `/` || pathname === `/kontakt` || (pathname !== `/` && pathname !== `/kontakt` && pathname !== `/oferta` && pathname !== `/portfolio`)) && <main className={isOpen ? `hidden` : `min-h-[100vh] max-w-[30rem] flex flex-col items-center justify-center text-center p-[2rem] m-auto gap-[3rem] animate-[appear_1s_linear]`}>
                  <Outlet/>
                </main>}
                {pathname === `/oferta` && <main className={isOpen ? `hidden` : `min-h-[100vh] max-w-[70em] flex items-center justify-center text-center p-[2rem] m-auto gap-[3rem] animate-[appear_1s_linear]`}>
                  <Outlet/>
                </main>}
                {pathname === `/portfolio` && <main className={isOpen ? `hidden` : `min-h-[100vh] max-w-[60rem] flex flex-wrap items-center justify-center text-center p-[2rem] m-auto gap-[3rem] animate-[appear_1s_linear]`}>
                  <Outlet/>
                </main>}
              </>
            }
        </>
    )
}