import React from 'react';
import { Provider } from "redux-zero/react";
import store from './store/store';

import ConList from './containers/ConList';
import ConInput from './containers/ConInput';

const App = () => (
    <Provider store={store}>
        <div>
            <ConInput/>
            <ConList/>
        </div>
    </Provider>
);

export default App;