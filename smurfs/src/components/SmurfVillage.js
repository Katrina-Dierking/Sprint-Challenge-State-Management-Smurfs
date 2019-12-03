import React, {useContext} from 'react';
import SmurfContext from '../SmurfContext';

import styled from 'styled-components'

function SmurfVillage () {
    const {smurfs, deleteSmurf} = useContext(SmurfContext);

    return (
        <>

        {smurfs.map(smurf => (
            <div>
                <Container>
                    <h3>SMurf Name: {smurf.name}
                    <br />
                    Age: {smurf.age}
                    <br />
                    Height: {smurf.height} cm </h3>

                    <button className = "remove-button"
                        onClick = {() => deleteSmurf(smurf.id)}
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