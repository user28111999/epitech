import React from 'react';
import ReactDOM from 'react-dom';
var formReducer = require('redux-form').reducer;


//Initialisation de Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// initialisation Router
import { BrowserRouter } from 'react-router-dom';

import RoutesList from './js/components/routesList';

import Home from './js/components/Home';

import activeFilter from './js/reducers/filter.reducer';
import selectedSerie from './js/reducers/selectedserie.reducer';
import activeLink from './js/reducers/link.reducer';
import nutSerie from './js/reducers/nutserie.reducer';
import currentUser from './js/reducers/currentUser.reducer';


const globalReducers = combineReducers({selectedSerie, activeFilter, activeLink, nutSerie, currentUser, form: formReducer});


const store = createStore(globalReducers, {selectedSerie: selectedSerie} );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RoutesList/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("container")
);
