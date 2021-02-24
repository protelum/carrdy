import React , {useState, useEffect} from 'react';
import AddCardComponentData from './index.data';

//this one should be in data file when possible
import db from '../../db/dexie'

const AddCardComponent = () => {
    //set the state and property
    const [cardTitle, setCardTitle] = useState("");
    const [cardContent, setCardContent] = useState("");
	
    //this function should be in another file. Keeping here temporarily 
    const getPostInfo = (e) => {
        if(cardTitle !== "" && cardContent !== "" ){
            let card = {
                title: cardTitle,
                content: cardContent,
            }
            db.card.add(card);
        }
        
        
    }

	return (
		<form onSubmit = {getPostInfo}>
            <label>Title</label>
            <input type="text" name="title" onChange={e => setCardTitle(e.target.value)}/>
            <label>Content</label>
            <textarea name="content" onChange={e => setCardContent(e.target.value)}/>
            <input type="submit" value="Submit" />
        </form>
	);
};

// This view is being exported so that the data layer
// can inject props to this view component
export default AddCardComponent;
