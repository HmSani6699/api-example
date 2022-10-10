const kanyeCode = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => quoteelement(data))
}

const quoteelement = data => {
    const quote = document.getElementById('quote');
    quote.innerText = data.quote;
}