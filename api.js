const { bears, dinnerOptions } = require("./data");
const { gql, UserInputError } = require("apollo-server-express");
// The GraphQL schema in string form
const typeDefs = gql`
  type Query {
    porridge: [Porridge]
  }
  type Mutation {
    victim(name: String): ID
  }

  # Defines the qualities of a Bear living in the modern era
  type Bear {
    name: String
    age(yearType: String = "HUMAN"): Int
    bearSocialSecurity: ID!
    isVictim: Boolean
    GPA: Float
  }
  # Defines the bear-porridge relationship as well as porridge quality status
  type Porridge {
    owner: Bear
    temperature: String
  }
`;

// The resolvers
const resolvers = {
  Query: {
    porridge: () => dinnerOptions
  },
  Bear: {
    age: (root, { yearType }) => {
      // 2 bear  years per human year
      return yearType === "HUMAN" ? root.age : parseInt(root.age / 2);
    }
  },
  Mutation: {
    victim: (_, { name }) => {
      const bearIdx = bears.findIndex(
        bear => bear.name.toLowerCase() === name.toLowerCase()
      );
      if (bearIdx >= 0) {
        bears[bearIdx].isVictim = true;
        return bears[bearIdx].bearSocialSecurity;
      }
      return new UserInputError("Victim bear can not be found", {
        input: name
      });
    }
  }
};

// Put together a schema
const schema = {
  typeDefs,
  resolvers
};

module.exports = {
  schema
};
