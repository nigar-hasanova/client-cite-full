import Header from '../components/Header'
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'
import Footer from '../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react';

export default function DefaultLayout() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <>
            <Header />
            <Outlet />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}
