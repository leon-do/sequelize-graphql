// connects graphql to db

const db = require('./db')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
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
                args: {
                    id: {
                        type: GraphQLInt
                    },
                    firstName: {
                        type: GraphQLString
                    },
                    lastName: {
                        type: GraphQLString
                    },
                },
                type: new GraphQLList(Person),
                   resolve (obj, args) {
                    console.log('schema.js::People args:', args)
                    return db.models.person.findAll({where: args})
                }
            },
            album: {
                args: {
                    id: {
                        type: GraphQLInt
                    },
                    song: {
                        type: GraphQLString
                    },
                    artist: {
                        type: GraphQLString
                    }
                },
                type: new GraphQLList(Album),
                resolve (obj, args) {
                    console.log('schema.js::Album args:', args)
                    return db.models.album.findAll({where: args})
                }
            }
        }
    }
})


// root query
const Schema = new GraphQLSchema({
    query: Query
})


module.exports = Schema