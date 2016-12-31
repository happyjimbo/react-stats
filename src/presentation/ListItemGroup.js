import React, {PropTypes} from 'react';
import {ListGroup} from 'react-bootstrap';

const ListItemGroup = ( {stats, statsOrder, StatListItemContainer} ) => {
    return (
        <ListGroup>
        {            
            statsOrder.map(statKey => <StatListItemContainer key={statKey} statName={statKey} stats={stats} />)   
        }
        </ListGroup>
    );
}

ListItemGroup.PropTypes = {
    stats: PropTypes.object.isRequired,
    statsOrder: PropTypes.array.isRequired,
    StatListItemContainer: PropTypes.object.isRequired
};

export default ListItemGroup;