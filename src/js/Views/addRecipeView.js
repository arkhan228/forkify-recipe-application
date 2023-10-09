import { View } from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _successMessage = 'Congratulations! Your recipe was successfully uploaded.';
  ings = ['ing-1'];
  _formRender = false;

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  // Handler method for uploading the recipe
  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  // If form is not rendered, renders the form and displays the window
  showWindow() {
    if (!this._formRender)
      this._parentEl.insertAdjacentHTML('afterbegin', this._generateMarkup());
    this._formRender = true;

    this._window.classList.remove('hidden');
    this._overlay.classList.remove('hidden');
  }

  // Hides the form window, does not clear the form
  hideWindow() {
    this._window.classList.add('hidden');
    this._overlay.classList.add('hidden');
  }

  // Hides (kills) the window and clears the form
  killWindow() {
    this.hideWindow();

    this.ings = ['ing-1'];
    this._clear();
    this._formRender = false;
  }

  // Handler method to display the window
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.showWindow.bind(this));
    this.ings = ['ing-1'];
  }

  // Handler method to hide/kill the window
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.killWindow.bind(this));

    this._overlay.addEventListener('click', this.hideWindow.bind(this));
  }

  // Adds an ingredient input field to the Dom
  addIngredient() {
    const markup = this._addIngMarkup();
    if (this.ings.length === 10) return;
    this.ings.push(`ing-${this.ings.length + 1}`);
    this._parentEl
      .querySelector('.upload__column')
      .insertAdjacentHTML('beforeend', markup);
  }

  // Handler method to add an ingredinet input field to the Dom
  addHandlerAddIng(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn_add');
      if (!btn) return;
      handler();
    });
  }

  // Removes an ingredinet input field from the Dom
  removeIngredient(lastChild) {
    this._parentEl.querySelector('.upload__column').removeChild(lastChild);
    this.ings.pop();
  }

  // Handler method to remove an ingredinet input field from the Dom
  addHandlerRemoveIng(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn_remove');
      if (!btn) return;
      const children = document.querySelector('.upload__column').children;
      const lastChild = children[children.length - 1];
      handler(lastChild);
    });
  }

  // Markup for upload recipe form
  _generateMarkup() {
    return `
        <div class="upload__column-data">
          <h3 class="upload__heading-data">Recipe data</h3>
          <label>Title</label>
          <input required name="title" type="text" minlength="3"/>
          <label>URL</label>
          <input required name="sourceUrl" type="text" minlength="5"/>
          <label>Image URL</label>
          <input required name="image" type="text" minlength="4"/>
          <label>Publisher</label>
          <input required name="publisher" type="text" minlength="4"/>
          <label>Prep time</label>
          <input required name="cookingTime" type="number" />
          <label>Servings</label>
          <input required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <div class="upload__column--ing">
            <label>Ingredient 1</label>
            <input
              type="number"
              step=".01"
              name="ingredient-1-1"
              placeholder="Quantity"
            />
            <input
              type="text"
              name="ingredient-1-2"
              placeholder="Unit"
            />
            <input
              type="text"
              required
              name="ingredient-1-3"
              placeholder="Description"
            />
            <button type="button" data-title="Add ingredient" class="btn_ing btn_add">
              <svg class="">
                <use href="${icons}#icon-plus"></use>
              </svg>
            </button>
          </div>
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `;
  }

  // Markup for adding an ingredient
  _addIngMarkup() {
    return `
          <div class="upload__column--ing">
            <label>Ingredient ${this.ings.length + 1}</label>
            <input
              type="number"
              step=".01"
              name="ingredient-${this.ings.length + 1}-1"
              placeholder="Quantity"
            />
            <input
              type="text"
              name="ingredient-${this.ings.length + 1}-2"
              placeholder="Unit"
            />
            <input
              type="text"
              required
              name="ingredient-${this.ings.length + 1}-3"
              placeholder="Description"
            />
            <button type="button" data-title="Remove ingredient" class="btn_ing btn_remove">
              <svg class="">
                <use href="${icons}#icon-minus"></use>
              </svg>
            </button>
          </div>
    `;
  }
}

export default new AddRecipeView();
