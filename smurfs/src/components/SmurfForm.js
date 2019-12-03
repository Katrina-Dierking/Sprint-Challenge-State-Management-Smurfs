import React, {useState, useContext} from 'react';
import SmurfContext from '../SmurfContext';

function SmurfForm () {

    const [newSmurf, setNewSmurf] = useState ({
        name: '',
        age: '',
        height: ''
    })

    const {addSmurf} = useContext(SmurfContext);

    const [membersData, setMembersData] = useState ([]);

    const handleChange = (e) => {
        setNewSmurf ({...newSmurf, [e.target.name] : e.target.value});
    };

    function handleSubmit (e) {
        console.log("button was clicked")
        e.preventDefault()
        addSmurf(newSmurf)
        setMembersData (prevMembers => [...prevMembers, newSmurf])
    };

    const members = membersData.map (member => 
        <h3 key = {member.name + member.age}>
            Smurf Name:{member.name}
            <br></br>
            Age: {member.age}
            <br></br>
            Height: {member.height} cm
        </h3>)

    return (
        <>

        <form onSubmit = {handleSubmit}>
            <input
                name = "name"
                value = {newSmurf.name}
                onChange = {handleChange}
                placeholder = "name"
                />

                <br />
                <br />

            <input 
                name="age"
                value={newSmurf.age}
                onChange={handleChange}
                placeholder= "age"
                />
                
                <br />
                <br />

            <input 
                name="height"
                value={newSmurf.height}
                onChange={handleChange}                    
                placeholder= "height"
                />
                
                <br />
                <br />

            <button>Add new Smurf</button>
            {members}

        </form>
    </>

    )
}

export default SmurfForm;