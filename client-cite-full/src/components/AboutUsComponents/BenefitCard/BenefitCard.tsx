import classes from './benefit.module.css'

type Props = {
    cardImg: string,
    title: string,
    description: string
}

export default function BenefitCard({ cardImg, title, description }: Props) {
    return (
        <div className={classes.benefitCard}>
            <img src={cardImg} alt="img" className={classes.benefitImg} />
            <h6 >{title}</h6>
            <p>{description}</p>
        </div>
    )
}
