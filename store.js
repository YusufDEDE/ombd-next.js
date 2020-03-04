import { observable, computed, action, decorate}  from 'mobx';
import localStorage from 'mobx-localstorage';

class MovieStore {
    movielist = [];

    get count() {
        return this.movielist.length;
    }

    set_movies(array) {
        this.movielist = array || [];
    }

    add_movie(object) {
        this.movielist.push(object);
        localStorage.setItem('favorites', JSON.stringify(this.movielist));
    }

    remove_movie(index) {
        this.movielist.splice(this.movielist.indexOf(index), 1);
        localStorage.setItem('favorites', JSON.stringify(this.movielist));
    };
}

decorate(MovieStore, {
    movielist: observable,
    count: computed,
    set_movies: action,
    add_movies: action,
    remove_movie: action
});


const store = new MovieStore();
export default store;