import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { query } from 'express';
import { stringify } from 'querystring';
import { CreateProductInput, UpdateProductInput } from 'src/types/graphql';
import { ProductService } from './product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation('createProduct')
  create(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput);
  }
  
  @Query('products')
  findAll(@Args('query') query: string) {
    console.log('findAll')
    return this.productService.findAll(query);
  }

  @Query('product')
  findOne(@Args('id') id: number) {
    return this.productService.findOne(id);
  }

  @Mutation('updateProduct')
  update(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: number) {
    return this.productService.remove(id);
  }
}
