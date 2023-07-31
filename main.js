// PARSOVÁNÍ DATA

let dateObject = ''

const parseDate = (date) => {
    return dateObject = {
        day: Number(date.slice(0, 2)),
        month: Number(date.slice(3, 5)),
        year: Number(date.slice(6))
    }
}

let { day, month, year } = dateObject

parseDate('03.02.1974')

console.log(dateObject)

document.querySelector('.date').innerHTML =
    `<p>day: ${dateObject.day}, month: ${dateObject.month}, year: ${dateObject.year}</p>`


// FORMÁTOVÁNÍ DATA

const formatDate = ({ day: x, month: y, year: z }) => {
    let dateObject2 = { day: x, month: y, year: z }
    let { day, month, year } = dateObject2
    return (String(day).padStart(2, '0') + '.' + String(month).padStart(2, '0') + '.' + String(year))
}

document.querySelector('.formatDate').innerHTML = formatDate({ day: 3, month: 2, year: 1974 })


// PYTHON ZAOKROUHLOVÁNÍ

let decNumber = prompt('Zadej desetinné číslo')

while (validator.isDecimal(decNumber, { decimal_digits: '1.' })) {
    alert('Číslo musí být desetinné')
    decNumber = prompt('Zadej znovu desetinné číslo')
}

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
    }
    return Math.round(decNumber)
}

console.log(rounding(Number(decNumber)))


// MAXIMUM ZE TŘÍ ČÍSEL

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

console.log(maximum(105, 201, 65))











