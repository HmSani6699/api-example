const lodeUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => userDisplay(data.results));
}
lodeUser();

const userDisplay = data => {
    console.log(data)
    const container1 = document.getElementById('container');

    for (const user of data) {
        const div = document.createElement('div');
        div.classList.add('div')
        const h3 = document.createElement('h3');
        h3.innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`
        const p = document.createElement('p');
        p.innerText = `Email: ${user.email}`
        div.appendChild(p)
        div.appendChild(h3)
        container1.appendChild(div)
    }
}