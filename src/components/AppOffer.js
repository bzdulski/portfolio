import { Item } from "./Item"

export const AppOffer = () => {
    return ( 
        <div className={`flex justify-center items-center gap-[3rem] mobile:flex-wrap`}>
            <Item render="offerHosting"/>
            <Item render="offerProject"/>
            <Item render="offerSupport"/>
        </div>
    )
}