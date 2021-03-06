import React from 'react'
import PropTypes from 'prop-types'
import {ListGroupItem, Label} from 'react-bootstrap'
import './StatListItem.css'
import './Loader.css'

const StatListItem = (props) => {

    const { todayStat, yesterdayStat, weekAverageStat, yesterdayLastWeekStat } = props
    const { statName, selectClick, removeClick, arrow, displayLoader, error } = props
    const { todayStyle, todayHigherOrLower, todayDiff } = props
    const { lastWeekStyle, lastWeekHigherOrLower, lastWeekDiff } = props

    const loader = displayLoader ? "loader" : ""

    return (
        <div className="StatListItem">

            <ListGroupItem onClick={e => selectClick(statName)} header={statName} id="group">
                            
                <div className={loader}></div> 
                {error ? <p id="error">Error, trying again</p> : <div></div>}

                <a id="removeStyle" onClick={e => removeClick(statName, e)}>Remove</a>
                <p id="graphStyle" >Graph {arrow}</p>

                <p>Today: <Label bsStyle={todayStyle}>{todayStat}</Label> <Label bsStyle={todayStyle}>{todayDiff}% {todayHigherOrLower} than yesterday</Label></p>

                <p>Yesterday: <Label bsStyle={lastWeekStyle}>{yesterdayStat}</Label> last week: <Label bsStyle="primary">{yesterdayLastWeekStat}</Label> <Label bsStyle={lastWeekStyle}>{lastWeekHigherOrLower}{lastWeekDiff}%</Label></p>
                
                <p>Week average: <Label bsStyle="info">{weekAverageStat}</Label></p>
                
            </ListGroupItem>
        </div>
    )

}

StatListItem.PropTypes = {
    statName: PropTypes.string.isRequired,
    todayStat: PropTypes.string.isRequired,
    yesterdayStat: PropTypes.string.isRequired,
    yesterdayLastWeekStat: PropTypes.string.isRequired,
    weekAverageStat: PropTypes.string.isRequired,        
    click: PropTypes.func.isRequired
}

export default StatListItem