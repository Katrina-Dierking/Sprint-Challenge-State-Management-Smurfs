import React, {useContext} from 'react';
import SmurfContext from '../SmurfContext';

import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction:column;
max-width:20%;
justify-content: space-around;
margin-left: 40%;
margin-bottom:1%;
align-items: center;
font-family: The Wild Hammers;
border-top: 1px solid black;
border-bottom: 1px solid black;
background-color:#e3aec7;
`

const SmurfVillage = () => {
    const {smurfs, deleteSmurf} = useContext(SmurfContext);

    return (
        <>

        {smurfs.map(smurf => (
            <div>
                <Container>
                    <h3>Smurf Name: {smurf.name}
                    <br />
                    Age: {smurf.age}
                    <br />
                    Height: {smurf.height}cm</h3>

                    <button className = "remove-button"
                        onClick={() => deleteSmurf(smurf.id)}
                        >
                        Remove Smurf
                    </button>
                    <br />
                </Container>
            </div>
        ))}
        </>
    )
}

export default SmurfVillage