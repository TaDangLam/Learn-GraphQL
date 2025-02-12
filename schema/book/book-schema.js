import gql from "./../../libs/graphql-tag.js";

const bookSchema = gql`
  type Book {
    id: String
    title: String
    genre: String
    authorId: String
    author: Author
    createdAt: String
    updatedAt: String
  }

  type DeleteResponse {
    success: String!
    message: String!
  }

  # Root Type
  extend type Query {
    getAllBooks: [Book]
    getDetailBook(id: String!): Book
  }

  extend type Mutation {
    createBook(genre: String!, authorId: String!, title: String!): Book
    updateBook(id: String!, title: String, authorId: String, genre: String): Book
    deleteBook(id: String!): DeleteResponse
  }
`

export default bookSchema;
