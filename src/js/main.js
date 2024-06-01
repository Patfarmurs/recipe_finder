import { debounce, generateUniqueId, getElement, formatRecipeData, isInArray } from './Utils.js';
import { fetchRecipes } from './api.js';
import { displayRecipes, displayFavorites, displayShoppingList } from './Ui.js';
import { saveFavorite, getFavorites, removeFavorite, addToShoppingList, getShoppingList } from './Storage.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = getElement('#search-button');
    const searchInput = getElement('#search-input');

    const performSearch = async () => {
        const query = searchInput.value;
        const recipes = await fetchRecipes(query);
        const formattedRecipes = formatRecipeData(recipes);
        displayRecipes(formattedRecipes);
    };

    // Use debounce to limit the rate of search input handling
    searchButton.addEventListener('click', debounce(performSearch, 300));

    getElement('#results').addEventListener('click', event => {
        if (event.target.classList.contains('save-recipe')) {
            const recipeId = event.target.dataset.id;
            const recipeCard = event.target.closest('.recipe-card');
            const recipe = {
                id: recipeId,
                title: recipeCard.querySelector('h3').innerText,
                image: recipeCard.querySelector('img').src
            };
            if (!isInArray(getFavorites(), recipe)) {
                saveFavorite(recipe);
                displayFavorites(getFavorites());
            }
        }
    });

    getElement('#favorites').addEventListener('click', event => {
        if (event.target.classList.contains('remove-recipe')) {
            const recipeId = event.target.dataset.id;
            removeFavorite(recipeId);
            displayFavorites(getFavorites());
        }
    });

    displayFavorites(getFavorites());
    displayShoppingList(getShoppingList());
});
