import books from "./data/data.js";

const resolvers = {
    Query: {
      books: () => books,
    },

    Mutation: {
      addBook: (parent, args) => {
        books.push(args);
        return args
      }
    },
  };

export default resolvers;