import View from './View';
import icon from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');

  _generateMarkupPreview() {
    this._data.map(this._generateMarkup).join('');
  }

  _generateMarkup(result) {
    return `
    <li class="preview">
        <a class="preview__link preview__link--active" href="#${result.id}">
        <figure class="preview__fig">
            <img src="${result.image}" alt="Test" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
            <svg>
                <use href="${icon}#icon-user"></use>
            </svg>
            </div>
        </div>
        </a>
    </li>`;
  }
}

export default new ResultsView();
