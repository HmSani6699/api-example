const lodData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayData(data))
}
lodData();
const displayData = data => {
    const buddeis = data.results;
    const div = document.getElementById('container');
    for (const buddey of buddeis) {
        const p = document.createElement('p');
        p.classList.add('item')
        p.innerText = `
        ${'$'}
        Nmae: ${buddey.name.title} ${buddey.name.first} ${buddey.name.last}
         Email:${buddey.email}
         Address: ${buddey.location.country}
        `
        div.appendChild(p);
    }

}