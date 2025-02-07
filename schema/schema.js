import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Book {
    id: String
    name: String
    genre: String
  }

  type Author {
    id: String!
    name: String
    age: Int

  }

  # Root Type
  type Query {
      getAllBooks: [Book]
      getDetailBook(id: String!): Book
      authors: [Author]
      author(id: String!): Author
  }
`

export default typeDefs;
