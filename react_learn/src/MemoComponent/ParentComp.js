import React, { Component, Pure } from 'react'

import MemoComp from './Memo'

class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Dhanush'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Dhanush'
			})
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
				{/* <RegComp name={this.state.name} />
				<PureComp name={this.state.name} /> */}
				<MemoComp name={this.state.name} />
			</div>
		)
	}
}

export default ParentComp