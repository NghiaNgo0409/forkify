import icon from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const renderSpinner = function (parentElement) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icon}#icon-loader"></use>
      </svg>
    </div>`;

  parentElement.innerHTML = '';
  parentElement.insertAdjacentHTML('afterbegin', markup);
};

const getRecipe = async function () {
  renderSpinner(recipeContainer);

  const id = window.location.hash.slice(1);

  await model.loadRecipe(id);

  const { recipe } = model.state;
};

getRecipe();
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, recipeContainer)
);
