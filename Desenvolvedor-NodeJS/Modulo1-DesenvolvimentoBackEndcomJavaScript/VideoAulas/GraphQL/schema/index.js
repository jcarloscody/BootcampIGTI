import { GraphQLSchema, GraphQLObjectType } from "graphql";
import AccountQueries from "./queries/account.queries.js";

const schemaGraph = new GraphQLSchema({
    type: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            ...AccountQueries
        }
    }),
    mutation: null
})

export default schemaGraph