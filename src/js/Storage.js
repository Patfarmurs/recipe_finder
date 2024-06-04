const FAVORITES_KEY = 'favorites';
const SHOPPING_LIST_KEY = 'shopping_list';

export function saveFavorite(recipe) {
    const favorites = getFavorites();
    favorites.push(recipe);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

export function removeFavorite(recipeId) {
    let favorites = getFavorites();
    favorites = favorites.filter(recipe => recipe.id !== recipeId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function addToShoppingList(item) {
    const shoppingList = getShoppingList();
    shoppingList.push(item);
    localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(shoppingList));
}

export function getShoppingList() {
    return JSON.parse(localStorage.getItem(SHOPPING_LIST_KEY)) || [];
}
