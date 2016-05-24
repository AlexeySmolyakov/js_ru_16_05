import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList.js'

const articles = [
	{
		id: 1,
		title: 'Article title',
		text: 'Lorem ipsum dolor sit amet'
	},
	{
		id: 2,
		title: 'Second article title',
		text: 'Lorem ipsum dolor sit amet'
	},
	{
		id: 3,
		title: 'Third article title',
		text: 'Lorem ipsum dolor sit amet'
	},
	{
		id: 4,
		title: 'Another article title',
		text: 'Lorem ipsum dolor sit amet'
	},
	{
		id: 5,
		title: 'More info title',
		text: 'Lorem ipsum dolor sit amet'
	}
];

const comments = [
	{
		id: 773,
		user_name: 'John',
		text: 'Nice code style.'
	},
	{
		id: 774,
		user_name: 'Hodor',
		text: 'Try this out.'
	},
	{
		id: 775,
		user_name: 'Jammy',
		text: 'Show once again.'
	},
	{
		id: 776,
		user_name: 'Bran',
		text: 'Never stop trying.'
	},
	{
		id: 777,
		user_name: 'Tirion',
		text: 'Money is always near.'
	}
];

render(
	<ArticleList articles={articles} comments={comments}/>,
	document.getElementById('container')
);
