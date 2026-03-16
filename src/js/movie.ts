import Product from "./product"

export default class Movie implements Product {
    readonly id: number;
    readonly title: string;
    readonly year: number;
    readonly country: string;
    readonly slogan: string;
    readonly genre: string;
    readonly time: number | string;
    readonly price: number;
    readonly originalTitle?: string | undefined;
    readonly discount?: number | undefined;

    constructor(id: number, title: string, year: number, country: string, slogan: string, genre: string, time: number | string, price: number, originalTitle?: string | undefined, discount?: number | undefined) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
        this.price = price;
        this.originalTitle = originalTitle;
        this.discount = discount;
    }
}