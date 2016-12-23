import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ClickListItem from './ClickListItem';

const ListItemGroup = ( {key, stats, statsOrder, StatListItemContainer} ) => {

    return (
        <ListGroup>
        {
            statsOrder.map(key => <StatListItemContainer key={key} statName={key} stats={stats} />)   
        }
        </ListGroup>
    );
}

export default ListItemGroup;