const db = require('./db')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')




// create a person schema for graphql
const Person = new GraphQLObjectType({
    name: 'Person',
    fields () {
        // match columns from db
        return {
            id: {
                type: GraphQLInt,
                resolve(person) {
                    return person.id
                }
            },
            firstName: {
                type: GraphQLString,
                resolve(person) {
                    return person.firstName
                }
            },
            lastName: {
                type: GraphQLString,
                resolve(person) {
                    return person.lastName
                }
            }
        }
    }
})

// combine person into a query
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            people: {
                type: new GraphQLList(Person),
                args: {
                    id: {
                        type: GraphQLInt
                    },
                    firstName: {
                        type: GraphQLString
                    },
                    lastName: {
                        type: GraphQLString
                    }
                },
                resolve (root, args) {
                    return db.models.person.findAll({where: args})
                }
            },
        }
    }
})

const Schema = new GraphQLSchema({
    query: Query
})


module.exports = Schema