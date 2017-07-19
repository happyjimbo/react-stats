import React, {PropTypes} from 'react'
import {ListGroupItem, Label} from 'react-bootstrap'
import './StatListItem.css'

const StatListItem = (props) => {

    const { todayStat, yesterdayStat, weekAverageStat, yesterdayLastWeekStat } = props
    const { statName, click } = props
    const { todayStyle, todayHigherOrLower, todayDiff } = props
    const { lastWeekStyle, lastWeekHigherOrLower, lastWeekDiff } = props

    return (
        <div className="StatListItem">
            <ListGroupItem onClick={e => click(statName)} header={statName} id="group">
                <p id="removeStyle">Remove</p>
                <p id="graphStyle" >Graph ▼</p>

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