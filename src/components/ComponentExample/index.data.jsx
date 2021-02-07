import React from 'react';
import ComponentExampleView from './index.view';

const ComponentExampleData = () => {
	// handle all Data manipulation here
	// This is the Controller Section

	const time = Date.now();

  // Pass data as props to the View Component
	return <ComponentExampleView time={time} />;
};

export default ComponentExampleData;
