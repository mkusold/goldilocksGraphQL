const { makeExecutableSchema } = require('graphql-tools');
const { dinnerOptions } = require('./data')

// The GraphQL schema in string form
const typeDefs = `
  type Query { porridge: [Porridge] }

  type Bear { name: String, age: Int }
  type Porridge { owner: Bear, temperature: String }
`;

// The resolvers
const resolvers = {
  Query: { 
      porridge: () => dinnerOptions
     },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

modules.export = {
    schema
}