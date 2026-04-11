import classes from '../assets/css/pricing.module.css'
import { pricingData } from "../data/PricingData.tsx";
import PricingCard from '../components/PricingComponents/PricingCard/PricingCard';
import Faq from '../components/HomeComponents/FaqSection.js'
import { Helmet } from 'react-helmet-async';
import useReveal from '../assets/ts/useReveal'

export default function Pricing() {
    useReveal()
    return (
        <>
        <Helmet>
            <title>Pricing</title>
        </Helmet>
            <section className={classes.pricing}>
                <div className="container">
                    <div className={classes.cardsHeader}>
                        <h2>Our Pricing Plans</h2>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow is
                            ready to help you bring your designs to life — without coding them.
                        </p>
                    </div>
                    <div className={classes.pricingWrapper}>
                        {pricingData.map((card, index) => (
                            <PricingCard key={index} {...card} />
                        ))}
                    </div>
                    <Faq />
                </div>
            </section>
        </>
    )
}
