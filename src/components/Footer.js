import React from 'react'
import FooterList from './FooterList'

function Footer() {
  const attributes = {
    className: "mt-auto mb-8 ml-6",
  };
  const child = React.createElement(FooterList, null);
  return React.createElement('footer', attributes, child);
}

export default Footer;