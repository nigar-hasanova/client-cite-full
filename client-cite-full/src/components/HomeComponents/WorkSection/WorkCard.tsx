import classes from './work.module.css';
import workCard from '../../../assets/icon-svg/workCard.svg';

type Props = {
    title: string,
    description: string
}

export default function WorkCard({ title, description } : Props) {
    return (
        <div className={classes.workCard}>
            <img src={workCard} alt="icon" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
