import React from 'react'
import { store } from './Src/redux/store/store';
import { Provider } from 'react-redux';
import Home from './Src/Screen/Home';

const App = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

export default App

