import classes from '../../assets/css/about.module.css'
import whoweare from '../../assets/images/AboutPageImages/whoweare.png'

export default function WhoWeAreSection() {
    return (
        <section className={` reveal ${classes.whoweare}`}>
            <div className="container">
                <div className={classes.whotop}>
                    <h6>Who we are</h6>
                    <div className={classes.whoBoxes}>
                        <div className={classes.box}>
                            <h3>Goal focussed</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className={classes.box}>
                            <h3>Continuous improvement</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.whoImg}>
                    <img src={whoweare} alt="image" />
                </div>
            </div>
        </section>
    )
}
