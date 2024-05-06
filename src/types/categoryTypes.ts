interface categoryAllType {
    count: number,
    data: categoryType[]
}
interface categoryType {
    name: string,
    slug: string
}

export type { categoryAllType, categoryType }