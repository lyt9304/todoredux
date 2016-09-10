import React, { Component, PropTypes } from 'react'

class Header extends Component {
	render() {
		return (
			<header>
				<h1>todos</h1>
				<input type='text' className='new-todo' />
			</header>			
		)
	}
}

export default Header
