import React from 'react';

// importing styles like this ensures that
// styles dont clash
// prefixes them with a unique key
// import * as styles from './index.module.css';

const CardComponent = (props) => {
	// Try to deconstruct your props
	// It makes it easier to add default values
	// because we wouldn't need to check if the
	// value doesn't exist
    const { mainArray } = props;
	return (
		<p >
			The time currently is{' '}
			<span>{mainArray.pop().title}</span>
		</p>
	);
};

// This view is being exported so that the data layer
// can inject props to this view component
export default CardComponent;
