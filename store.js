import { observable, computed, action, decorate, autorun}  from 'mobx';
import localStorage from 'mobx-localstorage';
import Cookies from 'mobx-cookie'

class MovieStore {
    
    cookie = new Cookies('favorites');

    movielist = [];
    searchlist = [];

    get favorites() {
        return this.cookie.value;
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
let win = []
win.push({"Title":"Léon: The Professional","Year":"1994","Rated":"R","Released":"18 Nov 1994","Runtime":"110 min","Genre":"Action, Crime, Drama, Thriller","Director":"Luc Besson","Writer":"Luc Besson","Actors":"Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello","Plot":"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.","Language":"English, Italian, French","Country":"France","Awards":"6 wins & 14 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"8.5","imdbVotes":"971,127","imdbID":"tt0110413","Type":"movie","DVD":"15 Aug 2000","BoxOffice":"N/A","Production":"Columbia Pictures","Website":"N/A","Response":"True"});



store.setFavorites(win);

autorun(() => {
    const parse = JSON.stringify(store.favorites)
    console.log("autorun", JSON.parse(localStorage.getItem('favorites')));
    //store.set_movies(JSON.parse(localStorage.getItem('favorites')));
    
    store.set_movies(JSON.parse(parse));
    console.log("Test cookie ->", JSON.parse(parse));

});

//console.log("no-pre data ->", JSON.stringify(store.getAll))



export default store;