import { observable, computed, action, decorate}  from 'mobx';

class MovieStore {
    movielist = [];

    temp = 1;

    get count() {
        return this.movielist.length;
    }

    set_movies(array) {
        console.log('set movie', array);
        this.movielist = array || [];
    }

    add_movies(object) {
        this.movielist.push(object);
    }

    setTemp(i){
        this.temp = i;
    }
}

decorate(MovieStore, {
    movielist: observable,
    count: computed,
    set_movies: action,
    add_movies: action
});


const store = new MovieStore();
export default store;