const findLetter = (input) => {
    const data = input.toLowerCase()
    const gajah = /sang gajah/gi
    const harimau = /harimau/gi
    const serigala = /serigala/gi
    const resultGajah = data.match(gajah)
    const resultHarimau = data.match(harimau)
    const resultSerigala = data.match(serigala)
    const result = [...resultGajah, ...resultSerigala, ...resultHarimau]
    return result
}

console.log(findLetter('Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.'))