import View from './View';
import icon from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
        <a class="preview__link" href="#${result.id}">
        <figure class="preview__fig">
            <img src="${result.image}" alt="Test" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            </div>
        </div>
        </a>
    </li>`;
  }

  getResultsPage() {
    return this._data.state.search.results.slice(0, 10);
  }
}

export default new ResultsView();