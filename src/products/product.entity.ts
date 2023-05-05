import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product {
    
    @Field( type => Int)
    id: number;

    @Field()
    name: string;
    
    @Field(type => Int)
    price: number;

    @Field(type => Int)
    stock: number;
}