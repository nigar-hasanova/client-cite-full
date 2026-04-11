import classes from './featuresCard.module.css'

type Props = {
    cardSvg: string,
    title: string,
    body: string
}

export default function FeaturesCards({ cardSvg, title, body } : Props) {
    return (
        <div className={classes.card}>
            <img src={cardSvg} alt="svg" />
            <h6>{title}</h6>
            <p>{body}</p>
        </div>
    )
}
