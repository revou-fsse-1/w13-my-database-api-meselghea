# GraphQL API

## Access the GraphQL with Apollo Sandbox

[mesel13.onrender.com/graphql](https://mesel13.onrender.com/graphql)

## Root Documentation

### Query

|                            |                                         |
| :------------------------- | :-------------------------------------- |
| product(id: Int!): Product | Get product with id that containt query |
| products(…): [Product]!    | Get all products that containt query    |
| seller(id: Int!): Seller   | Get seller by id                        |

### Mutation

|                           |                      |
| :------------------------ | :------------------- |
| createProduct(…):Product! | Create a new product |
| createSeller(…):Seller!   | Create a new seller  |
| removeProduct(…):Product  | remove a product     |
| removeSeller(…):Seller    | remove a seller      |
| updateProduct(…):Product! | update a product     |

## Relational databases

- One-to-many relation between the seller and products
- Foreign key (sellerId) to create a relation between two tables
