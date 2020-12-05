import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';

const PostList = ({posts, onDelete, onLike, onImportant}) => {

	const elements = posts.map((item) => {
		const {id, ...itemProps} = item;
		return (
			<PostListItem 
			key={id}
			label={itemProps.label} 
			important={itemProps.important}
			liked={itemProps.liked}
			onDelete={() => onDelete(id)}
			onImportant={() => onImportant(id)}
			onLike={() => onLike(id)}/>
			
		)
	});

	return (
		<ListGroup className="app-list">
			{elements}
		</ListGroup>
	)
}

export default PostList;