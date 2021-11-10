import React from 'react';
import Router from './store/Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import work_reducer from './store/reducers/work-reducer';

export default function App() {
    
    const store= createStore(work_reducer);

    return(
        <Provider store={store}>
            <Router/>
        </Provider>

    )
}