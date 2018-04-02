const express = require('express')
const app = express()
const graphql = require('graphql')
const GraphHTTP = require('express-graphql')

const Schema = require('./schema.js')

app.use('/', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}))

app.listen(1111, () => {
    console.log('index.js::localhost:1111')
})