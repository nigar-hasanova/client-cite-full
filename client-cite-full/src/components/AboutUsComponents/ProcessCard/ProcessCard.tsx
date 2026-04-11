import circle from '../../../assets/icon-svg/circle.svg'
import classes from './processCard.module.css'

type Props = {
    title: string,
    description: string
}

export default function ProcessCard({ title, description }: Props) {
    return (
        <div className={classes.processCard}>
            <div className={classes.icon}>
                <img src={circle} alt="circle" />
                <div className={classes.dottedBorder}></div>
            </div>
            <div className={classes.text}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}
