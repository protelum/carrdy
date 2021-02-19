import React from 'react';
import EachCard from '../EachCard';

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
		<div>
			{mainArray.map((eachCard, index) => (
				<EachCard title = {eachCard.title} content = {eachCard.content}/>
			))}
			{/* <EachCard title = {mainArray.pop().title} content = {mainArray.pop().content}/> */}
		</div>
	);
};

// This view is being exported so that the data layer
// can inject props to this view component
export default CardComponent;
