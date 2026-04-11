import RightArr from '../../assets/icon-svg/rightArr.svg?react'
import classes from "./btnPrimary.module.css";

type Props = {
    title?: string,
    titleColor?: string,
    rightArrColor?: string,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function BtnPrimary({
    title,
    titleColor,
    rightArrColor,
    className,
    onClick
}: Props) {
    return (
        <button onClick={onClick} className={`${classes.btnPrimary} ${className || ""}`}>
            <span style={{ color: titleColor }}>{title}</span>

            <RightArr
                style={{ color: rightArrColor }}
                width={16}
                height={16}
            />
        </button>
    );
}
