import prisma from '../libs/prisma.js';

const bookService = {
    getAllBook: async() => {
        const books = await prisma.book.findMany({ include: { author: true }});
        return books;
    },
    getDetailBook: async(id) => {
        const book = await prisma.book.findUnique({ 
            where: { id },
            include: { author: true }
        });
        return book;
    },
    createBook: async(genre, title, authorId) => {
        return await prisma.book.create({ 
            data: {
                genre,
                title,
                authorId
            }});
    },
    updateBook: async(id, genre, title, authorId) => {
        const existBook = await prisma.book.findUnique({ where: { id }});
        if(!existBook) throw new Error('Book not found');
        return await prisma.book.update({ 
            where: { id },
            data: {
                genre: genre ?? existBook.genre,
                title: title ?? existBook.title,
                authorId: authorId ?? existBook.authorId
            }
        })
    },
    deleteBook: async(id) => {
        const existBook = await prisma.book.findUnique({ where: { id }});
        if(!existBook) throw new Error('Book not found');
        await prisma.book.delete({ where: { id }});
        return {
            success: "OK",
            message: "Deleted is successfully!"
        }
    }
}

export default bookService;
