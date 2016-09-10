import React, { Component, PropTypes } from 'react'
import Footer from './Footer'

class MainSection extends Component {
	render() {
		// const { counter, actions } = this.props
		return (
			<section className='main'>
				<input className='toggle-all' type='checkbox' />
				<ul className='todo-list'>
					<li className='todo'>
						<div className='view'>
							<input className='toggle' type='checkbox' />
							<label>example todo</label>
							<button className='destroy'></button>
							<input className='edit' type='checkbox' />
						</div>
					</li>
				</ul>
				<Footer />
			</section>

		)
	}
}

export default MainSection
