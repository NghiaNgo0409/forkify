import 'core-js/stable';
import 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';

// https://forkify-api.herokuapp.com/v2

//////////////////////////////////////

const controlRecipe = async function () {
  try {
    recipeView.renderSpinner();

    const id = window.location.hash.slice(1);

    await model.loadRecipe(id);

    const { recipe } = model.state;

    recipeView.render(recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError(err);
  }
};

const controlSearch = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    console.log(model.state.search.results);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.)
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearch);
};

init();
controlRecipe();
