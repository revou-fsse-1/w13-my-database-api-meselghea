
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProductInput {
    name: string;
    price: number;
    quantity: number;
    sellerId?: Nullable<number>;
}

export class UpdateProductInput {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export class CreateSellerInput {
    name: string;
}

export class UpdateSellerInput {
    id: number;
}

export class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    sellerId?: Nullable<number>;
}

export abstract class IQuery {
    abstract products(query: string): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract seller(id: number): Nullable<Seller> | Promise<Nullable<Seller>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createSeller(createSellerInput: CreateSellerInput): Seller | Promise<Seller>;

    abstract removeSeller(id: number): Nullable<Seller> | Promise<Nullable<Seller>>;
}

export class Seller {
    id: number;
    name: string;
    products: Product[];
}

type Nullable<T> = T | null;
