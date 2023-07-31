// Formátování data - ukázka z hodiny

const formatDatum = (datum) => {
    let den = datum.den
    let mesic = datum.mesic
    let rok = datum.rok

    if (den < 1 || den > 31) {
        return 'Chybně zadaný den'
    } else if (mesic < 1 || mesic > 12) {
        return 'Chybně zadaný měsíc'
    }

    return (String(den).padStart(2, '0') + '.' + String(mesic).padStart(2, '0') + '.' + String(rok).padStart(4, '20'))
}

let mojeDatum = { den: 3, mesic: 14, rok: 23 }
console.log(formatDatum(mojeDatum))

