import FeaturesCards from './FeaturesCards/FeaturesCards';
import custom from '../../assets/icon-svg/features/custom.svg'
import delivery from '../../assets/icon-svg/features/delivery.svg'
import file from '../../assets/icon-svg/features/file.svg'
import people from '../../assets/icon-svg/features/people.svg'
import right from '../../assets/icon-svg/features/right.svg'
import support from '../../assets/icon-svg/features/support.svg'
import classes from '../../assets/css/home.module.css';

export default function FeaturesSection() {
    return (
        <section className={`reveal ${classes.features}`}>
            <div className="container">
                <div className={classes.featuresBody}>
                    <div className={classes.featuresHeading}>
                        <p>Features</p>
                        <h2>Design that solves problems, one product at a time</h2>
                    </div>
                    <div className={classes.featuresCards}>
                        <FeaturesCards
                            cardSvg={people}
                            title="Uses Client First"
                            body="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                        />
                        <FeaturesCards
                            cardSvg={right}
                            title="Two Free Revision Round"
                            body="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                        />
                        <FeaturesCards
                            cardSvg={custom}
                            title="Template Customization"
                            body="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                        />
                        <FeaturesCards
                            cardSvg={support}
                            title="24/7 Support"
                            body="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                        />
                        <FeaturesCards
                            cardSvg={delivery}
                            title="Quick Delivery"
                            body="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                        />
                        <FeaturesCards
                            cardSvg={file}
                            title="Hands-on approach"
                            body="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
