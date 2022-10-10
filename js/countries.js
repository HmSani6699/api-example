const lodeCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
lodeCountries()
const displayCountries = countries => {
    // for (const countri of countries) {
    //     console.log(countri)
    // }
    const countriDiv = document.getElementById('container');
    countries.forEach(countri => {
        // console.log(countri);
        const div = document.createElement('div');
        div.style.border = '3px solid gray';
        div.style.margin = '10px';
        const h4 = document.createElement('h4');
        h4.innerText = countri.name.common;
        div.appendChild(h4);
        const p = document.createElement('p');
        p.innerText = countri.capital;
        div.appendChild(p);
        countriDiv.appendChild(div);
    });
}
