import 'core-js/stable';
import 'regenerator-runtime/runtime.js';
import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';
import paginationView from './view/paginationView.js';

// https://forkify-api.herokuapp.com/v2

//////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    resultsView.update(model.getResultsPage());

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

    resultsView.render(model.getResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getResultsPage(goToPage));

  paginationView.render(model.state.search);
};

const controlUpdateServings = function (newServing) {
  model.updateServings(newServing);
  recipeView.update(model.state.recipe);
};

const controlModifyBookmark = function () {
  model.updateBookmark();
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlUpdateServings);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(controlPagination);
};

init();
