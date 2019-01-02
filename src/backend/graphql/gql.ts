import graphqlHttp from 'express-graphql'
import { schema } from './schemas/schema'

export const messagesController = graphqlHttp({ graphiql: true,schema,rootValue: false })
