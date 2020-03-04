import { observable, computed, action, decorate}  from 'mobx';
import localStorage from 'mobx-localstorage';

class MovieStore {
    movielist = [];
    searchlist = [];

    get count() {
        return this.movielist.length;
    }

    async movie(id, array, name) {
        console.log(id);
        const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=8ae8b189`);
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
            console.log("ww", item.imdbID)
            this.movie(item.imdbID, this.searchlist, 'search');
        })
    }

    remove_movie(index) {
        this.movielist.splice(this.movielist.indexOf(index), 1);
        localStorage.setItem('favorites', JSON.stringify(this.movielist));
    };
}

decorate(MovieStore, {
    movielist: observable,
    searchlist: observable,
    count: computed,
    movie: action,
    get_movie:action,
    set_movies: action,
    add_movies: action,
    remove_movie: action
});


const store = new MovieStore();
export default store;