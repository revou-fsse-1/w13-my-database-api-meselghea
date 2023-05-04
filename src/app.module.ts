import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: (config: ConfigService) => {
        return {
          cors: {
            origin:config.get('CLIENT_URL'),
          },
          autoSchemaFile: join(
            process.cwd(),
            config.get<string>('SCHEMA_PATH'),
          ),
          sortSchema: true,
          playground: true,
        }
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
