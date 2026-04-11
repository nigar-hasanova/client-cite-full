import classes from '../../assets/css/portfolio.module.css'
import facebook from '../../assets/icon-svg/MediaIconsDark/faceBook.svg'
import instagram from '../../assets/icon-svg/MediaIconsDark/instagraM.svg'
import linkedin from '../../assets/icon-svg/MediaIconsDark/linkediN.svg'
import twitter from '../../assets/icon-svg/MediaIconsDark/twitteR.svg'

export default function PortofiloFirstSection() {
    return (
        <section className={classes.portfolioFirst}>
            <div className="container">
                <div className={classes.portfolioBody}>
                    <h6>What we created</h6>
                    <h2>Our Work Portfolio</h2>
                    <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                    <div className={classes.icons}>
                        <img src={facebook} alt="fb" />
                        <img src={twitter} alt="tw" />
                        <img src={instagram} alt="ins" />
                        <img src={linkedin} alt="li" />
                    </div>
                </div>
            </div>
        </section>
    )
}
