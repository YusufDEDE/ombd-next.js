import {useEffect, useState } from 'react';
import localStorage from 'mobx-localstorage';
import Card from '../components/Card';
import {inject, observer} from 'mobx-react';

function Favorites(props){

  const {store} = props;
  const {movielist} = store;

  useEffect(() => {
    if(localStorage.getItem('favorites')){
      store.set_movies(JSON.parse(localStorage.getItem('favorites')));
    }
  }, []);

  const delFavorite = id => {
    store.remove_movie(id);
  };

  return(
    <div className="container">
      <center>
        <div className="row">
            {store.count > 0 ?
            (movielist.map((movie, index) => <Card key={index} delFavorite={delFavorite} addFavorite={delFavorite} movie={movie} favorited={movielist}/> ))
            : <h1>Not found favorited!</h1>
            }
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


export default inject('store')(observer(Favorites));