const API_KEY = '1ba1300f9999464b91ad2221ea24daba';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export async function fetchRecipes(query, cuisine, diet) {
    const url = new URL(BASE_URL);
    url.searchParams.append('apiKey', API_KEY);
    if (query) url.searchParams.append('query', query);
    if (cuisine) url.searchParams.append('cuisine', cuisine);
    if (diet) url.searchParams.append('diet', diet);
    url.searchParams.append('number', 10);

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}
