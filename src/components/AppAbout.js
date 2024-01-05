import { useState } from "react"

import { Item } from "./Item"

export const AppAbout = () => {
    const [isHover, setIsHover] = useState(false)
    return ( 
        <>
            <Item render="textDeveloper"/>

            <div className={`flex justify-center items-center gap-[1rem] mobile:flex-wrap`}>
                <Item render="aboutLines"/>
                <Item render="aboutProjects"/>
                <Item render="aboutYears"/>
            </div>

            <Item render="textLibraries" isHover={isHover}/>

            <div className={`flex justify-center items-center gap-[1rem] mobile:flex-wrap`}>
                <Item render="aboutHtml" isHover={isHover} setIsHover={setIsHover}/>
                <Item render="aboutCss" isHover={isHover} setIsHover={setIsHover}/>
                <Item render="aboutJs" isHover={isHover} setIsHover={setIsHover}/>
                <Item render="aboutReact" isHover={isHover} setIsHover={setIsHover}/>
                <Item render="aboutTailwindcss" isHover={isHover} setIsHover={setIsHover}/>
                <Item render="aboutFirebase" isHover={isHover} setIsHover={setIsHover}/>
                <Item render="aboutRedux" isHover={isHover} setIsHover={setIsHover}/>
                <Item render="aboutGithub" isHover={isHover} setIsHover={setIsHover}/>
                <Item render="aboutPhotoshop" isHover={isHover} setIsHover={setIsHover}/>
            </div>
        </>
    )
}