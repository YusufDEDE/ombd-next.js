import fetch from 'isomorphic-unfetch';
import localStorage from 'mobx-localstorage';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import {inject, observer} from 'mobx-react';


function Index(props) {

  const [value, setValue] = useState();
  const [result, setResult] = useState([]);

  const {store} = props;

  const addFavorite = object => {
      store.add_movie(object);
      console.log(JSON.parse(localStorage.getItem('favorites')));
  };

  const delFavorite = index => {
      store.remove_movie(index);
      console.log(JSON.parse(localStorage.getItem('favorites')));  
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(!value) return;
    const res = await fetch(`http://www.omdbapi.com/?s=${value}&y=${value}&apikey=8ae8b189`);
    const data = await res.json();
    
    data.Response === "True" ? setResult(data.Search) : alert("Movie not found!");

    console.log(data);
  }

  useEffect(() => {
    if(localStorage.getItem('favorites')){
      store.set_movies(JSON.parse(localStorage.getItem('favorites')));
    }
  }, []);

  return (
      <div className="container">
        <form className="form-inline" id="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="column">
              <input type="text" className="form-control" placeholder="Title" onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="column">
              <input type="text" className="form-control" placeholder="Year" onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="column">
              <select id="inputState" className="form-control">
                <option defaultValue>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <button type="submit" className="btn btn-info">Search</button>
          </div>
        </form>
        <hr/>

        <center>
          <div className="row">
            {result.map((movie, index) => (
            <Card key={index} 
              index={index} 
              movie={movie}
              addFavorite={addFavorite}
              delFavorite={delFavorite}
              favorited={store.movielist}
              /> 
            ))}
          </div>
        </center>

        <style jsx>{`
          .form-control {
            margin-right:12px;
            
          }
        }
        `}</style>
    </div>
    );
};

export default inject('store')(observer(Index));