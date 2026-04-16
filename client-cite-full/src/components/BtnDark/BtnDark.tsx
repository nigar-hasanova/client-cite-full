import classes from './btnDark.module.css'

type Props = {
    title: string,
    disabled?: boolean | undefined,
    type : string
}

export default function BtnDark({ title, disabled , type}: Props) {
    return (
        <button
            className={classes.btnDark}
            disabled={disabled}
        >
            {title}
        </button>

    )
}
