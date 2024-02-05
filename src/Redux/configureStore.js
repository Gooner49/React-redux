//import {combineReducers} from 'redux';
import { createStore ,applyMiddleware } from 'redux';
//import createStore from './actions/courseActions';
import {thunk} from 'redux-thunk'
//import reduxImmutableStateInvariant from 'react-redux';
import rootReducer from './reducers/index';


   const storea = createStore ( rootReducer()  );


export default storea ;


