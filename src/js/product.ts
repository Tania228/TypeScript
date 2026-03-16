export default interface Product {
    id: number,
    title: string,
    originalTitle?: string | undefined,
    year: number,
    country: string,
    slogan: string,
    genre: string,
    time: number | string,
    price: number,
    discount?: number | undefined,
}