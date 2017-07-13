import makeGetStatsListItemData from './StatListItemSelector'

describe("StatListItemSelector", () => {

    const key = "monkey"
    const props = { statName: key }    
    let stats = {}

    const getStatsListItemData = makeGetStatsListItemData()

    const higherThanLastWeek = () => {
        stats = {
            [key] : [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }

        const statReceivedReducer = { stats }
        const state = { statReceivedReducer }        
        
        return getStatsListItemData(state, props)
    }

    const lowerThanLastWeek = () => {
        stats = {
            [key] : [900, 800, 700, 600, 500, 400, 300, 200, 100]
        }
        const statReceivedReducer = { stats }
        const reverseState = { statReceivedReducer }

        return getStatsListItemData(reverseState, props)
    }
   

    it("should return today value at position 8 in the stats object array", () => {
        const statListDat = higherThanLastWeek()
        expect(statListDat.todayStat).toEqual("$" + String(stats[key][8]))
    })

    it("should return yesterday value at position 7 in the stats object array", () => {   
        const statListDat = higherThanLastWeek()
        expect(statListDat.yesterdayStat).toEqual("$" + String(stats[key][7]))
    })

    it("should return lastweek value at position 0 in the stats object array", () => {  
        const statListDat = higherThanLastWeek()    
        const stat = stats[key]
        expect(statListDat.yesterdayLastWeekStat).toEqual("$" + String(stat[stat.length - 8]))
    })

    it("should return difference between today and yesterday", () => {    
        const statListDat = higherThanLastWeek()
        const today = stats[key][8]
        const yesterday = stats[key][7]        
        const diff = Math.round(((today - yesterday) / yesterday) * 100)
        expect(statListDat.todayDiff).toEqual(diff)
    })

    it("should return todayStyle as success if yesterday was higher than last week", () => {    
        const statListDat = higherThanLastWeek()
        expect(statListDat.todayStyle).toEqual("success")
    })

    it("should return todayStyle as warning if yesterday was lower than last week", () => {    
        const statListDat = lowerThanLastWeek()
        expect(statListDat.todayStyle).toEqual("warning")
    })

    it("should return todayHigherOrLower as higher if yesterday was higher than last week", () => {    
        const statListDat = higherThanLastWeek()
        expect(statListDat.todayHigherOrLower).toEqual("higher")
    })

    it("should return todayHigherOrLower as lower if yesterday was lower than last week", () => {    
        const statListDat = lowerThanLastWeek()
        expect(statListDat.todayHigherOrLower).toEqual("lower")
    })

    it("should return difference between yesterday and last week", () => {    
        const statListDat = higherThanLastWeek()
        const stat = stats[key]
        const yesterday = stat[stat.length - 2]
        const lastweek = stat[stat.length - 8]
        const diff = Math.round(((yesterday - lastweek) / lastweek) * 100)
        expect(statListDat.lastWeekDiff).toEqual(diff)
    })

    it("should return lastWeekStyle as success if yesterday was higher than last week", () => {    
        const statListDat = higherThanLastWeek()
        expect(statListDat.lastWeekStyle).toEqual("success")
    })

    it("should return lastWeekStyle as danger if yesterday was lower than last week", () => {    
        const statListDat = lowerThanLastWeek()
        expect(statListDat.lastWeekStyle).toEqual("danger")
    })

    it("should return lastWeekHigherOrLower as + if yesterday was higher than last week", () => {    
        const statListDat = higherThanLastWeek()
        expect(statListDat.lastWeekHigherOrLower).toEqual("+")
    })

    it("should return lastWeekHigherOrLower as empty if yesterday was lower than last week", () => {    
        const statListDat = lowerThanLastWeek()
        expect(statListDat.lastWeekHigherOrLower).toEqual("")
    })
})