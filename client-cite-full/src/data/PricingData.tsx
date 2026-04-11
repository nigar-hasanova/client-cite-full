import BtnDark from "../components/BtnDark/BtnDark";
import type { PricingDataType } from '../types/pricingDataType'

export const pricingData: PricingDataType[] = [
    {
        price: "$299",
        priceType: "Per Design",
        title: "Landing Page",
        desc: "When you’re ready to go beyond prototyping in Figma",

        bgColor: "#F4F6FC",
        textColor: "#282938",
        button: <BtnDark title="Get started" />,

        features: [
            { text: "All limited links", active: true },
            { text: "Own analytics platform", active: true },
            { text: "Chat support", active: true },
            { text: "Optimize hashtags", active: false },
            { text: "Unlimited users", active: false }
        ]
    },

    {
        price: "$399",
        priceType: "Multi Design",
        title: "Website Page",
        desc: "When you’re ready to go beyond prototyping in Figma",

        bgColor: "#1C1E53",
        textColor: "#fff",
        button: <BtnDark title="Get started" />,

        features: [
            { text: "All limited links", active: true },
            { text: "Own analytics platform", active: true },
            { text: "Chat support", active: true },
            { text: "Optimize hashtags", active: true },
            { text: "Unlimited users", active: true }
        ]
    },

    {
        price: "$499+",
        priceType: "Per Design",
        title: "Complex Project",
        desc: "When you’re ready to go beyond prototyping in Figma",

        bgColor: "#F4F6FC",
        textColor: "#282938",
        button: <BtnDark title="Get started" />,

        features: [
            { text: "All limited links", active: true },
            { text: "Own analytics platform", active: true },
            { text: "Chat support", active: true },
            { text: "Optimize hashtags", active: true },
            { text: "Unlimited users", active: true }
        ]
    }
];