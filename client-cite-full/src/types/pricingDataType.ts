export interface PricingDataType {
    price: string,
    priceType: string,
    title: string,
    desc: string,

    bgColor: string,
    textColor: string,
    button: React.ReactNode,

    features: {
        text: string,
        active: boolean
    }[]
}