// parsování data

let dateObject = ''

const parseDate = (date) => {
    return dateObject = {
        day: Number(date.slice(0, 2)),
        month: Number(date.slice(3, 5)),
        year: date.slice(6)
    }
}

let { day, month, year } = dateObject

parseDate('03.02.1974')

document.querySelector('.date').innerHTML =
    `<p>day: ${dateObject.day}, month: ${dateObject.month}, year: ${dateObject.year}</p>`


// formátování data

const formatDate = ({ day: x, month: y, year: z }) => {
    let dateObject2 = { day: x, month: y, year: z }
    let values = Object.values(dateObject2)

    if (String(values[0]).length === 1 || String(values[1]).length === 1) {
        dayResult = String(values[0]).padStart(2, '0')
        monthResult = String(values[1]).padStart(2, '0')
    } else {
        dayResult = String(values[0])
        monthResult = String(values[1])
    }
    yearResult = String(values[2])
    document.querySelector('.formatDate').innerHTML = `<p>${dayResult}.${monthResult}.${yearResult}</p>`
}

formatDate({ day: 2, month: 12, year: 2015 })


// Python zaokrouhlování

const rounding = (decNumber) => {
    let integer = Math.trunc(decNumber)
    let fraction = Math.abs((decNumber - (integer)))
    if (fraction === 0.5) {
        if (integer % 2 === 0) {
            return integer
        } else if (integer < 0) {
            return Math.floor(decNumber)
        } else {
            return Math.ceil(decNumber)
        }
    } else {
        return Math.round(decNumber)
    }
}

console.log(rounding(-11.5))


// maximum ze tří čísel

const maximum = (a, b, c) => {
    if ((a > b) && (a > c)) {
        return a
    } else if ((a < b) && (b > c)) {
        return b
    } else if (
        ((a > b) && (a < c)) ||
        ((a < b) && (b < c))
    ) {
        return c
    }
}

console.log(maximum(30, 65, 15))












