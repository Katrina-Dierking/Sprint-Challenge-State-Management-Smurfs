import React, {useState, useEffect} from "react";
import axios from 'axios';
import SmurfForm from './SmurfForm';
import SmurfVillage from './SmurfVillage';
import SmurfContext from '../SmurfContext';

import "./App.css";


const App = () => {
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

  const addSmurf = smurf => {
    axios
      .post ('http://localhost:3333/smurfs', smurf)
      .then(response => {console.log(response)})
      .catch(error => console.log(error));
  };

  const deleteSmurf = smurfId => {
    axios 
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => {
        setSmurfs(response.data);
      })
      .catch(error => console.log(error));
  };

    return (
      <SmurfContext.Provider value = {{smurfs, addSmurf, deleteSmurf}}>
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
        <h2>Help fill our village with Smurfs</h2>


        <SmurfForm />
        <hr></hr>
        <SmurfVillage /> 
       
        
      </div>
      </SmurfContext.Provider>
    );
  }


export default App;
