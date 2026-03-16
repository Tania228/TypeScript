import Product from "./product";

export default class Card {
    private items: Product[] = []; 

    add(item: Product): void {
        this.items.push(item);
    }

    getAll(): Product[] {
        return [...this.items];
    }

    // Суммарная стоимость без учета скидки
    getSumPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    // Суммарная стоимость с учетом скидки
    getDiscountPrice(discount: number): number {
        const total = this.getSumPrice();
        return total - (total * discount / 100);
    }

   // Удаление добавленного объекта по id
    remoteProduct(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}