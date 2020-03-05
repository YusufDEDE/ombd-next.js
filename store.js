import { observable, computed, action, decorate, autorun}  from 'mobx';
import localStorage from 'mobx-localstorage';
import Cookies from 'mobx-cookie'

class MovieStore {
    
    cookie = new Cookies('favorites');

    movielist = [];
    searchlist = [];

    get favorites() {
        return this.cookie.value.all;
    }

    setFavorites = value => {
        this.cookie.set(value); // 2 day
    }

    unsetFavorites = () => {
        this.cookie.remove();
    }

    get count() {
        return this.movielist.length;
    }

    get getAll() {
        return this.movielist;
    }

    async movie(id, array, name) {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=8ae8b189`);
        const data = await res.json();
        array.push(data);
        localStorage.setItem(name, JSON.stringify(array));
    }

    set_movies(array) {
        this.movielist = array || [];
    }

    add_movie(object) {
        this.movie(object.imdbID, this.movielist, 'favorites');
    }

    get_movie(id) {
        this.searchlist = []
        id.map(item => {
            this.movie(item.imdbID, this.searchlist, 'search');
        })
    }

    remove_movie(index) {
        this.movielist.splice(this.movielist.indexOf(index), 1);
        localStorage.setItem('favorites', JSON.stringify(this.movielist));
    };
}

decorate(MovieStore, {
    cookie:observable,
    movielist: observable,
    searchlist: observable,
    
    favorites:computed,
    count: computed,
    getAll:computed,

    setFavorites: action,
    movie: action,
    get_movie:action,
    set_movies: action,
    add_movies: action,
    remove_movie: action
});


const store = new MovieStore();

autorun(() => {
    
    console.log("autorun", JSON.parse(localStorage.getItem('favorites')));
    store.set_movies(JSON.parse(localStorage.getItem('favorites')));
});

export default store;