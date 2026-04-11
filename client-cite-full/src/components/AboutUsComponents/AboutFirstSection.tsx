import aboutFirst from '../../assets/images/AboutPageImages/aboutFirst.png'
import classes from '../../assets/css/about.module.css'

export default function AboutFirstSection() {
    return (
        <section className={`reveal ${classes.aboutFirst}`}>
            <div className="container">
                <div className={classes.aboutFirstBody}>
                    <div className={classes.aboutFirstBodyLeft}>
                        <h6>About us</h6>
                        <h1>Our designs solve problems</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className={classes.aboutFirstImg}>
                        <img src={aboutFirst} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}
