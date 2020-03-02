import fetch from 'isomorphic-unfetch';
import localStorage from 'mobx-localstorage';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

function Index() {

  const [value, setValue] = useState();
  const [result, setResult] = useState([]);
  const [favorite, setFavorite] = useState([]);

  

  const addFavorite = object => {
      const newFav = [...favorite, object];
      setFavorite(newFav);
      localStorage.setItem('favorites', JSON.stringify(newFav));
      console.log(JSON.parse(localStorage.getItem('favorites')));
  };

  const delFavorite = index => {
      const newFav = [...favorite];
      newFav.splice(index, 1);
      setFavorite(newFav);
      
      localStorage.setItem('favorites', JSON.stringify(newFav));
      console.log(JSON.parse(localStorage.getItem('favorites')));
      
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(!value) return;
    const res = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=8ae8b189`);
    const data = await res.json();
    
    
    data.Response === "True" ? setResult(data.Search) : alert("Movie not found!");

    console.log(data);
    
  }

  return (
      <div className="container">
        <form className="form-inline" id="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="column">
              <input type="text" className="form-control" placeholder="Title" onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="column">
              <input type="text" className="form-control" placeholder="Year" />
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

export default Index;