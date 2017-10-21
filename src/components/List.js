import React from 'react';

const List = ({todos}) => (
    <ul>
        {todos.map( (todo, index) => <li key={index}>{todo}</li>) }
    </ul>
);

export default List;