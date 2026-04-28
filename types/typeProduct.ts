export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
    quantity: number;
}

export interface CartItem extends Product {
    quantity: number;
}