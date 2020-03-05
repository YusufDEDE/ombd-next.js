import fetch from 'isomorphic-unfetch';
import localStorage from 'mobx-localstorage';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import {inject, observer} from 'mobx-react';


function Index(props) {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');

  const {store} = props;

  const addFavorite = object => {
      store.add_movie(object);
  };

  const delFavorite = index => {
      store.remove_movie(index);  
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(!title && !year && !type) return;
    const res = await fetch(`https://www.omdbapi.com/?s=${title}&y=${year}&type=${type}&apikey=8ae8b189`);
    const data = await res.json();

    store.get_movie(data.Search);

    data.Response === "True" ? null : alert("Movie not found!");
  } 
  
  return (
      <div className="container">
        <form className="form-inline" id="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="column">
              <input type="text" className="form-control" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="column">
              <input type="text" className="form-control" placeholder="Year" onChange={e => setYear(e.target.value)}/>
            </div>
            <div className="column">
              <select id="inputState" className="form-control" onChange={e => setType(e.target.value)}>
                <option defaultValue value="movie">movie</option>
                <option value="series">series</option>
                <option value="episode">episode</option>
              </select>
            </div>
            <button type="submit" className="btn btn-info">Search</button>
          </div>
        </form>
        <hr/>

        <center>
          <div className="row"> 
            {store.searchlist.map((movie, index) => (
            <Card key={movie.imdbID} 
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