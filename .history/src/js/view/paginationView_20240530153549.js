import View from './View';
import icon from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.results');
}

export default new PaginationView();
