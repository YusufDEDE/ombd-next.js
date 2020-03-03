import React, { useEffect } from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import localStorage from 'mobx-localstorage';
import Card from '../components/Card';

function Mob(props) {
  
    useEffect(() => {
      const {store} = props;
      if(localStorage.getItem('favorites')){
        store.set_movies(JSON.parse(localStorage.getItem('favorites')));
      }   
    }, []);

    const {store} = props;
    const {movielist} = store;
    
    return (
      <div className="container">
        <center>
          <div className="row">
              {movielist.map((movie, index) => <Card key={index} movie={movie}/> )}
          </div>
        </center>
      </div>
    )
  
}

export default inject('store')(observer(Mob));

