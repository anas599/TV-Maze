import axios from 'axios';
import { addComment, showComments } from './comments.js';

const showsList = document.querySelector('.shows-list');
const baseURL = 'https://api.tvmaze.com/shows/';
const modal = document.querySelector('.modal');

const popupHtml = (id, language, name, rating, genres, image, premiered) => {
  modal.innerHTML = '';

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.innerHTML = `
        <button id="close" class="close-icon-container">
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
        <div class="modal-head-container">
          <div class="movie-img-infos">
            <img class="movie-img" src="${image.original}"
              alt="movie-poster" srcset="">
            <div class="movie-infos-container">
              <a href="#" class="movie-name">
                ${name}
              </a>
            </div>
          </div>
        </div>
        <div class="movie-infos">
          <div class="language-rating">
            <p>Language: <span>${language}</span></p>
            <p>Rating: <span>${rating.average}</span></p>
          </div>
          <div class="language-rating">
            <p>Release Date: ${premiered}</p>
            <p>Genres: ${genres[0]}</p>
          </div>
        </div>
        <div class="comments-list-add-comment">
          <div class="comment-list">
            <h4></h4>
            <ul class="list">
            </ul>
          </div>
          <div class="add-comment">
            <h4>Add your comment</h4>
            <form id="form">
              <div>
                <input required type="text" name="username" id="username" placeholder="Your name">
              </div>
              <div>
                <input type="hidden" name="id" id="movie-id" value="${id}">
              </div>
              <div>
                <textarea required name="comment" id="comment" placeholder="Add your comment" rows="6"></textarea>
              </div>
              <div class="buttonContainer">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  `;

  modal.appendChild(modalContent);
  showComments(id, modal);
  modal.classList.toggle('hide');
};

const getPopupInfos = async (movieId) => {
  const url = baseURL + movieId;
  const { data } = await axios.get(url);
  const {
    id, language, rating, name, genres, image, premiered,
  } = data;
  popupHtml(id, language, name, rating, genres, image, premiered);
};

const showPopup = async (id) => {
  getPopupInfos(id);
};

const showPopupHandler = (target) => {
  const { id } = target.parentElement?.parentElement;
  showPopup(id);
};

showsList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.innerText !== 'Comments') return null;
  return showPopupHandler(target);
});

const hidePopup = () => modal.classList.toggle('hide');

modal.addEventListener('click', (e) => {
  const { target } = e;
  if (target?.innerText === 'close') hidePopup();
  if (target?.innerText === 'Submit') addComment(e, modal);
});