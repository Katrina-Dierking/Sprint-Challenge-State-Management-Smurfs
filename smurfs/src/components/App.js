import React, {useState, useEffect} from "react";
import axios from 'axios';

import SmurfForm from './SmurfForm';
import SmurfVillage from './SmurfVillage';
import SmurfContext from '../SmurfContext';

import "./App.css";
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 5%;
align-items: center;
font-family: The Wild Hammers;
font-size: 20px;
border-top: 1px solid black;
border-bottom: 1px solid black;
background-color:#00a8db;
`


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
        <Container>
        <img class="logo" src="./img/logo-smurfs.png" alt = "Smurf Logo"/>
        <h1>Welcome to Smurf Village</h1>
        <h2>Help fill our village with Smurfs</h2>
        </Container>


        <SmurfForm />
        <hr></hr>
        <SmurfVillage /> 
       
        
      </div>
      </SmurfContext.Provider>
    );
  }


export default App;
