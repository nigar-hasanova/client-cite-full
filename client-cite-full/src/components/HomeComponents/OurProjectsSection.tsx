import BtnPrimary from '../BtnPrimary/BtnPrimary';
import classes from '../../assets/css/home.module.css';
import { useNavigate } from "react-router";

export default function OurProjectsSection() {
    const navigate = useNavigate();
    return (
        <section className={classes.projects}>
            <div className="container">
                <div className={classes.projectsBody}>
                    <div className={classes.projectsHeader}>
                        <h2>View our projects</h2>
                        <BtnPrimary
                            title={'View More'}
                            titleColor={'#282938'}
                            rightArrColor={'#282938'}
                            onClick={() => navigate("/portfolio")}
                        />
                    </div>
                    <div className={classes.projectsCards}>
                        <div className={classes.card1}>
                            <div className={classes.overlay}>
                                <div className={classes.content}>
                                    <h3>Workhub office Webflow Webflow Design</h3>
                                    <p>
                                        Euismod faucibus turpis eu gravida mi.
                                        Pellentesque et velit aliquam
                                    </p>
                                    <BtnPrimary
                                        title="View project"
                                        titleColor="#FCD980"
                                        rightArrColor="#FCD980"
                                        onClick={() => navigate("/portfolio")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes.projectsCardRight}>
                            <div className={classes.card2}>
                                <h3>Unisaas Website
                                    Design</h3>
                                <BtnPrimary
                                    title="View portofilo"
                                    titleColor="#FCD980"
                                    rightArrColor="#FCD980"
                                     onClick={() => navigate("/portfolio")}
                                />
                            </div>
                            <div className={classes.card3}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
