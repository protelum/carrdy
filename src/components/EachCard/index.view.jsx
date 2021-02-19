import React from 'react';

// importing styles like this ensures that
// styles dont clash
// prefixes them with a unique key
import * as styles from './index.module.css';

const EachCardView = (props) => {
	// Try to deconstruct your props
	// It makes it easier to add default values
	// because we wouldn't need to check if the
	// value doesn't exist
	const { title, content} = props;

	return (
		<p>
			The title currently is{' '}
			<span>{title}</span> <br/>
			The content currently is{' '}
			<span>{content}</span>
		</p>
	);
};

// This view is being exported so that the data layer
// can inject props to this view component
export default EachCardView;
