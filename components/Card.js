import localStorage from 'mobx-localstorage';
import React, { useState, useEffect } from 'react';
import css from '../style.scss';

function Card({movie, index, addFavorite, delFavorite}) {

    const [favorite, setFavorite] = useState([]);
    const [favstatus, setFavStatus] = useState(true);
    
    useEffect(() => {
      if(favorite !== null){
        setFavorite(JSON.parse(localStorage.getItem('favorites')));
      }
      
    }, []);

    if(Array.isArray(favorite)){
      let isFav = favorite.find(items => movie.imdbID === items.imdbID);
      if(isFav && favstatus !== false) {
          setFavStatus(false);
      }
    }
    
   
    return <div className="column" key={movie.id} id="poster">
            <div className="card text-white bg-dark mb-3">
                <div className={css.example}>{movie.Title} ({movie.Year})</div><hr />
                  <div className="container">
                    <h4 className="card-title"></h4>
                    <img src={movie.Poster} id="image"/>
                    <hr />
                    <p className="card-text container">
                      
                      <button id="win" className="btn btn-primary btn-sm" style={{display:favstatus ? "":"none"}} onClick={() => addFavorite(movie)}>
                        Favorite
                      </button>
                      <button className="btn btn-primary btn-sm" style={{display:favstatus ? "none":""}} onClick={() => delFavorite(movie)}>
                        Del Favorite
                      </button>
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

export default Card;


//<button style={{display:favstatus ? "none":""}} onClick={() => addFavorite(search)}>Fav</button>
//<button onClick={() => check(search)}>Ce</button>