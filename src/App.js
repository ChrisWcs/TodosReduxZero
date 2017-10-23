import React from 'react';
import { Provider } from "redux-zero/react";
import store from './store/store';

import ConList from './containers/ConList';
import ConInput from './containers/ConInput';

const style = {
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
};

const App = () => (
    <Provider store={store}>
        <div style={style.column}>
            <ConInput/>
            <ConList/>
        </div>
    </Provider>
);

export default App;