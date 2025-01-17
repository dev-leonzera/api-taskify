import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    userId: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    clients: [Client!]!
    users: [User!]!
  }

  type Mutation {
    createClient(name: String!, email: String!, userId: Int!): Client!
    createUser(name: String!, email: String!, password: String!): User!
  }
`);
