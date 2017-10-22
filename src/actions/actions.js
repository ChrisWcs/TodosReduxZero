import store from '../store/store';

export const deleteItem = (index) => () => {
    let todos = store.getState().todos;

    store.setState({
        todos: [ ...todos.slice( 0, index), ...todos.slice( index + 1, todos.length)]
    });
};

export const addItem = () => {
    let todos = store.getState().todos;
    store.setState({
        todos: [ ...todos, store.getState().text]
    });
};

export const changeText = (event) => {
    const {value} = event.target;

    store.setState({
        text:  value
    });
};