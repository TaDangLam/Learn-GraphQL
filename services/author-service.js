import prisma from '../libs/prisma.js';

const authorService = {
    getAllAuthors: async() => {
        const authors = await prisma.author.findMany();
        return authors;
    },
    getDetailAuthor: async(id) => {
        const author = await prisma.author.findUnique({ where: { id }});
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

    
}

export default authorService;
