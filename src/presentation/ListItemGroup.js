import React, {PropTypes} from 'react';
import {ListGroup} from 'react-bootstrap';

const ListItemGroup = ( {stats, statsOrder, prices, displayDetails, StatListItemContainer, StatPanelContainer} ) => {
    return (
        <ListGroup>
        {       
            statsOrder.map(statKey => 
                <div key={statKey} >     
                    <StatListItemContainer  statName={statKey} 
                                            stats={stats}
                                            prices={prices} />

                    <StatPanelContainer statName={statKey} 
                                        stats={stats} 
                                        displayDetails={displayDetails} />
                </div>                       
            )   
        }
        </ListGroup>
    );
}

ListItemGroup.PropTypes = {
    stats: PropTypes.object.isRequired,
    statsOrder: PropTypes.array.isRequired,
    prices: PropTypes.object.isRequired,
    StatListItemContainer: PropTypes.object.isRequired
};

export default ListItemGroup;