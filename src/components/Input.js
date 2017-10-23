import React from 'react';
import { addItem, changeText} from '../actions/actions';

const style = {
    button: {
        background: "black",
        color: "white",
        fontFamily: "Arial",
        border: "none",
        fontSize: "25px",
        cursor: "pointer"
    },
    input: {
        color: "black",
        fontFamily: "Arial",
        border: "solid 1px black",
        fontSize: "25px",
        cursor: "pointer",
        letterSpacing: "1px",
        marginRight: "10px"
    }
};

const Input = ({ value }) => (
    <div>
        <input style={style.input} text="type" onChange={changeText} value={value}/>
        <button style={style.button} onClick={addItem}>enter</button>
    </div>
);

export default Input;