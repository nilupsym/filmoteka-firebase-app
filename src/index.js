import './main.scss';
import './js/components/refs';
import './js/components/modalHandler';
import './js/components/header';
import './js/components/scrollToTopBtn.js';
import './js/components/my-lib';
import './js/composables/mainCards';
import './js/components/apiService';
import './js/components/youtubeApi';
// import './js/composables/footerModal';
import './js/components/singleFilmMarkup';
import './js/components/spinnerOnOff';
import posterImg from '/images/poster-not-avalible.jpg';
import './js/components/search- film';

import { displayStartPage } from './js/composables/mainCards.js';
displayStartPage();

//=====================================
// import './js/components/handleSignup';
// import './js/components/handleLogin';
import './js/components/handleLogout';
import './js/components/handleFilmID';
import './js/composables/getUser';
import './js/components/getLibrary';
import './js/components/setupUI';

//=====================================
import './js/composables/useLogin';
import './js/composables/useSignup';
import './js/composables/useLogout';
import './js/composables/useCollection';
//=====================================
import Router from './Router';

const router = new Router({
  mode: 'hash',
  root: '/',
});

router
  .add(/mylibrary/, () => {
    console.log('welcome in about page');
  })
  .add(/mylibrary\/watched/, () => {
    console.log('welcome in about page');
  })
  .add(/mylibrary\/queue/, () => {
    console.log('welcome in about page');
  });

//=====================================
// import './js/route.js';
// import './js/router.js';
// import './js/app.js';
//=====================================

import getCollection from './js/composables/getCollection';
// getCollection('queue');
import { projectFirestore } from './firebase/config';
import apiService from './js/components/apiService';

var app = new Vue({
  el: '#app',
  data: {
    queue: [],
  },
  mounted() {
    const ref = projectFirestore
      .collection('queue')
      .orderBy('createdAt', 'desc');
    ref.onSnapshot(snapshot => {
      let queue = [];
      snapshot.forEach(doc => {
        queue.push({ ...doc.data(), idFire: doc.id });
      });

      this.queue = queue;
    });
  },
});
