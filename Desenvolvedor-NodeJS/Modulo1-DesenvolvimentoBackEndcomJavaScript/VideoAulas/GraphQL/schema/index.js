import { GraphQLSchema, GraphQLObjectType } from "graphql";
import AccountQueries from "./queries/account.queries.js";
import accountMutation from "./mutations/account.mutation.js";

const schemaGraph = new GraphQLSchema({
    type: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            ...AccountQueries
        }
    }),
    mutation: new GraphQLObjectType({
        name: "RootMutation",
        fields: {
            ...accountMutation
        }
    })
})

export default schemaGraph