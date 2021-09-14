import React, { Component } from 'react';
import axios from 'axios';
import GetAllSongs from './GetAllSongs/GetAllSongs';
import SearchSongs from './SearchSongs/SearchSongs'


class App extends Component {
    constructor(props){
        super(props);
        this.state = [];
        }






    render(){
        return(
            <div>
            <h1>Music Library:</h1>
              <GetAllSongs />
              <SearchSongs />
            </div>
        );              
    }
}


export default App;