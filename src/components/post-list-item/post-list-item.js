import React from 'react';

export default class PostListItem extends React.Component {
	render() {
		const {label, important, liked, onDelete, onLike, onImportant} = this.props;
		let classLists = 'list-group-item app-list-item d-flex justify-content-between';
		if (important) {
			classLists += ' important';
		}
		if (liked) {
			classLists += ' like';
		}
		return (
			<div className={classLists}>
				<span className="app-list-item-label" onClick={onLike}>
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button type="button" className="btn-star btn-sm" onClick={onImportant}>
						<i className="fa fa-star"></i>
					</button>
					<button type="button" className="btn-trash btn-sm" onClick={onDelete}>
						<i className="fa fa-trash-o"></i>
					</button>
					<i className="fa fa-heart"></i>
				</div>
			</div>
		)
	}
}
