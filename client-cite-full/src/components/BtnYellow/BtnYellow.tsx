import classes from './btnYellow.module.css';

type Props = {
    title: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function BtnYellow({ title, onClick }: Props) {
    return (
        <>
            <button onClick={onClick} className={classes.btnYellow}>{title}</button>
        </>
    )
}
