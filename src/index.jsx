// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Provider will wrap around the main application. It is imported from the react-redux library
import { createStore, combineReducers } from 'redux';
// in Redux you have a method called createStore. The store needs a reducer to work.
// We create one reducer for every key in the Redux state tree and combine
// the reducers to pass to the store.

// IMPORT REDUCERS (you need to import each reducer)
import cityListReducer from './reducers/city_list_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// STATE AND REDUCERS
const reducers = combineReducers({
  cities: cityListReducer
});


// // State and reducers
// const reducers = combineReducers({
//   changeMe: (state = null, action) => state
// });

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
