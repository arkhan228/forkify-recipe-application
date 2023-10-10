import { View } from './View.js';
import previewView from './previewView.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.bookmarks');
  _errorMessage = 'No bookmarks yet! Find a nice recipe and bookmark it :)';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView._generateMarkup(bookmark))
      .join('');
  }

  // Handler for adding and removing bookmarks
  addHandlerRenderBookmarks(handler) {
    window.addEventListener('load', handler);
  }
}

export default new PaginationView();
