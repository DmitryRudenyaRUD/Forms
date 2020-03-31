import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {textInputs} from './Reducers/textInputs';
import {information} from './Reducers/information';
import {ContainerApp, ContainerHomepage} from './containers';
import {submitAsync} from './sagas';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {routerReducer} from 'react-router-redux';
import {Redirect} from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    routing: routerReducer,
    textInputs,
    information
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(submitAsync);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path='/authorization' component={ContainerApp}/>
            <Route path='/homepage' component={ContainerHomepage}/>
            <Redirect from='/' to='/authorization' />
        </Router>

    </Provider>,
    document.getElementById('root')
);
