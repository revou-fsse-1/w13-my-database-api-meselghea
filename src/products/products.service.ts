import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    async findAll(): Promise<Product[]> {
        const product = new Product();
        product.id = 1;
        product.name = "lipcream";
        product.price = 150000;
        product.stock = 30;
        return [product];
    }
}