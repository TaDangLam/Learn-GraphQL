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
    createBook: async(genre, title, authorId) => {
        return await prisma.book.create({ 
            data: {
                genre,
                title,
                authorId
            }});
    }

}

export default bookService;
