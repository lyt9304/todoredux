import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

class App extends Component {
	render() {
		const { todos, actions } = this.props
		return (
			<div>
				<Header addTodo = {actions.addTodo} /> 
				<MainSection />
			</div>
		)
	}
}

App.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispacth) {
	return {
		actions: bindActionCreators(TodoActions, dispacth)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)