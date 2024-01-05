import { useLocation, Link } from "react-router-dom"

import { useStore } from "../zustand.config"

export const Item = ({render, isOpen, setIsOpen, isMobile, isHover, setIsHover, handleSubmit, register, errors, children}) => {
    const location = useLocation()
    const pathname = location.pathname

    const store = useStore()
    const date = new Date()

    let color, shadow, shadowtext, icon, text, version, typeversion, info, button, to

    switch(render) {
        case "aboutLines": { 
            color = `text-[#808080] shadow-[inset_0_0_1rem_#808080]`,
            icon = `code`,
            text = `215K`;
        }; break
        case "aboutProjects": { 
            color = `text-[#6366f1] shadow-[inset_0_0_1rem_#6366f1]`,
            icon = `sports_esports`,
            text = `3`;
        }; break
        case "aboutYears": { 
            color = `text-[#ed143d] shadow-[inset_0_0_1rem_#ed143d]`,
            icon = `school`,
            text = `2Y`;
        }; break
        case "aboutHtml": { 
            icon = `devicon-html5-plain colored`;
        }; break
        case "aboutCss": { 
            icon = `devicon-css3-plain colored`;
        }; break
        case "aboutJs": { 
            icon = `devicon-javascript-plain colored`;
        }; break
        case "aboutReact": { 
            icon = `devicon-react-plain colored`;
        }; break
        case "aboutTailwindcss": { 
            icon = `devicon-tailwindcss-plain colored`;
        }; break
        case "aboutFirebase": { 
            icon = `devicon-firebase-plain colored`;
        }; break
        case "aboutRedux": { 
            icon = `devicon-redux-plain colored`;
        }; break
        case "aboutGithub": { 
            icon = `devicon-github-plain`;
        }; break
        case "aboutPhotoshop": { 
            icon = `devicon-photoshop-plain colored`;
        }; break
        case "offerHosting": { 
            color = `text-[#808080]`,
            shadow = `shadow-[inset_0_0_3rem_0_#808080]`,
            shadowtext = `drop-shadow-[0_0_.5rem_#808080]`
            icon = `star_border`,
            text = `Hosting`,
            info = `Cena utrzymania aplikacji internetowej jest całkowicie darmowa dopóki nie przekracza limitów serwera. Nie pobieram żadnych opłat ani prowizji cenowych za hosting.`,
            button = `WYMAGANE`
        }; break
        case "offerProject": { 
            color = `text-[#6366f1]`,
            shadow = `shadow-[inset_0_0_3rem_0_#6366f1]`,
            shadowtext = `drop-shadow-[0_0_.5rem_#6366f1]`
            icon = `star_half`,
            text = `Aplikacja`,
            info = `Cena wykonania aplikacji internetowej ustalana jest indywidualnie i szyta na miarę każdego projektu. W przypadku zmian podczas realizacji cena może ulec zmianie.`,
            button = `SPRAWDŹ`
        }; break
        case "offerSupport": { 
            color = `text-[#ed143d]`,
            shadow = `shadow-[inset_0_0_3rem_0_#ed143d]`,
            shadowtext = `drop-shadow-[0_0_.5rem_#ed143d]`
            icon = `star`,
            text = `Wsparcie`,
            info = `Cena prowadzenia aplikacji internetowej ustalana jest w zależności od ilości zadań i trudności wprowadzonych zmian oraz wymaganego czasu do ich zrealizowania.`,
            button = `NIEOBOWIĄZKOWE`
        }; break
        case "linkAbout": { 
            to = `/`,
            text = `O MNIE`;
        }; break
        case "linkOffer": { 
            to = `/oferta`,
            text = `OFERTA`;
        }; break
        case "linkPortfolio": { 
            to = `/portfolio`,
            text = `PORTFOLIO`;
        }; break
        case "linkContact": { 
            to = `/kontakt`,
            text = `KONTAKT`;
        }; break
        // case "portfolioPortfolio": { 
        //     text = `Portfolio`,
        //     version = `v1.0.0`,
        //     typeversion = `Stabilna`,
        //     color = `text-[#28c76f]`,
        //     info = `Ostatnia aktualizacja 19.10.2023`;
        // }; break
        case "portfolioPortfolio": { 
            to = `https://p-app-6b649.web.app/`,
            text = `Portfolio`,
            version = `v1.0.0`,
            typeversion = `Beta`,
            color = `text-[#de8d43]`,
            info = `Ostatnia aktualizacja 05.01.2024`;
        }; break
        case "portfolioEcommerce": { 
            to = `https://e-app-f83ca.web.app/`,
            text = `Ecommerce`,
            version = `v1.0.0`,
            typeversion = `Alfa`,
            color = `text-[#ed143d]`,
            info = `Ostatnia aktualizacja 05.01.2024`;
        }; break
        case "portfolioDashboard": { 
            to = `https://d-app-f5396.web.app/`,
            text = `Dashboard`,
            version = `v1.0.0`,
            typeversion = `Alfa`,
            color = `text-[#ed143d]`,
            info = `Ostatnia aktualizacja 05.01.2024`;
        }; break
        case "portfolioMailbox": { 
            to = `https://m-app-437ef.web.app/`,
            text = `Mailbox`,
            version = `v1.0.0`,
            typeversion = `Beta`,
            color = `text-[#de8d43]`,
            info = `Ostatnia aktualizacja 05.01.2024`;
        }; break
        case "contactEmail": { 
            icon = `mail`,
            text = `bartekzdulski@gmail.com`,
            color = `text-[#808080]`,
            shadow = `shadow-[inset_0_0_1rem_#808080]`;
        }; break
        case "contactPhone": { 
            icon = `phone`,
            text = `739 124 335`,
            color = `text-[#6366f1]`,
            shadow = `shadow-[inset_0_0_1rem_#6366f1]`;
        }; break
        case "contactInstagram": { 
            icon = `photo_camera`,
            text = `@`,
            color = `text-[#ed143d]`,
            shadow = `shadow-[inset_0_0_1rem_#ed143d]`;
        }; break
    }

    return (
        <>
            {[`matrix`].includes(render) &&
                <canvas id="matrix" className={`fixed z-[-1]`}/>
            }

            {[`logo`].includes(render) &&
                <Link className={`fixed top-[2.6rem] left-[-2rem] rotate-[-45deg] font-['Montez'] cursor-pointer animate-[appear_1s_linear] peer ${isMobile ? `top-[1.3rem] left-[-1rem] text-center text-[4rem] ${isOpen ? `` : `hidden`}` : `text-[8rem]`}`} reloadDocument>portfolio</Link>
            }

            {[`menu`].includes(render) &&
                <div className={`fixed top-0 right-0 transform-style-3d group z-[999]`} onClick={() => setIsOpen(!isOpen)}>
                  <span className={`fixed flex justify-center group items-center rounded-[50%] shadow-[inset_0_0_1rem_#6366f1] bg-black text-[#6366f1] w-[48px] top-[0rem] right-[0rem] font-['Material_icons'] text-2xl p-[.5rem] duration-[.5s] ${isOpen ? `rotate-y-0` : `rotate-y-[180deg]`}`}>menu</span>
                  <span className={`fixed flex justify-center group items-center rounded-[50%] shadow-[inset_0_0_1rem_#ed143d] bg-black text-[#ed143d] w-[48px] top-[0rem] right-[0rem] font-['Material_icons'] text-2xl p-[.5rem] backface-hidden duration-[.5s] ${isOpen ? `rotate-y-0` : `rotate-y-[180deg]`}`}>close</span>
                </div>            }

            {[`logoBeamOne`].includes(render) &&
                <span className={`fixed bg-[#6366f1] top-0 bottom-0 left-0 right-0 h-[20rem] w-[20rem] blur-[10rem] z-[-1] duration-[1s] animate-[appear_1s_linear]`}/>
            }

            {[ `logoBeamTwo`].includes(render) &&
                <span className={`fixed bg-transparent top-0 bottom-0 left-0 right-0 h-[20rem] w-[20rem] blur-[10rem] z-[-1] duration-[1s] animate-[appear_1s_linear] peer-hover:bg-[#6366f1]`}/>
            }

            {[`aboutLines`, `aboutProjects`, `aboutYears`].includes(render) &&
                <div className={`h-[72px] w-[72px] transform-style-3d cursor-default group`}>
                    <span className={`flex flex-col justify-center items-center absolute top-0 right-0 bottom-0 left-0 font-['Material_icons'] text-4xl rounded-[50%] bg-transparent backface-hidden group-hover:rotate-y-[180deg] duration-[.5s] ${color}`}>{icon}</span>
                    <span className={`flex flex-col justify-center items-center absolute top-0 right-0 bottom-0 left-0 text-xl rounded-[50%] bg-transparent rotate-y-[180deg] backface-hidden group-hover:rotate-y-[0deg] duration-[.5s] ${color}`}>{text}</span>
                </div> 
            }

            {[`aboutHtml`, `aboutCss`, `aboutJs`, `aboutReact`, `aboutTailwindcss`, `aboutFirebase`, `aboutRedux`, `aboutGithub`, `aboutPhotoshop`].includes(render) &&
                <div className={`flex group`} onClick={() => setIsHover(isHover === render ? null : render)}>
                    <button className={`text-5xl group-hover:animate-[rotate_3s_linear_infinite] duration-[.5s] ${icon} ${isHover === render ? `animate-[rotate_3s_linear_infinite]` : ``}`}/>
                </div>
            }

            {[`offerHosting`, `offerProject`, `offerSupport`].includes(render) &&
                <div className={`relative flex flex-col justify-between p-[3rem] max-w-[20rem] h-[30rem] rounded-[1rem] duration-[.5s] hover:translate-y-[-3rem] ${shadow}`}>
                    <div className="flex flex-col gap-[1rem]">
                        <span className={`text-5xl font-['Material_icons'] ${color}`}>{icon}</span>
                        <p className={`font-bold italic ${color}`}>{text}</p>
                    </div>
                    <p className="text-[#ffffff40]">{info}</p>
                    <p className={`font-bold italic ${shadowtext} ${color}`}>{button}</p>
                    <p className={`flex items-center justify-center absolute text-[#ed143d] text-center h-[24rem] w-[14rem] font-bold text-3xl italic z-[1] blur-[.5rem] rotate-[-15deg]`}>NIEAKTUALNE</p>
                    <p className={`flex items-center justify-center absolute text-[#ed143d] text-center h-[24rem] w-[14rem] font-bold text-3xl italic z-[1] rotate-[-15deg]`}>NIEAKTUALNE</p>
                </div>
            }

            {[`portfolioPortfolio`, `portfolioEcommerce`, `portfolioDashboard`, `portfolioMailbox`].includes(render) &&
                <Link className={`flex flex-col justify-center p-[3rem] gap-[.5rem] w-[20rem] h-[20rem] shadow-[inset_1rem_1rem_2rem_0_#6366f199,inset_-1rem_-1rem_2rem_0_#ed143d99] group hover:shadow-[inset_1rem_1rem_2rem_0_#6366f1,inset_-1rem_-1rem_2rem_0_#ed143d] rounded-[1rem] duration-[.5s] cursor-pointer`} to={to}>
                    <p className={`text-3xl font-bold italic opacity-[50%] group-hover:opacity-[100%] group-hover:drop-shadow-[0_0_.5rem_#ffffff] duration-[.5s]`}>{text}</p>
                    <p className={`text-[.7rem] font-bold opacity-[50%] group-hover:opacity-[100%] duration-[.5s] ${color}`}>{version} {typeversion}<br/>{info}</p>
                </Link>
            }

            {[`contactEmail`, `contactPhone`, `contactInstagram`].includes(render) &&
                <div className={`flex items-center justify-center hover:rotate-[360deg] duration-[.5s] group h-[72px] w-[72px] ${shadow}`}>
                    <span className={`absolute leading-none text-4xl font-['Material_icons'] z-[-1] flex items-center justify-center ${color}`}>{icon}</span>
                    <p className={`flex italic font-bold opacity-0 group-hover:opacity-[1] duration-[0.5s] whitespace-nowrap`}>{text}</p>
                </div>
            }

            {[`linkAbout`, `linkOffer`, `linkPortfolio`, `linkContact`].includes(render) &&
                <Link className={`flex gap-[1rem] text-[2rem] text-[#ffffff40] duration-[.5s] blur-[.1rem] hover:text-[#ffffff] hover:filter-none`} to={to} onClick={() => isOpen ? setIsOpen(!isOpen) : null}>
                    <p className={pathname === to ? `text-[#6366f1] filter-none` : ``}>•</p>
                    <p className={pathname === to ? `font-bold text-[#6366f1] filter-none` : `font-bold`}>{text}</p>
                </Link>
            }

            {[`textDeveloper`].includes(render) &&
                <div className={`flex flex-col gap-[1rem]`}>
                    <p className={`font-bold italic text-[#6366f1]`}>Web developer</p>
                    <p className={``}>Witam, nazywam się Bartek Zdulski i zajmuję się tworzeniem aplikacji internetowych wykorzystujących technologie frontend wraz z architekturą serverless.</p> 
                </div>
            }

            {[`textLibraries`].includes(render) &&
                <div className={`flex flex-col gap-[1rem]`}>
                    <p className={`font-bold italic text-[#ed143d]`}>Biblioteki i narzędzia</p>
                    <p className={``}><span className={isHover === "aboutHtml" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>html5</span>, <span className={isHover === "aboutCss" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>css3</span>, <span className={isHover === "aboutJs" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>javascript</span>, <span className={isHover === "aboutReact" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>react</span>, <span className={isHover === "aboutReact" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>react-dom</span>, <span className={isHover === "aboutReact" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>react-router-dom</span>, <span className={isHover === "aboutReact" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>react-scripts</span>, <span className={isHover === "aboutReact" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>react-hook-form</span>, <span className={isHover === "aboutReact" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>react-spinners</span>, <span className={isHover === "aboutReact" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>react-to-print</span>, <span className={`inline text-[#ffffff40]`}><span className={isHover === "aboutRedux" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>redux</span></span>, <span className={`inline text-[#ffffff40]`}><span className={isHover === "aboutRedux" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>@reduxjs/toolkit</span></span>, <span className={`inline text-[#ffffff40]`}>styled-components</span>, <span className={isHover === "aboutTailwindcss" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>tailwindcss</span>, <span className={isHover === "aboutTailwindcss" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>tailwindcss-3d</span>, <span className={isHover === "aboutFirebase" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>firebase</span>, immer, zustand, <span className={isHover === "aboutGithub" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>github</span>, visual studio code, <span className={isHover === "aboutFirebase" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>firebase cli</span>, openai, <span className={`inline text-[#ffffff40]`}><span className={isHover === "aboutPhotoshop" ? `text-[#ed143d] inline duration-[.5s]` : `inline duration-[.5s]`}>photoshop</span></span>.</p>   
                    <div className={`flex justify-center font-bold italic text-xs gap-[1rem]`}>
                        <p className={`text-[#ffffff]`}>KORZYSTAM</p>
                        <p className={`text-[#ffffff]`}>•</p>
                        <p className={`text-[#ffffff40]`}>POZNAŁEM</p>
                    </div>
                </div>
            }

            {[`textContact`].includes(render) &&
                <div className={`flex flex-col gap-[1rem]`}>
                    <p className={`font-bold italic text-[#6366f1]`}>Skontaktuj się</p>
                    <p className={``}>W przypadku chęci nawiązania współpracy lub zapoznania się ze szczegółami oferty zapraszam do kontaktu.</p> 
                </div>
            }

            {[`textForm`].includes(render) &&
                <p className={`font-bold italic text-[#ed143d] mb-[.5rem]`}>Formularz kontaktowy</p>
            }

            {[`textCopyright`].includes(render) &&
                <>
                    <p className={`text-[#ffffff40] font-bold text-[.7rem]`}>&#169;</p>
                    <p className={`text-[#ffffff40] font-bold text-[.7rem]`}>COPYRIGHT {date.getFullYear()}<br/>WSZELKIE PRAWA ZASTRZEŻONE!</p>
                </>
            }

            {[`textError`].includes(render) &&
                <div className="flex flex-col items-center justify-center gap-[1rem]">
                    <div>
                        <p className={`absolute flex items-center justify-center text-[#ed143d] text-center w-[15rem] font-bold text-3xl italic z-[1] blur-[.5rem] rotate-[-15deg]`}>BŁĄD 404</p>
                        <p className={`flex items-center justify-center text-[#ed143d] text-center w-[15rem] font-bold text-3xl italic z-[1] rotate-[-15deg]`}>BŁĄD 404</p>
                    </div>
                    <p className="w-[30rem] text-center rotate-[-15deg]">Przepraszamy ale strona, której szukasz nie istnieje, sprawdź czy poprawnie wpisałeś adres url w wyszukiwarce!</p>
                </div>
            }

            {[`textSended`].includes(render) &&
                <div className="flex flex-col items-center justify-center gap-[1rem]">
                    <div>
                        <p className={`absolute flex items-center justify-center text-[#6366f1] text-center w-[15rem] font-bold text-3xl italic z-[1] blur-[.5rem] rotate-[-15deg]`}>WYSŁANE</p>
                        <p className={`flex items-center justify-center text-[#6366f1] text-center w-[15rem] font-bold text-3xl italic z-[1] rotate-[-15deg]`}>WYSŁANE</p>
                    </div>
                    <p className="w-[30rem] text-center rotate-[-15deg]">Dziękuję za wiadomość! Postaram się na nią odpowiedzieć w ciągu najbliższych 48 godzin. Jeśli do tego czasu nie pojawi się odpowiedź zwrotna, proszę o ponowy kontakt!</p>
                </div>
            }

            {[`formContact`].includes(render) &&
                <form className="flex flex-col gap-[1rem]" onSubmit={handleSubmit(event => store.sendEmail(event))}>
                    {children}
                </form>
            }

            {[`formSender`].includes(render) &&
                <input className={`placeholder-[#ffffff40] text-[#ffffff] duration-[.5s] focus:shadow-[inset_0rem_0rem_2rem_0_#ffffff] hover:text-[#ffffff] hover:shadow-[inset_0rem_0rem_2rem_0_#ffffff] outline-none p-[1rem] rounded-[1rem] max-w-[30rem] bg-[transparent] ${errors.sender ? `shadow-[inset_0rem_0rem_2rem_0_#ed143d]` : `shadow-[inset_0rem_0rem_2rem_0_#808080]`}`} 
                    placeholder="Email / Telefon / Instagram"
                    {...register("sender", {/*pattern: "",*/required: true})}/>
            }

            {[`formMessage`].includes(render) &&
                <textarea className={`placeholder-[#ffffff40] duration-[.5s] focus:shadow-[inset_0rem_0rem_2rem_0_#ffffff] text-[#ffffff] hover:text-[#ffffff] hover:shadow-[inset_0rem_0rem_2rem_0_#ffffff] outline-none resize-none p-[1rem] rounded-[1rem] max-w-[30rem] h-[20rem] bg-[transparent] ${errors.message ? `shadow-[inset_0rem_0rem_2rem_0_#ed143d]` : `shadow-[inset_0rem_0rem_2rem_0_#808080]`}`} 
                    placeholder="Wpisz wiadomość tekstową"
                    {...register("message", {/*pattern: "",*/required: true})}/>
            }

            {[`formButton`].includes(render) &&
                <button className={`flex items-center justify-center p-[1rem] rounded-[1rem] max-w-[30rem] shadow-[inset_0rem_0rem_2rem_0_#6366f1] opacity-[50%] font-bold italic duration-[.5s] hover:opacity-[100%]`}>WYŚLIJ</button>
            }
        </>
    )
}