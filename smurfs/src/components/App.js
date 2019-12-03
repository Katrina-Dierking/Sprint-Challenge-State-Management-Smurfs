import React, {useState, useEffect} from "react";
import axios from 'axios';
import SmurfContext from '../SmurfContext';

import "./App.css";


function App (){
  const [smurfs, setSmurfs] = useState([])

  useEffect( () => {

    axios
      .get ('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        setSmurfs(response.data)
      })
      .catch (error => {
        console.log(error);
      })
  }, []);

    return (
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
        <h2>Help fill our village with Smurfs</h2>

        {/* <SmurfForm />
        <hr></hr>
        <SmurfVillage /> */}
        
      </div>
    );
  }


export default App;
