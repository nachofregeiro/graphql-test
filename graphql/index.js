const { makeExecutableSchema } = require('graphql-tools')
const movies = require('../data')

const typeDefs = `
    type Movie {
        id: Int!
        title: String!
    }

    type Query {
        movies: [Movie]
        movie(id: Int!): Movie
    }

    type Mutation {
        createMovie(title: String!): Boolean
    }
`;

const resolvers = {
    Query: {
        movies(_, args) {
            return movies;
        },
        movie(_, { id }){
            return movies.find(m => m.id === id)
        }
    },
    Mutation: {
        createMovie(_, { title }) {
            let newMovie = {
                id: movies.length,
                title
            }
            return movies.push(newMovie)
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

module.exports = schema