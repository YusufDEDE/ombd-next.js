import {useEffect, useState } from 'react';
import localStorage from 'mobx-localstorage';
import Card from '../components/Card';
import store from '../store';
import {observer} from 'mobx-react';

function Favorites(){

  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log(store.temp);

    if(localStorage.getItem('favorites')){
      setResult(JSON.parse(localStorage.getItem('favorites')));
      store.set_movies(JSON.parse(localStorage.getItem('favorites')));
    }
  }, []);

  const delFavorite = id => {
    const newFav = store.movielist.filter(item => item.imdbID !== id);
    setResult(newFav);
    
    localStorage.setItem('favorites', JSON.stringify(newFav));
    store.set_movies(JSON.parse(localStorage.getItem('favorites')));
    console.log(JSON.parse(localStorage.getItem('favorites')));
    
};

  return(
    <div className="container">
      <center>
        <div className="row">
            {store.movielist.map((movie, index) => <Card key={index} delFavorite={delFavorite} movie={movie}/> )}
        </div>
      </center>
    <style jsx>{`
         #image {
            width: 100%;
            height: 300px
          }
          #poster {
            padding: 0 10px;
          }
          .card {
            width:250px;
            height:420px;
            text-align: center;
          }
          @media screen and (max-width: 600px) {
          .column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
          }
        }

        `}</style>
  </div>
  )};


export default observer(Favorites);