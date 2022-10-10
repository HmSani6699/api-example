const lodeCountry = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
lodeCountry()

const displayCountry = countryes => {
    const countryDiv = document.getElementById('countryes');
    countryes.forEach(country => {
        // console.log(country)  
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3> ${country.name}</h3>
        <p>${country.area}</p>
        <button onclick="lodeCountryByName('${country.name}')">Detail</button>
        `
        countryDiv.appendChild(div)
    })
}

const lodeCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => lodeDetaleDisplay(data[0]))
}

const lodeDetaleDisplay = data => {
    const datle = document.getElementById('datle');
    datle.innerHTML = `
    <h3>${data.name}</h3>
    <img src="${data.flags.png}" alt="" srcset="">
    `
}
