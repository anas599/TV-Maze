import '../styles/style.css';
import './modules/popup.js';
import './modules/comments.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
import './get-shows-api.js';
import './fetchLikes-API.js';
import './likePlus-API.js';
import logo from '../images/logo.png';
import counter from './Counter.js';

const imgLogo = document.querySelector('.logo');
imgLogo.src = logo;
counter();