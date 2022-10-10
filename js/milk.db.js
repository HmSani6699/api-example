const milkBnt = () => {
    const milkDb = document.getElementById('milk-input');
    const milkValue = milkDb.value;

    if (milkValue == '') {
        const notSrche = document.getElementById('notSrche');
        const h3 = document.createElement('h3');
        h3.innerText = 'No srche'
        notSrche.appendChild(h3)
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${milkValue}
    `
        fetch(url)
            .then(res => res.json())
            .then(data => disPlaySearchFood(data.meals))
    }
    milkDb.value = '';
}

const disPlaySearchFood = meals => {
    // console.log(meals[0])
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    if (meals.length == 0) {
        const notSrche1 = document.getElementById('notSrche-1');
        const h3 = document.createElement('h3');
        h3.innerText = 'No srche'
        notSrche1.appendChild(h3)
    }
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="clickDisplay(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}"
                    class="card-img-top"
                    alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)
            }</p>
            <h4>Price =$$ ${meal.idMeal} </h4>
                </div>
        `
        cardContainer.appendChild(div)
    });
}

const clickDisplay = mealId => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.meals[0]))
}

const display = meal => {
    const click_One_Food = document.getElementById('click-one-food');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}
            </h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)
        }</p>
            <a href="${meal.strYoutube
        }"
            class="btn btn-primary">Go
            somewhere</a>
        </div>
    `
    click_One_Food.appendChild(div)
}