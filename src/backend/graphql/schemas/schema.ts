import { GraphQLObjectType,GraphQLSchema,GraphQLString } from 'graphql'

export const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: `test`,
		fields: {
			test: {
				type: GraphQLString
			}
		}
	})
})
