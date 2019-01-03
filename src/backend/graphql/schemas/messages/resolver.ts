export const messages = [
	{
		text: `hello`,
		from: 1,
		to: 2,
		ID: 39827,
		messageType: {
			messageType: 0,
		},
	},
	{
		text: `hello2`,
		from: 2,
		to: 1,
		ID: 478377,
		messageType: {
			messageType: 1,
			replyingTo: 1,
		},
	},
]
export function messageResolver(parent, args) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(messages.filter(message => message.ID == args.ID)[0] || {})
		}, 2000)
	})
}
