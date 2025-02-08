import prisma from '../libs/prisma.js';

const bookService = {
    getAllBook: async() => {
        const books = await prisma.book.findMany();
        return books;
    },
    getDetailBook: async(id) => {
        const book = await prisma.book.findUnique({ where: { id }});
        return book;
    },
    createBook: async(name, genre, authorId) => {
        const newBook = await prisma.book.create({ data: {
            name,
            genre,
            authorId
        }});
        return {
            message: 'Create a new book is ok!',
            data: newBook
        }
    }
}

export default bookService;
