import localStorage from 'mobx-localstorage';
import React, { useState, useEffect } from 'react';
import css from '../style.scss';
import {inject, observer} from 'mobx-react';

function Card({store, movie, index, addFavorite, delFavorite}) {

    const [favorite, setFavorite] = useState([]);
    const [favCond, setFavcond] = useState(false);


    const {movielist} = store;

    useEffect(() => {
      if(favorite !== null){
        setFavorite(JSON.parse(localStorage.getItem('favorites')));
      }
      movielist.map((item) => item.imdbID === movie.imdbID ? setFavcond(true) : null)
    }, [favCond]);
   
    return <div className="column" id="poster">
            <div className="card text-white bg-dark mb-3">
                <div className={css.example}>{movie.Title} ({movie.Year})</div><hr />
                  <div className="container">
                    <h4 className="card-title"></h4>
                    <small>Rating : <b>{movie.imdbRating}</b></small>
                    <img src={movie.Poster !== "N/A" ? movie.Poster : "/default-movie.png"} id="image"/>
                    <hr />
                    <p className="card-text">
                    { favCond ?  ( 
                      <button className="btn btn-primary btn-sm"  onClick={() => {
                        delFavorite(movie); 
                        setFavcond(false)}}> 
                        Del Favorite</button>
                    ) : (<button className="btn btn-primary btn-sm" onClick={() => {
                      addFavorite(movie);
                      setFavcond(true);
                      }}>Favorite</button>) }
                  </p>
                  </div>
                 
                  
            </div>
            <style jsx>{`
                  .card-header {
                    font-size: 14px;
                  }
                  #image {
                    width: 100%;
                    height: 300px
                  }
                  #poster {
                    padding: 0 10px;
                  }
                  .card {
                    width:250px;
                    height:450px;
                    text-align: center;
                  }

                  .container {
                    margin: -10% 0% 0% 0%;
                  }

                  @media screen and (max-width: 600px) {
                  .column {
                    width: 100%;
                    display: block;
                    margin-bottom: 20px;
                  }
                }
            `}
            </style>
            
        </div>;
}

export default inject('store')(observer(Card));