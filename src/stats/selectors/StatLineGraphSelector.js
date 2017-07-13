import {createSelector} from 'reselect'
import {STATS_AMOUNT} from '../consts/StatTypes'

// Selector prevents this data from being computed everytime the container
// is notified of a state change and will only recalculate when needed.
const StatLineGraphSelector = () => {

    const getItems = (stats, props) => props.items

    return createSelector(
        [getItems], 
        (items) => {

            let data = []
            const today = new Date()
            today.setDate(today.getDate() - STATS_AMOUNT)

            if (items !== undefined) {
                items.map(stat => {
                    today.setDate(today.getDate() + 1)
                    data.push({
                        x: new Date(today),
                        y:stat
                    })
                })
            }

            return {        
                values: data
            }
        }
    ) 
}

export default StatLineGraphSelector