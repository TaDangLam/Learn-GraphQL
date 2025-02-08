import bookService from "../services/book-service.js";


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
        createBook: async(_, { name, genre, authorId }) => await bookService.createBook(name, genre, authorId )
    }
}

export default resolvers;
