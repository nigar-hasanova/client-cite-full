import { Helmet } from "react-helmet-async";
import AboutFirstSection from "../components/AboutUsComponents/AboutFirstSection";
import BenefitSection from "../components/AboutUsComponents/BenefitSection";
import MissionSection from "../components/AboutUsComponents/MissionSection";
import ProcessSection from "../components/AboutUsComponents/ProcessSection";
import TeamSection from "../components/AboutUsComponents/TeamSection";
import WhoWeAreSection from "../components/AboutUsComponents/WhoWeAreSection";
import useReveal from '../assets/ts/useReveal'

export default function AboutUs() {
    useReveal()
    return (
        <>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <AboutFirstSection />
            <WhoWeAreSection />
            <ProcessSection />
            <MissionSection />
            <BenefitSection />
            <TeamSection />
        </>
    )
}
