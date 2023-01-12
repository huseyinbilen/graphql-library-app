import books from "./data/data.js";

const resolvers = {
    Query: {
      books: () => books,
    },
  };

export default resolvers;