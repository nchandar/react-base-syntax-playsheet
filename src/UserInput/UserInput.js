import React from 'react';

const UserInput = (props) => {
    return <input type='text' style={props.style} onChange={props.onchanged} value={props.value}></input>
}

export default UserInput;