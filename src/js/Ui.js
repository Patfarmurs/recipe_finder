export function displayRecipes(recipes) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <button class="save-recipe" data-id="${recipe.id}">Save</button>
        `;
        resultsSection.appendChild(card);
    });
}

export function displayFavorites(favorites) {
    const favoritesSection = document.getElementById('favorites');
    favoritesSection.innerHTML = '';
    favorites.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <button class="remove-recipe" data-id="${recipe.id}">Remove</button>
        `;
        favoritesSection.appendChild(card);
    });
}

export function displayShoppingList(list) {
    const shoppingListSection = document.getElementById('shopping-list');
    shoppingListSection.innerHTML = '<ul>' + list.map(item => `<li>${item}</li>`).join('') + '</ul>';
}
