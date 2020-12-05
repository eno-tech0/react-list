import React from 'react';

export default class SearchPanel extends React.Component {

	onSearchPosts = (e) => {
		const term = e.target.value;
		this.props.onSearchPosts(term);
	}
	
	render() {
		return (
			<input
					className="form-control search-input"
					type="text"
					placeholder="Поиск по записям"
					onChange={this.onSearchPosts}/>
		)
	}

}
