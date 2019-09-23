const { makeExecutableSchema } = require('graphql-tools');
const { bears, dinnerOptions } = require('./data')

// The GraphQL schema in string form
const typeDefs = `
type Query { 
  porridge: [Porridge]
}
type Mutation { 
  victim(name:String): ID
}

type Bear { 
  name: String,
  age(yearType:String="HUMAN"): Int,
  bearSocialSecurity: ID!,
  isVictim: Boolean,
  GPA: Float,
}
type Porridge { 
  owner: Bear,
  temperature: String
}
`;

// The resolvers
const resolvers = {
  Query: { 
    porridge: () => dinnerOptions
  },
  Bear: {
    age: (root, {yearType}) => {
      // 2 bear  years per human year
      return yearType === 'HUMAN' ? root.age : root.age /2
    }
  },
  Mutation: {
    victim: (_, {name}) => {
      const bearIdx = bears.findIndex(bear => 
        bear.name.toLowerCase() === name.toLowerCase()
      );
      if (bearIdx >= 0){
        bears[bearIdx].isVictim = true;
        return bears[bearIdx].bearSocialSecurity;
      } 
    }
  }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = {
    schema
}