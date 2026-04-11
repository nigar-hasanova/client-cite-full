import homeRight from '../../assets/icon-svg/home.png';
import classes from '../../assets/css/home.module.css';
import BtnYellow from "../BtnYellow/BtnYellow";
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import { useNavigate } from "react-router";

export default function HomeFirstSection() {
    const navigate = useNavigate()
    return (
        <section className={classes.home}>
            <div className="container">
                <div className={classes.homeBody}>
                    <div className={classes.homeBodyLeft}>
                        <h1>Building stellar websites for early startups</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div className={classes.buttons}>
                            {<BtnYellow 
                            title='View our work'
                            onClick={()=> navigate('/portfolio')}
                             />}
                            {<BtnPrimary 
                            title='View Pricing'
                             style={{ color: '#FFF' }} 
                             onClick={()=>navigate('/pricing')}
                             />}
                        </div>
                    </div>
                    <div className={classes.homeBodyRight}>
                        <img src={homeRight} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
