import React from 'react'
import { render } from 'react-dom'
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

render(<ArticleList articles={articles}/>, document.getElementById('container'));
