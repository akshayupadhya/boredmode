import React,{ Component  } from 'react'
interface Props {
	data: string
}
export default class AppComponent extends Component<Props,{}> {
	constructor (props: Props) {
		super(props)
		console.log(props,'props')
	}
	public render () {
		return (
			<h1 className='hello'>
				hello ,{this.props.data} from react server
			</h1>
		)
	}
}
