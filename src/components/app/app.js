import React from 'react';
import nextId from 'react-id-generator';
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';

import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{label: 'Text1', important: true, liked: false, id: nextId()},
				{label: 'Text2', important: false, liked: false, id: nextId()},
				{label: 'Text3', important: false, liked: false,  id: nextId()}
			],
			term: '',
			filter: 'all'
		}
		this.minId = 4;
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.toggleLikedItem = this.toggleLikedItem.bind(this);
		this.toggleImportantItem = this.toggleImportantItem.bind(this);
		this.togglePropItem = this.togglePropItem.bind(this);
		this.onSearchPosts = this.onSearchPosts.bind(this);
		this.onFilterPosts = this.onFilterPosts.bind(this);
	}

	deleteItem(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			return {
				data: [...before, ...after]
			}
		})
	}

	addItem(label, important = false, liked = false, id = nextId()) {
		const item = {label, important, liked, id};
		this.setState(({data}) => {
			const copyData = [...data, item];
			return {
				data: copyData
			}
		})
		console.log(this.id);
	}

	toggleImportantItem(id) {
		this.togglePropItem(id, 'important')
	}

	toggleLikedItem(id) {
		this.togglePropItem(id, 'liked')
	}

	searchPost(items, term) {
		if (term.length <= 0) {
			return items
		}
		return items.filter(item => {
			return item.label.indexOf(term) > -1
		})
	}

	onSearchPosts(term) {
		this.setState({term})
	}

	filterPosts(items, filter) {
		if (filter === 'like') {
			return items.filter(item => item.liked)
		} else if (filter === 'important') {
			return items.filter(item => item.important)
		} else {
			return items
		}
	}
	onFilterPosts(filter) {
		this.setState({filter})
	}

	togglePropItem(id, prop) {
		
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			
			const oldItem = data[index];
			const newItem = {...oldItem};
			newItem[prop] = !oldItem[prop];

			const before = data.slice(0, index);
			const after = data.slice(index + 1);

			return {
				data: [...before, newItem, ...after]
			}
		})
	}

	render() {
		const {data, term, filter} = this.state;

		const liked = data.filter(item => item.liked).length;
		const posts = data.length;

		const serachedPosts = this.filterPosts((this.searchPost(data, term)), filter);
		return (
			<div className="app">
				<AppHeader 
					liked={liked} 
					posts={posts}/>
				<div className="search-panel d-flex">
					<SearchPanel
						onSearchPosts={this.onSearchPosts}/>
					<PostStatusFilter
						filter={filter}
						onFilterPosts={this.onFilterPosts}/>
				</div>
				<PostList
					posts={serachedPosts} 
					onDelete={this.deleteItem} 
					onImportant={this.toggleImportantItem} 
					onLike={this.toggleLikedItem}/>
				<PostAddForm onAdd={this.addItem}/>
			</div>
		)
	}
}
