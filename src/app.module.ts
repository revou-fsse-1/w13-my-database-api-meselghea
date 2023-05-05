import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma/prisma.service';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/scema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    ProductsModule,
    SellerModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
