import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./components/PortfolioComponents/PortfolioDetails";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import DefaultLayout from "./layout/DefaultLayout";
import Error from "./pages/Error";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Router>
                <Routes>

                    <Route element={<DefaultLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogDetails />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Error />} />
                    </Route>

                </Routes>
            </Router>
        </>
    )
}
