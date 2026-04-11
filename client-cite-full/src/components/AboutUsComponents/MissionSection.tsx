import mission1 from '../../assets/images/AboutPageImages/mission1.png'
import mission2 from '../../assets/images/AboutPageImages/mission2.png'
import classes from '../../assets/css/about.module.css'

export default function MissionSection() {
    return (
        <section className={`reveal ${classes.mission}`}>
            <div className="container">
                <div className={classes.missionBody}>
                    <div className={classes.missionTop}>
                        <div className={classes.missionText}>
                            <h6>Our Mission</h6>
                            <h3>Inspire, Innovate, Share</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className={classes.missionImg}>
                            <img src={mission1} alt="img" />
                        </div>
                    </div>
                    <div className={classes.missionDown}>
                        <div className={classes.missionImg}>
                            <img src={mission2} alt="img" />
                        </div>
                        <div className={classes.missionText}>
                            <h6>Our Vision</h6>
                            <h3>Laser focus</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
