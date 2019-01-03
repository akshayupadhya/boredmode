import { GraphQLObjectType,GraphQLSchema,GraphQLString } from 'graphql'
import {getMessage} from './messages/schema'

export const schema = new GraphQLSchema({
	query: getMessage
})
