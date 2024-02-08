//import {combineReducers} from 'redux';
import { createStore ,applyMiddleware } from 'redux';
//import createStore from './actions/courseActions';
import {thunk} from 'redux-thunk'
//import reduxImmutableStateInvariant from 'react-redux';
import rootReducer from './reducers/index';
const storebook = () => 
{
   const storea = createStore ( rootReducer );
   return storea;
}   

export default storebook ;


