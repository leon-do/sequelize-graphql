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
            },
            firstName: {
                type: GraphQLString,
            },
            lastName: {
                type: GraphQLString,
            }
        }
    }
})

const Album = new GraphQLObjectType({
    name: 'Album',
    fields () {
        return {
            id: {
                type: GraphQLInt,             
            },
            artist: {
                type: GraphQLString
            },
            song: {
                type: GraphQLString
            }
        }
    }
})

// combine the object types
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            people: {
                type: new GraphQLList(Person),
                resolve (root, args) {
                    return db.models.person.findAll({where: args})
                }
            },
            album: {
                type: new GraphQLList(Album),
                resolve (root, args) {
                    return db.models.album.findAll({where: args})
                }
            }
        }
    }
})

const Schema = new GraphQLSchema({
    query: Query
})


module.exports = Schema