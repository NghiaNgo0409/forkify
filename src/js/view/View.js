import icon from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderError(this._errorMessage);

    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((element, index) => {
      const curElement = curElements[index];

      // Updates changed TEXT
      if (
        !element.isEqualNode(curElement) &&
        element.firstChild?.nodeValue.trim() !== ''
      ) {
        curElement.textContent = element.textContent;
      }

      // Updates changed ATTRIBUTES
      if (!element.isEqualNode(curElement)) {
        Array.from(element.attributes).forEach(attr =>
          curElement.setAttribute(attr.name, attr.value)
        );
      }
    });
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
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
