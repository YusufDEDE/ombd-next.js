import { observable, computed, action, decorate, autorun}  from 'mobx';
import localStorage from 'mobx-localstorage';
import Cookie from 'mobx-cookie'


class MovieStore {
    
    cookie = new Cookie('favCookie');

    movielist = [];
    searchlist = [];

    get getCookies() {
        return this.cookie.value || [];
    }

    setCookie = value => {
        this.cookie.set(value);
    }

    unsetCookie = () => {
        this.cookie.remove();
    }

    // Movie Section //

    get count() {
        return this.movielist.length;
    }

    get getMovies() {
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

    isCookie() {   
        const movie = (localStorage.getItem('favorites'))
        movie !== null ? this.setCookie(movie) : console.log('local storage null'); 
    }
}

decorate(MovieStore, {
    cookie:observable,
    movielist: observable,
    searchlist: observable,
    
    getCookies:computed,
    count: computed,
    getMovies:computed,

    setCookie: action,
    movie: action,
    get_movie:action,
    set_movies: action,
    add_movies: action,
    remove_movie: action,

    isCookie:action
});

const store = new MovieStore();

autorun(() => {
    store.isCookie()
    
    console.log("autorun", JSON.parse(localStorage.getItem('favorites')));
    store.set_movies(JSON.parse(localStorage.getItem('favorites')));
    console.log(JSON.parse(store.getCookies));

    if(JSON.parse(store.getCookies).length !== null){
        console.log('cookie found');
        store.set_movies(JSON.parse(store.getCookies));
    } 

});


export default store;