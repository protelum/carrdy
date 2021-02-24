import React from 'react';
import EachCardView from './index.view';

const EachCardData = (props) => {
	// handle all Data manipulation here
	// This is the Controller Section

	const {title, content} = props;

  // Pass data as props to the View Component
	return <EachCardView title={title} content = {content}/>;
};

export default EachCardData;
