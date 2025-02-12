import prisma from '../libs/prisma.js';

const authorService = {
    getAllAuthors: async() => {
        const authors = await prisma.author.findMany({ include: { books: true }});
        return authors;
    },
    getDetailAuthor: async(id) => {
        const author = await prisma.author.findUnique({ 
            where: { id },
            include: { books: true }
        });
        return author;
    },
    createAuthor: async(name, age) => {
        const author = await prisma.author.create({
            data: {
                name,
                age
            }
        });
        return author;
    },
    updateAuthor: async(id, name, age) => {
        const existAuthor = await prisma.author.findUnique({ where: { id }});
        if(!existAuthor) throw new Error('Author not found!');
        return await prisma.author.update({ 
            where: { id },
            data: {
                name: name ?? existAuthor.name,
                age: age ?? existAuthor.age
            }
        });
    },
    deleteAuthor: async(id) => {
        const existAuthor = await prisma.author.findUnique({ where: { id }});
        if(!existAuthor) throw new Error('Author not found!');
        await prisma.author.update({ 
            where: { id },
            data: { deleted: true }
        });
        return {
            success: "OK",
            message: "Deleted is successfully!"
        }
    },
    
}

export default authorService;
