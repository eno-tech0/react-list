import React from 'react';

const AppHeader = ({liked, posts}) => {
	return (
		<div className="app-header d-flex">
			<h1>Ksenia Fomenko</h1>
			<h2>Всего записей {posts} из них понравилось {liked}</h2>
		</div>
	)
}

export default AppHeader;