import Header from '../components/Header'
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}
