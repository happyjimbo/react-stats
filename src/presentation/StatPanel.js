import React, {PropTypes, Component} from 'react';
import {Panel} from 'react-bootstrap';

class StatPanel extends Component {

    render() {

        const display = this.props.display;
        const text = this.props.text;

        // Use SCSS instead of inline.
        const divStyle = {
            wordWrap: "break-word"
        };

        return (
            <div>
                <Panel collapsible expanded={display} style={divStyle}>
                    {text}
                </Panel>
            </div>
        );
    }

    static propTypes = {
        display: PropTypes.bool.isRequired,    
        text: PropTypes.string.isRequired
    }  
}

export default StatPanel;