class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;

  render(data) {
    this.#data = data;
  }

  #generateMarkup() {}
}

export default new RecipeView();
