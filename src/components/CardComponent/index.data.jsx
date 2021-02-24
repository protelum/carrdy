import React, { useState, useEffect } from 'react';
import CardComponentView from './index.view';

import db from '../../db/dexie';

const CardComponentData = () => {

	const [data, setData] = useState(null);

	useEffect(async () => {
		const result = await db.card.toArray();
		setData(result);
	},[]);

	return (data!=null) && <CardComponentView mainArray = {data} />
};

export default CardComponentData;
