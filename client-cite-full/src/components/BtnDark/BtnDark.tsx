import classes from './btnDark.module.css'

type Props = {
    title: string,
    disabled?: boolean | undefined,
    type?: 'button' | 'submit' | 'reset'
}

export default function BtnDark({ title, disabled, type = 'button' }: Props) {
    return (
        <button
            className={classes.btnDark}
            disabled={disabled}
            type={type}
        >
            {title}
        </button>
    )
}
