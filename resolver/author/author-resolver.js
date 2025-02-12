import authorService from '../../services/author-service.js';

const authorResolvers = {
    Query: {
        getAllAuthors: async() => await authorService.getAllAuthors(),
        getDetailAuthor: async(_, { id }) => await authorService.getDetailAuthor(id)
    },
    Mutation: {
        createAuthor: async(_, { name, age }) => await authorService.createAuthor(name, age),
        updateAuthor: async(_, { id, name, age }) => await authorService.updateAuthor(id, name, age),
        deleteAuthor: async(_, { id }) => await authorService.deleteAuthor(id)

    }
}

export default authorResolvers;
