import ClientsReview from '../components/HomeComponents/ClientsReview';
import BlogSection from '../components/HomeComponents/BlogSection';
import FaqSection from '../components/HomeComponents/FaqSection';
import FeaturesSection from '../components/HomeComponents/FeaturesSection';
import HomeFirstSection from '../components/HomeComponents/HomeFirstSection';
import OurProjectsSection from '../components/HomeComponents/OurProjectsSection';
import InquirySection from '../components/HomeComponents/InquirySection';
import HowWeWorkSection from '../components/HomeComponents/WorkSection/HowWeWorkSection';
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Helmet } from 'react-helmet-async';
import useReveal from '../assets/ts/useReveal';

export default function Home() {
    useReveal();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeFirstSection />
            <HowWeWorkSection />
            <OurProjectsSection />
            <FeaturesSection />
            <ClientsReview />
            <FaqSection />
            <InquirySection />
            <BlogSection />
        </>
    )
}
