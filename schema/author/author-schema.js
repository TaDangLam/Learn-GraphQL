import gql from "./../../libs/graphql-tag.js";

const authorSchema = gql`
  type Author {
    id: String!
    name: String
    age: Int
    deleted: Boolean
    books: [Book]
  }

  type DeleteResponse {
    success: String!
    message: String!
  }

  # Root Type
  extend type Query {
    getAllAuthors: [Author]
    getDetailAuthor(id: String!): Author
  }

  extend type Mutation {
    createAuthor(name: String, age: Int): Author
    updateAuthor(id: String!, name: String, age: String): Author
    deleteAuthor(id: String!): DeleteResponse
  }
`

export default authorSchema;
