import React, {PropTypes} from 'react'
import {ListGroup} from 'react-bootstrap'

const ListGroupComponent = ( {  items, 
                                itemType, 
                                keys, 
                                displayDetails, 
                                ListItem, 
                                SelectablePanel} ) => {

    const style = { paddingTop: "1em" }
    return (        
        <div style={style}>
            <ListGroup >
            {       
                keys.map(itemKey =>
                    <div key={itemKey} >                         
                        <ListItem statName={itemKey} statType={itemType} stats={items} />
                        { SelectablePanel !== undefined ? panel(SelectablePanel, itemKey, items, displayDetails) : <div></div> }                        
                    </div>                           
                )   
            }
            </ListGroup>
        </div>
    )
}

const panel = (SelectablePanel, itemKey, items, displayDetails) => {
    return (
        <SelectablePanel statName={itemKey} 
                        stats={items}
                        displayDetails={displayDetails} />
    )
}

ListGroupComponent.PropTypes = {
    items: PropTypes.object.isRequired,
    itemType: PropTypes.string.isRequired,    
    ListItem: PropTypes.object.isRequired,
    PanelContainer: PropTypes.object.isRequired
}

export default ListGroupComponent