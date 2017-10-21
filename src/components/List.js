import React from 'react';

import { deleteItem } from '../actions/actions';

const List = ({todos}) => (
    <ul>
        {todos.map( (todo, index) => <li key={index}>{todo}<button onClick={deleteItem(index)}>x</button></li>) }
    </ul>
);

export default List;