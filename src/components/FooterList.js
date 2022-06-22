import React from 'react'
import FooterListItem from './FooterListItem'

function FooterList() {
	const children = ['Cookies', 'Privacy'].map((label) => {
		return React.createElement(FooterListItem, { key: label, }, label)
	});
	return React.createElement('ul', null, children);
}

export default FooterList