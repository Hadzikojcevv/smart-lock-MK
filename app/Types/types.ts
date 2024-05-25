

export type SingleDescItem = {
    title: string,
    titleEng: string,
    icon: string
}

export type LockType = {
    id: number,
    title: string,
    image:string,
    cardImage: string,
    price: number,
    tag: string,
    desc: SingleDescItem[],
}