import books from "./data/data.js";

const resolvers = {
    Query: {
      books: () => books,
    },

    Mutation: {
      addBook: (parent, args) => {
        books.push(args);
        return args
      },
      deleteBook: (parent, args) => {
        let index;
        for (let i = 0; i < books.length; i++) {
          index = books[i].title.indexOf(args.title);
      
          if (-1 != index) {
            break;
          }
        }
        if (index > -1) {
          books.splice(index, 1);
        }
        return args
      }

    },
  };

export default resolvers;