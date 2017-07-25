import {createSelector} from 'reselect'
import {numberAsDollar} from '../../utils/Number'

// Selector prevents this data from being computed everytime the container
// is notified of a state change and will only recalculate when needed.
const makeGetStatsListItemData = () => {

    const getStats = (state) => state.statReceivedReducer.stats
    const getDisplayDetail = (state, props) => state.statReceivedReducer.displayDetailedStat[props.statName]
    const getStatData = (state, props) => getStats(state)[props.statName]
    const getStatType = (state, props) => props.statType
    
    return createSelector(
        [getStatData, getStatType, getDisplayDetail], 
        (statData, statType, displayDetail) => {

            if (statData != null && statData.length > 0) {            
                
                const decorate = (stat) => stat !== null ? numberAsDollar(stat) : ""     

                const todayFromData = statData.length - 1
                const today = statData[todayFromData]
                const todayStat = decorate(today)

                const yesterdayIndex = statData.length - 2
                const yesterday = statData[yesterdayIndex]
                const yesterdayStat = decorate(yesterday)

                const lastWeekIndex = statData.length - 8
                const lastweek = statData[lastWeekIndex]
                const yesterdayLastWeekStat = decorate(lastweek)

                // is week total correct for rolling?          
                statData = statData.slice(statData.length - 7, statData.length)      
                const weekTotal = statData.length > 0 ? statData.reduce((total, value, index) => index !== 0 ? total + value : value) : 0

                const weekAverage = weekTotal / 7            
                const weekAverageStat = decorate(weekAverage)

                return Object.assign({}, calculateStyles(today, yesterday, lastweek), {    
                    todayStat,
                    yesterdayStat,
                    yesterdayLastWeekStat,
                    weekAverageStat,
                    displayDetail
                })
            } else {
                return {}
            }
        }
    )
}

const calculateStyles = (today, yesterday, lastweek) => {

    const todayValue = Math.round(((today - yesterday) / yesterday) * 100)
    const todayDiff = todayValue || 0

    const todaySuccess = todayDiff > 0
    
    const todayStyle = todaySuccess ? "success" : "warning"
    const todayHigherOrLower = todaySuccess ? "higher" : "lower"

    const lastWeekValue = Math.round(((yesterday - lastweek) / lastweek) * 100)
    const lastWeekDiff = lastWeekValue || 0
    const lastWeeksuccess = lastWeekDiff > 0
    
    const lastWeekStyle = lastWeeksuccess ? "success" : "danger"
    const lastWeekHigherOrLower = lastWeeksuccess ? "+" : ""

    return {
        todayStyle,
        todayHigherOrLower,
        todayDiff,
        lastWeekStyle,
        lastWeekHigherOrLower,
        lastWeekDiff,        
    }
}

export default makeGetStatsListItemData