import React, { Component } from "react";
import axios from 'axios';


class GetAllSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }
    componentDidMount(){
        this.getSongList();
    }

    async getSongList(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    async deleteSong(songID){
        let response = await axios.delete('http://127.0.0.1:8000/music/' + songID);
        console.log(response);
        window.location.reload();
    }

    render(){
        return(
            <div>
            {/* <hr/> */}
            <h2>All Songs:</h2>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </thead>
                {this.state.songs.map((song)=>{
                    return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td><button onClick ={()=> this.deleteSong(song.id)}>Delete</button></td> 
                        </tr>  
                    );
                })}
            </table>
            </div>
         );
    }

}

export default GetAllSongs;