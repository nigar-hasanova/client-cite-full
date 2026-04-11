export interface PortfolioDataType {
    id: number,
    title: string,
    category: string,
    img: string,
    bg: string,
    info: InfoType,
    about: AboutType,
    process: ProcessType
}

type InfoType = {
    client: string,
    service: string,
    deliverable: string
}

type AboutType = {
    title: string,
    text: string,
    list: string[],
    img: string
}

type ProcessType = {
    title: string,
    text: string,
    list: string[]
}