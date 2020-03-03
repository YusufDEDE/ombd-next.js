import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import localStorage from 'mobx-localstorage';
import Card from '../components/Card';

@inject('store')
@observer

class Mob extends React.Component {
  componentDidMount() {
    const {store} = this.props;
    if(localStorage.getItem('favorites')){
      store.set_movies(JSON.parse(localStorage.getItem('favorites')));
    }
  }
  

  render() {
    const {store} = this.props;
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
}

export default Mob;