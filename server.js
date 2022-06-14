const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./graphql')

const app = express();

const server = new ApolloServer({
    schema
});


server.start().then(() => {
    server.applyMiddleware({ app });

    app.listen(4000, (args) => {
        console.log('server running on  http://localhost:4000/graphql')
    })
})

