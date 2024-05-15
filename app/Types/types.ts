

export type SingleDescItem = {
    title: string,
    titleEng: string,
    icon: string
}

export type LockType = {
    id: number,
    title: string,
    image:string,
    price: number,
    desc: SingleDescItem[],
}