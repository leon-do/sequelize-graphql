const express = require('express')
const app = express()
const graphql = require('graphql')
const GraphHTTP = require('express-graphql')

const Schema = require('./schema.js')

app.get('/', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}))

app.listen(8080, () => {
    console.log('localhost:8080')
})