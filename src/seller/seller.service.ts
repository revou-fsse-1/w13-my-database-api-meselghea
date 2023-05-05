import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSellerInput } from 'src/types/graphql';


@Injectable()
export class SellerService {
    constructor(private prisma: PrismaService) {}

  create( { name } : CreateSellerInput) {
    return this.prisma.seller.create({
      data: { name },
      include: {products: true},
    });
  }

  findOne(id: number) {
    return this.prisma.seller.findUnique({
      where: { id },
      include: {products: true},
    });
  }

  remove(id: number) {
    return this.prisma.seller.delete({
      where: { id },
    });
  }
}