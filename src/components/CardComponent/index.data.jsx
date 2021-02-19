import React, { useState, useEffect } from 'react';
import CardComponentView from './index.view';

import db from '../../db/dexie';

const CardComponentData = () => {

	const [data, setData] = useState("");
	const [complete, setComplete] = useState(false);

	useEffect(async () => {
		const result = await db.card.toArray();
		setData(result);
		setComplete(true)
	},[]);

	return complete && <CardComponentView mainArray = {data}/>;
};

export default CardComponentData;
