import 'core-js/stable';
import 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

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
  }
};

const init = function () {
  model.addHandleRender(controlRecipe);
};

controlRecipe();
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, recipeContainer)
);
