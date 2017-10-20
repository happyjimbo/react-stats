import makeStatsListItemData from './StatListItemSelector'

describe("StatListItemSelector", () => {

    const key = "monkey"
    const props = { statName: key }

    const displayDetailedStat = {
        [key]: false
    }
    const loading = {
        [key]: false
    }

    const errors = {
        [key]: false
    }

    let stats = {}

    const getStatsListItemData = makeStatsListItemData()

    const higherThanLastWeek = () => {
        stats = {
            [key] : [
                ["foo", 100],
                ["foo", 200],
                ["foo", 300],
                ["foo", 400],
                ["foo", 500],
                ["foo", 600],
                ["foo", 700],
                ["foo", 800],
                ["foo", 900]
            ]
        }

        const statReceivedReducer = { stats, displayDetailedStat, loading, errors }
        const state = { statReceivedReducer }

        return getStatsListItemData(state, props)
    }

    const lowerThanLastWeek = () => {
        stats = {
            [key] : [
                ["foo", 900],
                ["foo", 800],
                ["foo", 700],
                ["foo", 600],
                ["foo", 500],
                ["foo", 400],
                ["foo", 300],
                ["foo", 200],
                ["foo", 100]
            ]
        }
        const statReceivedReducer = { stats, displayDetailedStat, loading, errors }
        const reverseState = { statReceivedReducer }

        return getStatsListItemData(reverseState, props)
    }


    it("should return today value at position 8 in the stats object array", () => {
        const statListDat = higherThanLastWeek()

        const stat = stats[key][8][1]
        expect(statListDat.todayStat).toEqual(String(stat))
    })

    it("should return yesterday value at position 7 in the stats object array", () => {
        const statListDat = higherThanLastWeek()
        const stat = stats[key][7][1]
        expect(statListDat.yesterdayStat).toEqual(String(stat))
    })

    it("should return lastweek value at position 0 in the stats object array", () => {
        const statListDat = higherThanLastWeek()
        const stat = stats[key][1][1]
        expect(statListDat.yesterdayLastWeekStat).toEqual(String(stat))
    })

    if ("should return weekTotalStat multiplying all values from stats apart from the first", () => {
            const statListDat = higherThanLastWeek()
            const weekTotal = stats[key].reduce((total, value, index) => index !== 0 ? total + value : value)
            expect(statListDat.weekTotalStat, weekTotal)
        })

        if ("should return weekAverageStat multiplying all values from stats apart from the first then dividing by 7", () => {
                const statListDat = higherThanLastWeek()
                let weekTotal = stats[key].reduce((total, value, index) => index !== 0 ? total + value : value)
                weekTotal = weekTotal / 7
                expect(statListDat.weekTotalStat, weekTotal)
            })


            it("should return difference between today and yesterday", () => {
                const statListDat = higherThanLastWeek()
                const today = stats[key][8][1]
                const yesterday = stats[key][7][1]
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
        const yesterday = stats[key][7][1]
        const lastweek = stats[key][1][1]
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