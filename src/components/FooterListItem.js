import React from 'react'

function FooterListItem({ children: label }) {
	const attributes = { href: '/', className: 'text-[11px] hover:underline py-2', }
	return React.createElement(
		'li',
		null,
		React.createElement('a', attributes, label)
	)
}

export default FooterListItem