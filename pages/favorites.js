import {useEffect, useState } from 'react';
import localStorage from 'mobx-localstorage';
import Card from '../components/Card';

function Favorites(){

  const [result, setResult] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('favorites')){
      setResult(JSON.parse(localStorage.getItem('favorites')));
    }
  }, []);

  const delFavorite = id => {
    const newFav = result.filter(item => item.imdbID !== id);
    setResult(newFav);
    
    localStorage.setItem('favorites', JSON.stringify(newFav));
    console.log(JSON.parse(localStorage.getItem('favorites')));
    
};

  return(
    <div className="container">
      <center>
        <div className="row">
            {result.map((movie, index) => <Card key={index} delFavorite={delFavorite} movie={movie}/> )}
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


export default Favorites;