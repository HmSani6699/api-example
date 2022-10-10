const lodeData = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => disPlayData(data.quote))
}

const disPlayData = quote => {
    const display = document.getElementById('demo');
    display.innerText = quote;
}