import axios from 'axios';
import refs from './refs';

export default {
  page: 1,
  searchQuery: '',
  keyApi: '5c34acfe39a6372a620da68979c929b1',
  baseURL: '',
  error: null,

  async fetchMovies() {
    this.error = null;
    this.searchQuery
      ? (this.baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${this.keyApi}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`)
      : (this.baseURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.keyApi}&page=${this.page}`);
    // return axios.get(this.baseURL).then(({ data }) => data.results);

    try {
      let res = await axios.get(this.baseURL);
      res = await res.data;
      // res = await res.data.results;
      this.error = null;

      return res;
    } catch (err) {
      console.log(err.message);
      this.error = 'could not fetch data';
    }
  },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
  async getMoviesData() {
    let array = [];
    const filmArr = [];
    await this.fetchMovies()
      .then(data => {
        console.log(data);
        array = [...data.results];
        let str = '';
        array.forEach(e => {
          const obj = {};
          obj.id = e.id;
          obj.popularity = e.popularity;
          obj.poster_path = e.poster_path;
          obj.title = e.title;
          str = '';
          let genreArray = [];
          [...e.genre_ids].forEach(number => {
            refs.genres.forEach(ref => {
              if (number === ref.id) {
                genreArray.push(ref.name);
              }
            });
          });
          str = genreArray.join(', ');
          obj.genre_ids = str;
          obj.overview = e.overview;
          obj.vote_average = e.vote_average;
          obj.vote_count = e.vote_count;

          filmArr.push(obj);
        });
      })
      .catch(err => console.log(err));
    return filmArr;
  },
};
