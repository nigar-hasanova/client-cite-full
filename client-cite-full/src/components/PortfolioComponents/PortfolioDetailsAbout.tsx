import { useParams } from 'react-router'
import classes from '../../assets/css/portfolioDetails.module.css'
import PortfolioBuild from './PortfolioBuild';
import Loader from '../Loader/Loader';
import type { PortfolioDataType } from '../../types/portfolioDataType';
import { useEffect, useState } from 'react';
import { getData } from '../../api/api';


export default function () {

  const { id } = useParams();
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
          setPortfolio(null);
        } else {
          setPortfolio(selected);
          setError(null);
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
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!portfolio) return null;

  return (
    <section className={classes.detailsAbout}>
      <div className={`container ${classes.detailsAboutContainer}`}>
        <div className={classes.aboutBody}>
          <h3>{portfolio.about.title}</h3>
          <p>{portfolio.about.text}</p>
          <ul>
            <li>{portfolio.about.list[0]}</li>
            <li>{portfolio.about.list[1]}</li>
            <li>{portfolio.about.list[2]}</li>
            <li>{portfolio.about.list[3]}</li>
          </ul>
          <div style={{ background: portfolio.bg }} className={classes.aboutCardBg}>
            <img src={portfolio.about.img} alt={portfolio.title} />
          </div>
        </div>
        <div className={classes.processBody}>
          <h3>{portfolio.process.title}</h3>
          <p>{portfolio.process.text}</p>
          <ul>
            {portfolio.process.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <PortfolioBuild />
      </div>
    </section>
  )
}
