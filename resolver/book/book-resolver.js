import bookService from '../../services/book-service.js';

const bookResolvers = {
    Query: {
        getAllBooks: async() => await bookService.getAllBook(),
        getDetailBook: async(_, { id }) => await bookService.getDetailBook(id),
    },
    Mutation: {
        createBook: async(_, { genre, title, authorId }) => await bookService.createBook(genre, title, authorId),
        updateBook: async(_, { id, genre, title, authorId }) => await bookService.updateBook(id, genre, title, authorId),
        deleteBook: async(_, { id }) => await bookService.deleteBook(id)
    }
}

export default bookResolvers;
