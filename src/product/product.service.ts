import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductInput, UpdateProductInput } from 'src/types/graphql';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  create({ name, price, quantity }: CreateProductInput) {
    return this.prisma.product.create({
      data: { name, price, quantity}
    });
  }
  findAll(query: string) {
    return this.prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });
    
  }
  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      select:{ name: true, id: true },
    });
  }
    

  update(id: number,{ name, price, quantity}: UpdateProductInput) {
    return this.prisma.product.update({
    where: { id },
    data: { 
        name, 
        price, 
        quantity,
      },
    });
  }
  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
