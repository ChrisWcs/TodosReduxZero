import React from 'react';
import PropTypes from 'prop-types';
import { addItem, changeText, clearTodos} from '../actions/actions';

const style = {
    button: {
        background: "black",
        color: "white",
        fontFamily: "Arial",
        border: "none",
        fontSize: "25px",
        cursor: "pointer",
        marginLeft: "10px",
    },
    input: {
        color: "black",
        fontFamily: "Arial",
        border: "solid 1px black",
        fontSize: "25px",
        cursor: "pointer",
        letterSpacing: "1px",
    }
};

const Input = ({ value }) => (
    <div>
        <input style={style.input} text="type" onChange={changeText} value={value}/>
        <button style={style.button} onClick={addItem}>Enter</button>
        <button style={style.button} onClick={clearTodos}>Clear All</button>
    </div>
);

Input.propTypes = {
    value: PropTypes.string
};

export default Input;