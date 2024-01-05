import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AppIndex } from "./AppIndex"
import { AppAbout } from "./AppAbout"
import { AppOffer } from "./AppOffer"
import { AppPortfolio } from "./AppPortfolio"
import { AppContact } from "./AppContact"
import { AppError } from "./AppError"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppIndex/>}>
              <Route path="/" element={<AppAbout/>}/>
              <Route path="/oferta" element={<AppOffer/>}/>
              <Route path="/portfolio" element={<AppPortfolio/>}/>
              <Route path="/kontakt" element={<AppContact/>}/>
              <Route path="*" element={<AppError/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}