export class Food {
    
    id: number;
    name: string;
    price: number;
    category: string;
    photo: string;

    constructor(id: number, name: string, price: number, category: string, photo: string = "") {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.photo = photo;
    }
}