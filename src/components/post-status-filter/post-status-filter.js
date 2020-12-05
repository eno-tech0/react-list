import React from 'react';

export default class PostStatusFilter extends React.Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{name: 'all', label: 'Все'},
			{name: 'like', label: 'Понравилось'},
			{name: 'important', label: 'Важное'}
		]
	}

	render() {
		const buttons = this.buttons.map(({name, label}) => {

			const active = this.props.filter === name;
			const activeClass = active ? 'btn btn-info' : 'btn btn-outline-secondary';

			return (
				<button key={name} type="button" className={activeClass} onClick={() => this.props.onFilterPosts(name)}>{label}</button>
			)
		})
		return (
			<div className="btn-group">
				{buttons}
			</div>
		)
	}

}