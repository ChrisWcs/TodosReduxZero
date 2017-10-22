import React from 'react';
import { addItem, changeText} from '../actions/actions';


const Input = ({ value }) => (
    <div>
        <input text="type" onChange={changeText} value={value}/>
        <button onClick={addItem}>enter</button>
    </div>
);

export default Input;