import { Helmet } from 'react-helmet-async'
import PortfolioBuild from '../components/PortfolioComponents/PortfolioBuild'
import PortfolioFilterSection from '../components/PortfolioComponents/PortfolioFilterSection'
import PortfolioFirstSection from '../components/PortfolioComponents/PortfolioFirstSection'

export default function Portofilo() {
    return (
        <>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <PortfolioFirstSection />
            <PortfolioFilterSection />
            <PortfolioBuild />
        </>
    )
}
