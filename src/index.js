import './main.scss';
import './js/components/refs';
import './js/components/header';
import './js/components/scrollToTopBtn.js';
import './js/components/modal.js';
import './js/components/apiService';

import './js/components/handleSignup';

import './js/components/handleLogin';
import './js/components/handleLogout';
import './js/components/handleFilmID';
import './js/composables/getUser';
import './js/components/getLibrary';

import './js/composables/footerModal';



//============================
import './js/composables/useLogin';
import './js/composables/useSignup';
import './js/composables/useLogout';

import { displayStartPage } from './js/composables/mainCards.js';
displayStartPage();

import apiService from './js/components/apiService';

// apiService.query = 'wonder';

// const show = apiService.getMoviesData();
// console.log(show);
