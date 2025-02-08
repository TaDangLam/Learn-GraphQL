import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Book {
    id: String
    title: String
    genre: String
    authorId: String
    author: Author
    createdAt: String
    updatedAt: String
  }

  type Author {
    id: String!
    name: String
    age: Int
    books: [Book]
  }

  # Root Type
  type Query {
    getAllBooks: [Book]
    getDetailBook(id: String!): Book
    authors: [Author]
    author(id: String!): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(genre: String!, authorId: String!, title: String!): Book
  }
`

export default typeDefs;
