import bookService from '../../services/book-service.js';

const bookResolvers = {
    Query: {
        getAllBooks: async() => await bookService.getAllBook(),
        getDetailBook: async(_, { id }) => await bookService.getDetailBook(id),
    },
    Mutation: {
        createBook: async(_, { genre, title, authorId }) => await bookService.createBook(genre, title, authorId)
    }
}

export default bookResolvers;
