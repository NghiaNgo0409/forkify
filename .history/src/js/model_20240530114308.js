import { async } from 'regenerator-runtime';
import { API_URL } from './config';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    const data = await response.json();

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    state.recipe = recipe;
  } catch (error) {
    console.error(error);
  }
};