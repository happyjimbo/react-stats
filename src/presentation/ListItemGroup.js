import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ClickListItem from './ClickListItem';

const ListItemGroup = ( {count, StatListItemContainer} ) => {

    let items = [];
    for (let i = 0; i < count; i++) {
        items.push(i);
    }

    return (
        <ListGroup>
        {
            items.map(i => <StatListItemContainer key={i} statName={String(i)} />)            
        }
        </ListGroup>
    );
}

export default ListItemGroup;