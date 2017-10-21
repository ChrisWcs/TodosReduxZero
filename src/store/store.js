import createStore from "redux-zero";

const initialStore = {
    todos: ["hw1", "hw2", "work"]
};

const store = createStore( initialStore );

export default store;