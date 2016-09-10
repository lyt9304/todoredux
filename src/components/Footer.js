import React, { Component, PropTypes } from 'react'

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<span className='todo-count'>2 items left</span>
				<ul className='filters'>
					<li>
						<a className='selected'>All</a>
						<a>Active</a>
						<a>Completed</a>
					</li>
				</ul>
				<button className='clear-completed'></button>
			</footer>
		)
	}
}

export default Footer



