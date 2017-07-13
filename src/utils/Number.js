export const numberAsDollar = (number) => {
    if (number != null) {
        number = number.toFixed(2)
        number = numberWithCommas(number)
        return "$" + number
    }
    return ""
}

export const numberWithCommas = (x) => {
    if (x != null) {
        const parse = parseFloat(x)
        x = Number(parse.toFixed(2))
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")    
    }
    return ""
}