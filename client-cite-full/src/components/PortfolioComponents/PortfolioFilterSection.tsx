import { useEffect, useState } from "react";
import classes from '../../assets/css/portfolio.module.css';
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import { useNavigate } from "react-router";
import axios from "axios";
import type { PortfolioDataType } from '../../types/portfolioDataType';


export default function PortfolioFilterSection() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState("all");
    const [data, setData] = useState<PortfolioDataType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get<PortfolioDataType[]>('/mock/portfolio.json');
                console.log('Response data:', response.data);

                setData(Array.isArray(response.data) ? response.data : []);
                setError(null);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch portfolio data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredData =
        filter === "all"
            ? Array.isArray(data) ? data : []
            : Array.isArray(data) ? data.filter((item) => item.category === filter) : [];

    console.log("Filtered Data:", filteredData);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <section className={classes.portfolioFilter}>
            <div className="container">
                <div className={classes.filters}>
                    <button
                        className={filter === "all" ? classes.active : ""}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>

                    <button
                        className={filter === "ui" ? classes.active : ""}
                        onClick={() => setFilter("ui")}
                    >
                        UI Design
                    </button>

                    <button
                        className={filter === "webflow" ? classes.active : ""}
                        onClick={() => setFilter("webflow")}
                    >
                        Webflow Design
                    </button>

                    <button
                        className={filter === "figma" ? classes.active : ""}
                        onClick={() => setFilter("figma")}
                    >
                        Figma Design
                    </button>
                </div>

                <div className={classes.grid}>
                    {filteredData.map((item) => (
                        <div key={item.id}
                            className={classes.card}
                        >
                            <div style={{ background: item.bg }} className={classes.cardImgDiv}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>
                                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                            <BtnPrimary
                                title={'View Portfolio'}
                                titleColor={'#282938'}
                                rightArrColor={'#282938'}
                                onClick={() => navigate(`/portfolio/${item.id}`)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
