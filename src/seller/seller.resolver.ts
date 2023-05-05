import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateSellerInput } from 'src/types/graphql';
import { SellerService } from './seller.service';

@Resolver('Seller')
export class SellerResolver {
  constructor(private readonly sellerService: SellerService) {}

  @Mutation('createSeller')
  create(@Args('createSellerInput') createSellerInput: CreateSellerInput) {
    return this.sellerService.create(createSellerInput);
  }

  @Query('seller')
  findOne(@Args('id') id: number) {
    return this.sellerService.findOne(id);
  }

  @Mutation('removeSeller')
  remove(@Args('id') id: number) {
    return this.sellerService.remove(id);
  }
}
