import { Item } from "./Item"

export const AppPortfolio = () => {
    return ( 
        <div className="flex items-center justify-center flex-wrap gap-[3rem]">
            <Item render="portfolioPortfolio"/>
            <Item render="portfolioMailbox"/>
            <Item render="portfolioEcommerce"/>
            <Item render="portfolioDashboard"/>
        </div>
    )
}