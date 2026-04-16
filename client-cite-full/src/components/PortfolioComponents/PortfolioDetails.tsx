import { useParams } from 'react-router'
import classes from '../../assets/css/portfolioDetails.module.css'
// import portfolioData from '../../data/PortfolioData'
import PortfolioDetailsAbout from './PortfolioDetailsAbout';
import { Helmet } from 'react-helmet-async';
import Loader from '../Loader/Loader';
import type { PortfolioDataType } from '../../types/portfolioDataType';
import { useEffect, useState } from 'react';
import { getData } from '../../api/api';




export default function PortfolioDetails() {

    const { id } = useParams();
    // const portfolio = portfolioData.find((card) => card.id === Number(id));
    const [portfolio, setPortfolio] = useState<PortfolioDataType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            setLoading(true);
            try {
                const response = await getData<PortfolioDataType[]>('/mock/portfolio.json');
                const selected = response.data.find(card => card.id === Number(id));
                if (!selected) {
                    setError('Portfolio not found');
                } else {
                    setPortfolio(selected)
                }
            } catch (err) {
                console.error(err);
                setError('Failed to fetch portfolio data');
                setPortfolio(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, [id])

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;
    if (!portfolio) return null;
    return (
        <>
            <Helmet>
                <title>{portfolio.title}</title>
            </Helmet>
            <section className={classes.portfolioDetails}>
                <div className="container">
                    <div className={classes.detailsBody}>
                        <div className={classes.detailsText}>
                            <h6>Web design and development</h6>
                            <h2>Finsweet Design case studies</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        </div>
                        <div className={classes.portfolioCardDetail}>
                            <div style={{ background: portfolio.bg }} className={classes.detailCardImg}>
                                <img src={portfolio?.img} alt={portfolio?.title} className={classes.detailsImg} />
                            </div>
                        </div>
                        <div className={classes.info} >
                            <p><b>Client</b> {portfolio.info.client}</p>
                            <p><b>Service</b> {portfolio.info.service}</p>
                            <p><b>Deliverable</b> {portfolio.info.deliverable}</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
            <PortfolioDetailsAbout />
        </>
    )
}
