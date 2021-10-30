import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } from "graphql";

const Account = new GraphQLObjectType({
    name: "Account",
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        nome: {
            type: GraphQLString
        },
        balance: {
            type: GraphQLFloat
        }
    })
})



export default Account