import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//import lib
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

//import main scss
import "./scss/index.scss";

//browser and redux reducer 
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from 'redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';

//create composeEnhancer using window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancer(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
