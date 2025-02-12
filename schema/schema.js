import { mergeTypeDefs } from "@graphql-tools/merge"; 

import gql from "./../libs/graphql-tag.js"
import bookSchema from "./book/book-schema.js";
import authorSchema from "./author/author-schema.js";

const typeDefs = mergeTypeDefs([
  gql`
    type Query
    type Mutation
  `,
  bookSchema,
  authorSchema
]);

export default typeDefs;
