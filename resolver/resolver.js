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
    }
    // Muitation: {

    // }
}

export default resolvers;
