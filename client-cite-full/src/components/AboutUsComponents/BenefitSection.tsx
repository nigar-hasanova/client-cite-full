import file from '../../assets/icon-svg/features/file.svg'
import people from '../../assets/icon-svg/features/people.svg'
import custom from '../../assets/icon-svg/features/custom.svg'
import BenefitCard from './BenefitCard/BenefitCard'
import classes from '../../assets/css/about.module.css'
import logo1 from '../../assets/icon-svg/benefit/logo1.svg'
import logo2 from '../../assets/icon-svg/benefit/logo2.svg'
import logo3 from '../../assets/icon-svg/benefit/logo3.svg'
import logo4 from '../../assets/icon-svg/benefit/logo4.svg'
import logo5 from '../../assets/icon-svg/benefit/logo5.svg'

export default function BenefitSection() {
    return (
        <section className={`reveal ${classes.benefit}`}>
            <div className="container">
                <div className={classes.benefitBody}>
                    <h2 className={classes.benefitHeading}>The benefits of working with us</h2>
                    <div className={classes.benefitCards}>
                        <BenefitCard
                            cardImg={file}
                            title={'Customize with ease'}
                            description={'Customize with ease'}
                        />
                        <BenefitCard
                            cardImg={custom}
                            title={'Perfectly Responsive'}
                            description={'Customize with ease'}
                        />
                        <BenefitCard
                            cardImg={people}
                            title={'Friendly Support'}
                            description={'Customize with ease'}
                        />
                    </div>
                    <div className={classes.benefitLogos}>
                        <div className={classes.logo}>
                            <h3>100.000+</h3>
                            <p>Finsweet Users</p>
                        </div>
                        <img src={logo1} alt="logo" />
                        <img src={logo2} alt="logo" />
                        <img src={logo3} alt="logo" />
                        <img src={logo4} alt="logo" />
                        <img src={logo5} alt="logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
