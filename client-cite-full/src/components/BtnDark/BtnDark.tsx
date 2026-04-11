import classes from './btnDark.module.css'

type Props = {
    title: string,
    disabled?: boolean | undefined
}

export default function BtnDark({ title, disabled }: Props) {
    return (
        <button
            className={classes.btnDark}
            disabled={disabled}
        >
            {title}
        </button>

    )
}
