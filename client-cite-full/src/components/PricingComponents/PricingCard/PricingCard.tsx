import classes from "./pricingCard.module.css";
import listGreen from "../../../assets/icon-svg/listGreen.svg";
import listGrey from "../../../assets/icon-svg/listGrey.svg";
import React from "react";

type FeatureType = {
    text: string;
    active: boolean;
};

type Props = {
    price: string;
    priceType: string;
    title: string;
    desc: string;
    features: FeatureType[];
    bgColor: string;
    textColor: string;
    button: React.ReactNode;
};

export default function PricingCard({
    price,
    priceType,
    title,
    desc,
    features,
    bgColor,
    textColor,
    button
}: Props) {
    return (
        <div
            className={classes.pricingCard}
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <div className={classes.price}>
                <h3 style={{ color: textColor }}>{price}</h3>
                <span>{priceType}</span>
            </div>

            <div className={classes.cardText}>
                <h6>{title}</h6>
                <p>{desc}</p>
            </div>

            <ul className={classes.list}>
                {features.map((item, index) => (
                    <li key={index}>
                        <img src={item.active ? listGreen : listGrey} alt="svg" />
                        {item.text}
                    </li>
                ))}
            </ul>

            <div className={classes.btnWrapper}>
                {button}
            </div>
        </div>
    );
}