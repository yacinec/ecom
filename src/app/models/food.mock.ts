export class Food {
    
    private id: number;
    private name: string;
    private price: number;
    private category: string;
    private photo: string;

    constructor(name: string, price: number, category: string, photo: string = "") {
        this.name = name;
        this.price = price;
        this.category = category;
        this.photo = photo;
    }
}