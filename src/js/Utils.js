// Debounce function to limit the rate at which a function can fire.
export function debounce(func, delay) {
    let debounceTimer;
    return function(...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Generate a unique ID (e.g., for recipe elements)
export function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Get an element by selector
export function getElement(selector) {
    return document.querySelector(selector);
}

// Format recipe data received from the API to a consistent structure
export function formatRecipeData(apiData) {
    return apiData.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        ingredients: recipe.ingredients || [], // Assuming the API returns an ingredients field
        instructions: recipe.instructions || "" // Assuming the API returns an instructions field
    }));
}

// Check if an item exists in an array
export function isInArray(array, item) {
    return array.some(element => element.id === item.id);
}
