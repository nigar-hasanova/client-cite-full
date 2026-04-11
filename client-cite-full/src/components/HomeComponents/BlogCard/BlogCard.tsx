import classes from './blogCard.module.css'
import BtnPrimary from '../../BtnPrimary/BtnPrimary';
import { Link } from 'react-router';

type Props = {
    id: number,
    cardImage: string,
    dateTitle: string,
    description: string,
    text: string
}

export default function BlogCard({ cardImage, dateTitle, description, text, id }: Props) {
    return (
        <div className={classes.blogCard}>
            <img src={cardImage} alt="" />
            <p className={classes.dateTitle}>{dateTitle}</p>
            <h6 className={classes.description}>{description}</h6>
            <p className={classes.text}>{text}</p>
            <Link to={`/blog/${id}`}>
                <BtnPrimary
                    title="Read More"
                    titleColor="#282938"
                    rightArrColor="#282938"
                />
            </Link>
        </div>
    )
}
