import icon from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderError('Cannot find your query!');

    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icon}#icon-loader"></use>
      </svg>
    </div>`;

    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icon}.svg#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
  }
}
