import logo from '../../assets/icon-svg/logo.svg'
import classes from './footer.module.css';
import FacebookIcon from "../../assets/icon-svg/footer/facebook.svg";
import InstagramIcon from "../../assets/icon-svg/footer/instagram.svg";
import LinkedinIcon from "../../assets/icon-svg/footer/linkedn.svg"
import TwitterIcon from "../../assets/icon-svg/footer/twitter.svg";
import Copyright from './Copyright';

export default function Footer() {
    return (
        <>
            <section className={classes.footer}>
                <div className="container">
                    <div className={classes.footerBody}>
                        <div className={classes.footerBodyLeft}>
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <p>We are always open to discuss your project and improve your online presence.</p>
                            <div className={classes.footerYellowBox}>
                                <div className={classes.footerEmail}>
                                    <h6>Email me at</h6>
                                    <p>contact@website.com</p>
                                </div>
                                <div className={classes.footerCall}>
                                    <h6>Call us</h6>
                                    <p>0927 6277 28525</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.footerBodyRight}>
                            <h2>Lets Talk!</h2>
                            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                            <div className={classes.footerSocialMediaIcons}>
                                <img src={FacebookIcon} alt="Facebook" />
                                <img src={InstagramIcon} alt="Instagram" />
                                <img src={LinkedinIcon} alt="LinkedIn" />
                                <img src={TwitterIcon} alt="Twitter" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Copyright />
        </>
    )
}
