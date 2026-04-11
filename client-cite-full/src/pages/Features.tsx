import { Helmet } from 'react-helmet-async'
import BenefitSection from '../components/AboutUsComponents/BenefitSection'
import MissionSection from '../components/AboutUsComponents/MissionSection'
import FaqSection from '../components/HomeComponents/FaqSection'
import HomeFirstSection from '../components/HomeComponents/HomeFirstSection'
import useReveal from '../assets/ts/useReveal'

export default function Features() {
    useReveal()
    return (
        <>
            <Helmet>
                <title>Features</title>
            </Helmet>
            <HomeFirstSection />
            <BenefitSection />
            <MissionSection />
            <FaqSection />
        </>
    )
}
