import bookService from "../services/book-service.js";
import authorService from "../services/author-service.js"; 

const resolvers = {
    Query: {
        getAllBooks: async() => await bookService.getAllBook(),
        getDetailBook: async(_, { id }) => await bookService.getDetailBook(id),
        authors: () => [
            {
                id: '1',
                name: "Bac Ki",
                age: 56
            },
            {
                id: '2',
                name: "Nam Ki",
                age: 66
            }
        ]
    },
    Mutation: {
        createAuthor: async(_, { name, age }) => await authorService.createAuthor(name, age),
        createBook: async(_, { genre, title, authorId }) => await bookService.createBook(genre, title, authorId)
    }
}

export default resolvers;
