import React from 'react';
import { Provider } from "redux-zero/react";
import store from './store/store';

import ConList from './containers/ConList';

const App = () => (
    <Provider store={store}>
        <ConList/>
    </Provider>
);

export default App;