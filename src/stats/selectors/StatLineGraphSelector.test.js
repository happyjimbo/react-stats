import StatLineGraphSelector from './StatLineGraphSelector'
import makeStatLineGraphSelector from './StatLineGraphSelector'

describe("StatLineGraphSelector", () => {

    const items = [["foo", 100], ["foo", 200], ["foo", 300]]

    const selectorData = (items) => {
        const stats = {}
        const props = {items}

        const selector = makeStatLineGraphSelector()
        return selector(stats, props)
    }

     it ("has x and y values that are the correct time", () => {
        const {graphData} = selectorData(items)
        graphData.every((v, i) => expect(v.x).toEqual(items[i][0]))
        graphData.every((v, i) => expect(v.y).toEqual(items[i][1]))
    })

    it ("has layout items", () => {
        const {width, height, domainPadding, padding} = selectorData(items)

        expect(width).toBeTruthy()
        expect(height).toBeTruthy()
        expect(domainPadding).toBeTruthy()
        expect(padding).toBeTruthy()
    })

    it ("has graph label items", () => {
        const {tickFormatX, tickFormatY} = selectorData(items)

        expect(tickFormatX).toBeTruthy()
        expect(tickFormatY).toBeTruthy()
    })
})