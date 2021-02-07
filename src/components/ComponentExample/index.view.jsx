import React from 'react';

// importing styles like this ensures that
// styles dont clash
// prefixes them with a unique key
import * as styles from './index.module.css';

const ComponentExampleView = (props) => {
	// Try to deconstruct your props
	// It makes it easier to add default values
	// because we wouldn't need to check if the
	// value doesn't exist
	const { time } = props;

	return (
		<p className={styles['text-container']}>
			The time currently is{' '}
			<span className={styles['time-container']}>{time}</span>
		</p>
	);
};

// This view is being exported so that the data layer
// can inject props to this view component
export default ComponentExampleView;
