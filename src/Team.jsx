import { useState } from "react"

export default function Team() {
    const [teamCount, setTeam] = useState(11);
    const handleAdd = () => {
        const newAddTeam = teamCount + 1;
        setTeam(newAddTeam);
    }

    const handelRemove = () => {
        const newRemoveTeam = teamCount - 1;
        setTeam(newRemoveTeam);
    }
    const teamStyle = {
        border: '2px solid gray',
        margin: '20px',
        padding: '15px',
        borderRadius:'10px'
    }
    const btnStyle = {
        padding: '10px',
        color: 'white',
        background: 'gray',
        marginRight:'5px',
    }
    return (
        <div style={teamStyle}>
            <h3>Players: { teamCount }</h3>
            <button style={btnStyle} onClick={handleAdd}>Player Add</button>
            <button style={btnStyle} onClick={handelRemove}>Player Remove</button>
        </div>
    )
}