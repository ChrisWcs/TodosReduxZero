import React from 'react';
import PropTypes from 'prop-types';

import { deleteItem } from '../actions/actions';

const style = {
    button: {
        border: "solid 1px black",
        marginLeft: "5px",
        background: "white",
        cursor: "pointer",
    },
    text: {
        fontFamily: "Arial",
        marginTop: "10px"
    }
};

const List = ({todos}) => (
    <ul>
        {todos.map( (todo, index) => (<li style={style.text} key={index}>{todo}
                                        <button style={style.button} onClick={deleteItem(index)}>x</button>
                                      </li>)) }
    </ul>
);

List.propTypes = {
    todos: PropTypes.array
};

export default List;