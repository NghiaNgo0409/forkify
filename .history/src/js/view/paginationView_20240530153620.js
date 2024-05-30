import View from './View';
import icon from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage, 'next');
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(curPage, 'prev');
    }

    // Other page
    if (curPage < numPages) {
      return (
        this._generateMarkupButton(curPage, 'prev') +
        this._generateMarkupButton(curPage, 'next')
      );
    }

    // Page 1 and there are no other pages
    return '';
  }
}

export default new PaginationView();
