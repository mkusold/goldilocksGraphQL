// FROM: https://www.apollographql.com/docs/apollo-server/v1/example/
// with updates from : https://dev.to/gloriamaris/apollo-server-express-10-to-20-fix-graphiqlexpress-and-graphiqlexpress-is-not-a-function-in-a-tutorial-by-xoor-41jn
// and https://www.apollographql.com/docs/apollo-server/getting-started/
const { ApolloServer } = require("apollo-server");
const { schema } = require("./api");

const server = new ApolloServer({
  ...schema,
  debug: false,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.cursorShape.theme": "light"
    }
  }
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
