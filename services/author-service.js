import prisma from '../libs/prisma.js';

const authorService = {
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
