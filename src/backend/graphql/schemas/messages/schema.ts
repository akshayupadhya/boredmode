import {
	GraphQLEnumType,
	GraphQLID,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} from 'graphql'
import { messageResolver, messages} from './resolver'
const messageTypeEnum = new GraphQLEnumType({
	name: `messageTypeEnum`,
	values: {
		NEW_MESSAGE: {
			value: 0
		},
		REPLY: {
			value: 1
		}
	}
})

const messageType = new GraphQLObjectType({
	name: `messageType`,
	fields: () => ({
		messageType: {
			type: new GraphQLNonNull(messageTypeEnum)
		},
		replyingTo : {
			type:  GraphQLID
		}
	})
})
export const message = new GraphQLObjectType({
	name: `message`,
	fields: () => ({
		text: {
			type: new GraphQLNonNull(GraphQLString)
		},
		from: {
			type: new GraphQLNonNull(GraphQLID)
		},
		to: {
			type: new GraphQLNonNull(GraphQLID)
		},
		ID: {
			type: new GraphQLNonNull(GraphQLID)
		},
		messageType: {
			type: messageType
		}
	})
})
export const getMessage = new GraphQLObjectType({
	name: `getMessage`,
	fields : {
		message:{
			args: {
				ID:{
					type:GraphQLID
				}
			},
			type : message,
			resolve: messageResolver
		},
		getMessages:{
			type : GraphQLList(message),
			resolve:() => messages
		}
	}
}) 