import {combineReducers} from 'redux';
import createStore from './actions/courseActions';
import reduxImmutableStateInvariant from 'react-redux';

const configureStore = (initialState ) => 
{
   return(
    createStore,initialState
   );
}

export default configureStore ;


