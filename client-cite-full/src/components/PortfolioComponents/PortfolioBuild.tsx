import { useNavigate } from 'react-router'
import classes from '../../assets/css/portfolio.module.css'
import BtnYellow from '../BtnYellow/BtnYellow'

export default function PortfolioBuild() {
    const navigate = useNavigate()
    return (
        <section className={classes.portfolioBuild}>
            <div className="container">
                <div className={classes.biuldBody}>
                    <h2>Let's build something great together</h2>
                    <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                    <BtnYellow
                        title={'Contact Us'}
                        onClick={() => navigate("/contact")}
                    />
                </div>
            </div>
        </section>
    )
}
